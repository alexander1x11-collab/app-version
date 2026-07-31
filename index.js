const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta única para la versión de la app
app.get('/api/version-app', (req, res) => {
    res.json({
        versionName: "1.2",
        versionCode: 3,
        updateUrl: "https://soundypc.com/dolar-hoy-la-herramienta-definitiva-para-el-control-cambiario-y-financiero-en-venezuela/"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor de versiones corriendo en el puerto ${PORT}`);
});
