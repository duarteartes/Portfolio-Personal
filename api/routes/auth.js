const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Login
router.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;
    const sql = 'SELECT * FROM admin WHERE usuario = ? AND contrasena = ?';
    db.query(sql, [usuario, contrasena], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(401).json({ error: 'Credenciales inválidas' });
        res.json({ success: true, message: 'Login correcto'});
    });
});

// Logout simulado
router.post('/logout', (req, res) => {
    res.json({ success: true, message: 'Sesión cerrada'});
});

module.exports = router;