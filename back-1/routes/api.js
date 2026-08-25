var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var pool = require('../models/bd');

router.post('/contacto', async (req, res) => {
    var query = "INSERT INTO mensajes (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)";
    await pool.query(query, [req.body.nombre, req.body.email, req.body.telefono, req.body.mensaje]);
    const mail = {
        to: process.env.MAIL_TO,
        subject: 'Contacto web',
        html: `${req.body.nombre} se contactó a través de la web y quiere más información a este correo: ${req.body.email} <br> Además, dejó el     siguiente mensaje: ${req.body.mensaje} <br> Su teléfono es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: "Mensaje enviado"
    });

});

module.exports = router;