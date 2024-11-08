const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3000;

// Datos de la biblioteca
app.get('/api/autor/getLibAut', (req, res) => {
    res.json({
        msg: "OK",
        info: [
            {
                "_id": "66bf971d9642e24d9404c1ed",
                "isbn": "3331",
                "autor": "66bf9638ad13ab1b19943344",
                "titulo": "El gran libro de angular",
                "_v": 0,
                "ragar": {
                    "_id": "66bf9638ad13ab1b19943344",
                    "nombre": "GABRIELA MISTRAL"
                }
            },
            {
                "_id": "66bf97529642e24d9404c1f3",
                "isbn": "3333",
                "autor": "66bf967cad13ab1b19943346",
                "titulo": "Python",
                "_v": 0,
                "ragar": {
                    "_id": "66bf967cad13ab1b19943346",
                    "nombre": "HEMINGWAY"
                }
            },
            {
                "_id": "66bf976a9642e24d9404c1f6",
                "isbn": "3334",
                "autor": "66bf9697ad13ab1b19943347",
                "titulo": "Java",
                "_v": 0,
                "ragar": {
                    "_id": "66bf9697ad13ab1b19943347",
                    "nombre": "BORGES"
                }
            },
            {
                "_id": "66bffea4d5d48dc580339d7c",
                "isbn": "3335",
                "autor": "66bf9666ad13ab1b19943345",
                "titulo": "Profecías de Juan 23",
                "_v": 0,
                "ragar": {
                    "_id": "66bf9666ad13ab1b19943345",
                    "nombre": "GABRIEL GARCIA MARQUEZ"
                }
            },
            {
                "_id": "66bfff39d5d48dc580339d82",
                "isbn": "3336",
                "autor": "66bf967cad13ab1b19943346",
                "titulo": "El piratico barco fantastico",
                "_v": 0,
                "ragar": {
                    "_id": "66bf967cad13ab1b19943346",
                    "nombre": "HEMINGWAY"
                }
            },
            {
                "_id": "66c00038d5d48dc580339d8b",
                "isbn": "3337",
                "autor": "66bf9697ad13ab1b19943347",
                "titulo": "La historia interminable",
                "_v": 0,
                "ragar": {
                    "_id": "66bf9697ad13ab1b19943347",
                    "nombre": "BORGES"
                }
            }
        ]
    });
});

// Endpoint: retorna la información de biblioteca
app.get('/api/autor/getLibAut', (req, res) => {
    res.json(biblioteca);
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
