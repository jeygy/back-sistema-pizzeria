module.exports = (sequelize, DataTypes) => {
    const DetalleOrden = sequelize.define('detalle-orden', {
        id:{type:DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        cantidad:{type:DataTypes.INTEGER, allowNull:false, validate:{notEmpty:true}},
        subTotal:{type:DataTypes.DECIMAL, alloNull:false, validate:{notEmpty:true}}
    });
    return DetalleOrden;
}