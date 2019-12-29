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
const UnidadMedidaModel = require('./models/UnidadesMedida');

// cadena de conexion
const DB_URL = process.env.DB_URL;

// instancia de BD
const sequelize = new Sequelize(DB_URL);

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
const UnidadMedida = UnidadMedidaModel(sequelize, Sequelize);

// Establezco las relaciones
// Relacion 1 a muchos 
Rol.hasMany(Usuario);
Usuario.belongsTo(Rol);

Categoria.hasMany(Producto);
Producto.belongsTo(Categoria);

UnidadMedida.hasMany(Producto);
Producto.belongsTo(UnidadMedida);

Cliente.hasMany(Domicilio);
Domicilio.belongsTo(Cliente);

Estado.hasMany(Orden);
Orden.belongsTo(Estado);

Domicilio.hasMany(Orden);
Orden.belongsTo(Domicilio);

Usuario.hasMany(Caja);
Caja.belongsTo(Usuario);

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
    DetalleOrden,
    UnidadMedida
};