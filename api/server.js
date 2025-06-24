const express = require('express');
const cors = require('cors');
const trabajosRoutes = require('./routes/trabajos');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/trabajos', trabajosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));