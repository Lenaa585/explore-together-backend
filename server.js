const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Ruta API
app.get('/api/buscar', (req, res) => {

    const origen = req.query.origen;
    const destino = req.query.destino;

  res.json([
    {
        compania: "Iberia",
        origen: origen,
        destino: destino,
        salida: "08:30",
        llegada: "10:15",
        precio: "145€"
    },
    {
        compania: "Ryanair",
        origen: origen,
        destino: destino,
        salida: "12:45",
        llegada: "14:30",
        precio: "89€"
    },
    {
        compania: "Vueling",
        origen: origen,
        destino: destino,
        salida: "18:10",
        llegada: "19:55",
        precio: "112€"
    }
]);
});

// Configuración para Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor encendido en el puerto ${PORT}`);
});
