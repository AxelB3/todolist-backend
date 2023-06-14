var express = require('express');
var router = express.Router();
const tareas  = require('../controllers/tareas.controller')

router.get('/tareas', tareas.getTareas);
router.post('/tareas/crear', tareas.postTareas);
router.put('/tareas/actualizar', tareas.actualizarTareas);
router.put('/tareas/eliminar', tareas.eliminarTareas);

module.exports = router;
