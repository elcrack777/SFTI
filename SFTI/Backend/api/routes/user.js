const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection');

const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
    mysqlConnection.query('select *from usuarios', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.post('/singin', (req, res) => {
    const { Usuario, Contra } = req.body;
    mysqlConnection.query('Select Usuario, Rol from usuarios where Usuario=? and Contra=?', [Usuario, Contra],
        (err, rows, fields) => {
            if (!err) {
                if (rows.length > 0) {
                    let data = JSON.stringify(rows[0]);
                    const token = jwt.sign(data, 'stil');
                    res.json({ token });
                } else {
                    res.json('Usuario o clave incorrectos');
                }

            } else {
                console.log(err);
            }
        }
    )
})

router.post('/test', verifyToken, (req, res) => {
    console.log(req.data);
    res.json('Información secreta');
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) return res.status(401).json('No autorizado');

    const token = req.headers.authorization.substr(7);
    if (token !== '') {
        const content = jwt.verify(token, 'stil');
        req.data = content;
        next();
    } else {
        res.status(401).json('Token vacio');
    }

}


module.exports = router;