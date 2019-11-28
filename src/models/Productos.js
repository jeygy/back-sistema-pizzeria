module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('producto', {
        id:{type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        nombre:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}},
        precio:{type:DataTypes.DECIMAL, alloNull:false, validate:{notEmpty:true}},
        descripcion:{type:DataTypes.STRING}
    });
    return Producto;
}