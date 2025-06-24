const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Obtener todos los trabajos
router.get('/', (req, res) => {
    db.query('SELECT * FROM trabajos', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Obtener un trabajo por su ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM trabajos WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'Trabajo no encontrado' });
        res.json(results[0]);
    });
});

// Obtener todos los trabajos de una categoría específica
router.get('/categoria/:categoria', (req, res) => {
    const { categoria } = req.params;
    const sql = 'SELECT * FROM trabajos WHERE categoria = ?';
    db.query(sql, [categoria], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Insertar un nuevo trabajo
router.post('/', (req, res) => {
    const { titulo, descripcion, imagen_principal, galeria, categoria } = req.body;
    const sql = 'INSERT INTO trabajos (titulo, descripcion, imagen_principal, galeria, categoria) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [titulo, descripcion, imagen_principal, JSON.stringify(galeria), categoria], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId });
    });
});

// Eliminar un trabajo por su ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM trabajos WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Trabajo no encontrado' });
        res.json({ message: 'Trabajo eliminado correctamente' });
    });
});

module.exports = router;