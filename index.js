const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 8888;

const pool = new Pool
    ({
        user: 'postgres',
        host: 'localhost',
        database: 'backend-herois',
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

app.listen(PORT, () => {
    console.log(`Rodando perfeitamente na porta ${PORT} 🚀`);
});