const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


//ROUTES

const userRoute = require('./api/routes/user');
app.use('/user', userRoute);

const clientesRoute = require('./api/routes/clientes');
app.use('/clientes', clientesRoute);



module.exports = app;