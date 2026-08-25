var pool = require('./bd');   
var md5 = require('md5');   

async function getUserByPassword(nombre, apellido, password) {
    try {
        var query = "SELECT * FROM usuarios WHERE nombre = ? AND apellido = ? AND clave = ? limit 1";
        var rows = await pool.query(query, [nombre, apellido, md5(password)]);
        return rows[0];
    } catch (error) {
        throw error;
    }
}
module.exports = {getUserByPassword}