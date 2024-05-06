const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 8888;

const pool = new Pool
    ({
        user: 'postgres',
        host: 'localhost',
        database: 'backendherois',
        password: 'ds564',
        port: 7007,
    });



app.use(express.json());

app.get('/', (req, res) => {
    res.send('A rota está funcionando!');
});

//Pegar todos os herois 
app.get('/herois', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM herois');
        res.json({
            total: resultado.rowCount,
            heroi: resultado.rows,
        })
    } catch (error) {
        console.error('Erro ao obter todos os herois', error);
        res.status(500).send('Erro ao obter os herois');
    }
});

app.post('/herois', async (req, res) => {
    try {
        const { name, power, level, hp } = req.body;
        await pool.query('INSERT INTO herois (name, power, level, hp) VALUES ($1, $2, $3, $4)', [name, power, level, hp]);

        res.status(201).send('Heroi criado com sucesso!');
    } catch (error) {
        console.error('Erro ao criar o Heroi', error);
        res.status(500).send('Erro ao criar o Heroi');
    }
});

app.put('/herois/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, power, level, hp } = req.body;

        await pool.query('UPDATE herois SET name = $1, power = $2, level = $3, hp = $4 WHERE id = $5', [name, power, level, hp, id]);
        res.status(201).send({ mensagem: 'Heroi atualizado com sucesso!' });

    } catch (error) {
        console.error('Erro ao atualizar o heroi', error);
        res.status(500).send('Erro ao atualizar o heroi');
    }
});

app.delete('/herois/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM herois WHERE id = $1', [id]);
        res.status(201).send({ mensagem: 'Heroi excluído com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir Heroi:', error);
        res.status(500).send('Erro ao excluir Heroi');
    }
});

app.get('/herois/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query('SELECT * FROM herois WHERE id = $1', [id]);
        if (resultado.rowCount === 0) {
            return res.status(404).send('heroi não encontrado');
        } else {
            res.json({
                heroi: resultado.rows[0],
            });
        }
    } catch (error) {
        console.error('Erro ao obter o heroi', error);
        res.status(500).send('Erro ao obter o heroi');
    }
});

app.listen(PORT, () => {
    console.log(`Rodando perfeitamente na porta ${PORT} 🚀`);
});