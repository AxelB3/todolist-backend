const { conexion } = require('../config/database')

class tareasController {

  getTareas = async (req, res) =>  {
    const [rows] = await conexion.query('select * from tareas where active = true')
    res.json(rows)
  }

  postTareas = async (req, res) => {
    const { titulo, descripcion } = req.body
    const [rows] = await conexion.query(`call crear_tarea('${titulo}', '${descripcion}')`)
    var success = false

    if (rows.length > 0) {
      success = true
    }

    res.json({tareas: rows[0], success: success})
  }

  actualizarTareas =  async (req, res) => {
    const { id, titulo, descripcion } = req.body
    const [rows] = await conexion.query(`call actualizar_tarea(${id} ,'${titulo}', '${descripcion}')`)
    var success = false

    if (rows.length > 0) {
      success = true
    }

    res.json({tareas: rows[0], success: success})
  }

  eliminarTareas =  async (req, res) => {
    const { id, titulo, descripcion } = req.body
    const [rows] = await conexion.query(`call eliminar_tarea(${id})`)
    var success = false

    if (rows.length > 0) {
      success = true
    }

    res.json({tareas: rows[0], success: success})
  }
}

module.exports = new tareasController();