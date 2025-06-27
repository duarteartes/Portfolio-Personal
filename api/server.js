const express = require('express');
const cors = require('cors');
const trabajosRoutes = require('./routes/trabajos');
const authRoutes = require('./routes/auth.js')
const contactRoutes = require('./routes/contact');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/trabajos', trabajosRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));