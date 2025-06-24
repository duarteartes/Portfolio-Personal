CREATE DATABASE IF NOT EXISTS portfolio;

USE portfolio;

CREATE TABLE IF NOT EXISTS trabajos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    imagenPrincipal VARCHAR(255),
    galeria TEXT,
    categoria VARCHAR(100)
);