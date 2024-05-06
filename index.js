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


app.listen(PORT, () => {
    console.log(`Rodando perfeitamente na porta ${PORT} 🚀`);
});