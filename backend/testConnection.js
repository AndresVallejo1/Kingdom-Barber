const sql = require('mssql');

const config = {
    server: 'DESKTOP-SK30TTA',
    database: 'ProyectoBarberiaDB',
    options: {
        trustServerCertificate: true
    }
};

async function test() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('SELECT 1 AS Test');
        console.log(result.recordset);
    } catch (err) {
        console.error('ERROR EN CONEXIÓN:', err.message);
    }
}

test();
