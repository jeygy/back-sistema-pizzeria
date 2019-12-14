const Sequelize = require('sequelize');

const ProductoModel = require('./models/Productos');
const CategoriaModel = require('./models/Categorias');
const ClienteModel = require('./models/Clientes');
const UsuarioModel = require('./models/Usuarios');
const RolModel = require('./models/Roles');
const DomicilioModel = require('./models/Domicilios');
const EstadoModel = require('./models/Estados');
const MesaModel = require('./models/Mesas');
const CajaModel = require('./models/Cajas');
const FormaPagoModel = require('./models/FormasPago');
const OrdenModel = require('./models/Ordenes');
const DetalleOrdenModel = require('./models/DetallesOrden');

// cadena de conexion
const DB_URL = 'mysql://usuarionuevo:Focaccia1@localhost:3306/focacciadbmysql';

// instancia de BD
const sequelize = new Sequelize('DB_FOCACCIA', 'GastoN', 'leonino13', {
    dialect: 'mssql',
    dialectOptions: {
      options: {
        useUTC: false,
        dateFirst: 1,
      }
    }
  });

// Importo los modelos
const Producto = ProductoModel(sequelize, Sequelize);
const Categoria = CategoriaModel(sequelize, Sequelize);
const Cliente = ClienteModel(sequelize, Sequelize);
const Usuario = UsuarioModel(sequelize, Sequelize);
const Rol = RolModel(sequelize, Sequelize);
const Domicilio = DomicilioModel(sequelize, Sequelize);
const Estado = EstadoModel(sequelize, Sequelize);
const Mesa = MesaModel(sequelize, Sequelize);
const Caja = CajaModel(sequelize, Sequelize);
const FormaPago = FormaPagoModel(sequelize,Sequelize);
const Orden = OrdenModel(sequelize, Sequelize);
const DetalleOrden = DetalleOrdenModel(sequelize, Sequelize);

// Establezco las relaciones
// Relacion 1 a muchos 
Rol.hasMany(Usuario);
Usuario.belongsTo(Rol);

Categoria.hasMany(Producto);
Producto.belongsTo(Categoria);

Cliente.hasMany(Domicilio);
Domicilio.belongsTo(Cliente);

Estado.hasMany(Orden);
Orden.belongsTo(Estado);

Domicilio.hasMany(Orden);
Orden.belongsTo(Domicilio);

Caja.hasMany(Usuario);
Usuario.belongsTo(Caja);

Mesa.hasMany(Orden);
Orden.belongsTo(Mesa);

Cliente.hasMany(Orden);
Orden.belongsTo(Cliente);

FormaPago.hasMany(Orden);
Orden.belongsTo(FormaPago);

Orden.hasMany(DetalleOrden);
DetalleOrden.belongsTo(Orden);

Producto.hasMany(DetalleOrden);
DetalleOrden.belongsTo(Producto);

Usuario.hasMany(Orden);
Orden.belongsTo(Usuario);

// Sincronizo con la base de datos
sequelize.sync()
    .then(() => console.log('Tablas Creadas'));

// Exporto los modelos para que puedan ser usados por los controlladores
module.exports = {
    Producto,
    Categoria,
    Cliente,
    Usuario,
    Rol,
    Domicilio,
    Estado,
    Mesa,
    Caja,
    FormaPago,
    Orden,
    DetalleOrden
};