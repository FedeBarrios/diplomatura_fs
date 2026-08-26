var pool = require('./bd');

async function getMensajes() {
    try {
        var query = "SELECT * FROM mensajes ORDER BY id DESC";
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function eliminarMensaje(id) {
  await pool.query('DELETE FROM mensajes WHERE id = ?', [id]);
}

async function actualizarMensaje(id, datos) {
    var query = "UPDATE mensajes SET nombre = ?, email = ?, telefono = ?, mensaje = ? WHERE id = ?";
    await pool.query(query, [datos.nombre, datos.email, datos.telefono, datos.mensaje, id]);
}

async function getMensajePorId(id) {
    var query = "SELECT * FROM mensajes WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

module.exports = { getMensajes, eliminarMensaje, actualizarMensaje, getMensajePorId };
