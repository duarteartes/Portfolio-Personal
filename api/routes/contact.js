const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// ⚠️ Sustituye esta contraseña por una contraseña de aplicación de Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'duarte.eartes@gmail.com',
        pass: 'nhic aqmk mmiz xyob' // ⚠️ NO uses tu contraseña normal
    }
});

router.post('/', (req, res) => {
    const { nombre, telefono, email, mensaje } = req.body;

    if (!nombre || !telefono || !email || !mensaje) {
        return res.status(400).json({ success: false, error: 'Faltan campos obligatorios.' });
    }

    const mailOptions = {
        from: `"Portfolio" <${email}>`,
        to: 'duarte.eartes@gmail.com',
        subject: `Nuevo mensaje de contacto de ${nombre}`,
        text: `
Has recibido un nuevo mensaje desde tu portfolio:

Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${email}

Mensaje:
${mensaje}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('❌ Error al enviar el correo:', error);
            return res.status(500).json({ success: false, error: 'Error al enviar el mensaje.' });
        }
        console.log('✅ Correo enviado:', info.response);
        res.json({ success: true, message: 'Mensaje enviado correctamente.' });
    });
});

module.exports = router;