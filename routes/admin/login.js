var express = require('express');
var router = express.Router();
       var usuariosModel = require('./../../models/usuariosModel');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', { title: 'admin/login'});
});

router.post('/', async (req, res, next) => {
  try {
    var nombre = req.body.nombre;
var apellido = req.body.apellido;
var password = req.body.password;

var data = await usuariosModel.getUserByPassword(nombre, apellido, password);
     
     if (data != undefined) {
       req.session.id_usuario = data.id;
       req.session.nombre = data.nombre;
       res.redirect('/admin/novedades');
     } else {
         res.render('admin/login', {
            layout: 'admin/layout',
            error: true
          });
      }
   } catch (error) {
         console.log(error);
   } //cierre catch

});  //cierre router.post

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/admin/login');
    });
});

module.exports = router;