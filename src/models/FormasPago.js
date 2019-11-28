module.exports = (sequelize, DataTypes) => {
    const ForamaPago = sequelize.define('forma-pago', {
        id:{type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        descripcion:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}}
    });
    return ForamaPago;
}