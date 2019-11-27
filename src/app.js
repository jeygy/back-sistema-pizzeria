const express = require('express');
const app = express();
const cors = require('cors');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/roles', require('./routes/roles'));
app.use('/api/productos', require('./routes/productos'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/domicilios', require('./routes/domicilios'));
app.use('/api/categorias', require('./routes/categorias'));
app.use('/api/ordenes', require('./routes/ordenes'));
app.use('/api/detalles-orden', require('./routes/detallesOrden'));
app.use('/api/cajas', require('./routes/cajas'));
app.use('/api/mesas', require('./routes/mesas'));
app.use('/api/formas-pago', require('./routes/formasPago'));
app.use('/api/estados', require('./routes/estados'));

module.exports = app;