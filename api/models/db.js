const mysql = require('mysql2');

const connectionWithoutDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connectionWithoutDB.connect(err => {
    if (err) throw err;
    console.log('Conectado a MySQL sin DB');

    // Crear base de datos si no existe
    connectionWithoutDB.query('CREATE DATABASE IF NOT EXISTS portfolio', (err) => {
        if (err) throw err;
        console.log('Base de datos portfolio creada o ya existía');

        // Cerrar conexión sin DB
        connectionWithoutDB.end();

        // Crear conexión con la base de datos portfolio
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'portfolio'
        });

        connection.connect(err => {
            if (err) throw err;
            console.log('Conectado a la base de datos portfolio');

            // Crear tablas si no existen
            const createTrabajos = `
                CREATE TABLE IF NOT EXISTS trabajos (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    titulo VARCHAR(255) NOT NULL,
                    descripcion TEXT,
                    imagenPrincipal VARCHAR(255),
                    galeria TEXT,
                    categoria VARCHAR(100)
                );
            `;

            const createAdmin = `
                CREATE TABLE IF NOT EXISTS admin (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    usuario VARCHAR(100) NOT NULL,
                    contrasena VARCHAR(255) NOT NULL
                );
            `;

            connection.query(createTrabajos, (err) => {
                if (err) throw err;
                console.log('Tabla trabajos creada o ya existía');

                connection.query(createAdmin, (err) => {
                    if (err) throw err;
                    console.log('Tabla admin creada o ya existía');
                });
            });
        });
    });
});

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio'
});