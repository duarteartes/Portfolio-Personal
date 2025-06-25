const express = require('express');
const cors = require('cors');
const trabajosRoutes = require('./routes/trabajos');
const authRoutes = require('./routes/auth.js')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/trabajos', trabajosRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));