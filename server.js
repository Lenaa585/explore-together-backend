const express = require('express');
const cors = require('cors');
const app = express();

// CORS es vital: Permite que tu frontend de GitHub Pages hable con este servidor seguro
app.use(cors()); 

// Esta es tu primera ruta de API. Escucha en la dirección /api/buscar
app.get('/api/buscar', (req, res) => {
    // El servidor lee las variables que el usuario escribió en el HTML
    const origen = req.query.origen;
    const destino = req.query.destino;

    // Aquí es donde en el futuro pondremos los cálculos matemáticos reales.
    // De momento, el servidor responde con este paquete de datos (JSON):
    res.json({
        [
  {
    compania: "Iberia",
    precio: "145€"
  },
  {
    compania: "Ryanair",
    precio: "82€"
  },
  {
    compania: "Vueling",
    precio: "97€"
  }
]
    });
});

// Configuración para que funcione tanto en tu ordenador como en Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor encendido en el puerto ${PORT}`);
});
