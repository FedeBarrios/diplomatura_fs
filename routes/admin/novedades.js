var express = require('express');
var router = express.Router();
var mensajesModel = require('../../models/mensajesModel');

router.post('/:id/eliminar', async (req, res, next) => {
    try {
        await mensajesModel.eliminarMensaje(req.params.id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        var mensajes = await mensajesModel.getMensajes();
        res.render('admin/novedades', {
            title: 'admin/novedades',
            nombre: req.session.nombre,
            mensajes: mensajes
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get('/:id/editar', async (req, res, next) => {
    try {
        var mensaje = await mensajesModel.getMensajePorId(req.params.id);
        res.render('admin/editar', {
            title: 'admin/editar',
            nombre: req.session.nombre,
            mensaje: mensaje
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.post('/:id/editar', async (req, res, next) => {
    try {
        await mensajesModel.actualizarMensaje(req.params.id, req.body);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;