const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta única para la versión de la app
app.get('/api/version-app', (req, res) => {
    res.json({
        versionName: "1.1",
        versionCode: 2,
        updateUrl: "https://www.mediafire.com/file/tiguyherntnj2f1/DOLARHOY_1.1_n.apk/file"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor de versiones corriendo en el puerto ${PORT}`);
});
