const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection');

const jwt = require('jsonwebtoken');
const { json } = require('express');


router.get('/clientesList', (req, res) => {
    mysqlConnection.query('select *from clientes', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.post('/clientesDetalle', (req, res) => {
    const clientes = req.body;
    mysqlConnection.query('select *from clientes Where id= ?;', [clientes.id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});



router.post('/nuevoClientes', (req, res) => {
    const nuevo = req.body;
    mysqlConnection.query('INSERT INTO clientes VALUES(0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', [
            nuevo.numeroControl,
            nuevo.nombres,
            nuevo.apaterno,
            nuevo.amaterno,
            nuevo.tdp,
            nuevo.rfc,
            nuevo.calle,
            nuevo.colonia,
            nuevo.extint,
            nuevo.correo,
            nuevo.telefono,
            nuevo.cp


        ],
        (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        })
});

router.post('/actualizarDatos', (req, res) => {
    const dato = req.body;
    mysqlConnection.query('UPDATE clientes SET numeroControl = ?, nombres = ?, apaterno = ?, amaterno = ?, tdp = ?, rfc = ?, calle = ?, colonia = ?, extint = ?, correo = ?, telefono = ?, cp = ? WHERE id = ?;', [

            dato.numeroControl,
            dato.nombres,
            dato.apaterno,
            dato.amaterno,
            dato.tdp,
            dato.rfc,
            dato.calle,
            dato.colonia,
            dato.extint,
            dato.correo,
            dato.telefono,
            dato.cp,
            dato.id

        ],
        (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        })
});

router.post('/eliminarClientes', (req, res) => {
    const clientes = req.body;
    mysqlConnection.query('Delete from clientes Where id= ?;', [clientes.id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});



module.exports = router;