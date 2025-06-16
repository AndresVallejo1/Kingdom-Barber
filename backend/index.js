console.log("👉 Este es el archivo correcto que se está ejecutando");

const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// ✅ Configuración usando usuario SQL
const dbConfig = {
    user: 'kingdom_user',
    password: 'Kingdom123*',
    server: 'DESKTOP-SK30TTA', // ← este debe ser el nombre exacto de tu servidor SQL
    database: 'ProyectoBarberiaDB',
    options: {
        trustServerCertificate: true
    }
};

app.use(cors());
app.use(bodyParser.json());

// Ejemplo de endpoint: listar usuarios
app.get('/api/users', async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM Users');
        res.json(result.recordset);
    } catch (err) {
        console.error('ERROR EN /api/users:', err.message);
        res.status(500).send(err.message);
    }
});



app.post('/api/users', async (req, res) => {
    const { Name, Email, Password, Phone } = req.body;
    try {
        const pool = await sql.connect(dbConfig);
        await pool.request()
            .input('Name', sql.VarChar, Name)
            .input('Email', sql.VarChar, Email) // 👈 importante
            .input('Password', sql.VarChar, Password)
            .input('Phone', sql.VarChar, Phone)
            .query('INSERT INTO Users (Name, Email, Password, Phone) VALUES (@Name, @Email, @Password, @Phone)');
        res.send('Usuario creado correctamente');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put('/api/users/:id', async (req, res) => {
    const { Name, Email, Password, Phone } = req.body;
    try {
        const pool = await sql.connect(dbConfig);
        await pool.request()
            .input('UserID', sql.Int, req.params.id)
            .input('Name', sql.VarChar, Name)
            .input('Email', sql.VarChar, Email)
            .input('Password', sql.VarChar, Password)
            .input('Phone', sql.VarChar, Phone)
            .query(`UPDATE Users SET Name = @Name, Email = @Email, Password = @Password, Phone = @Phone WHERE UserID = @UserID`);
        res.send('Usuario actualizado');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.delete('/api/users/:id', async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        await pool.request()
            .input('UserID', sql.Int, req.params.id)
            .query('DELETE FROM Users WHERE UserID = @UserID');
        res.send('Usuario eliminado');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
