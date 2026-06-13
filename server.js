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
            precio: "145€"
        },
        {
            compania: "Ryanair",
            origen: origen,
            destino: destino,
            precio: "89€"
        },
        {
            compania: "Vueling",
            origen: origen,
            destino: destino,
            precio: "112€"
        }
    ]);

});

// Configuración para Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor encendido en el puerto ${PORT}`);
});
