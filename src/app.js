const express = require('express');
const app = express();
const cors = require('cors');

//settings
app.set('port', 3000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use('/', (req, res) => res.json({message: 'mortal'}))

module.exports = app;