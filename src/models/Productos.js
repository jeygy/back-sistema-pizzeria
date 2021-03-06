module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('productos', {
        id:{type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        nombre:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}},
        precio:{type:DataTypes.DECIMAL, alloNull:false, validate:{notEmpty:true}},
        descripcion:{type:DataTypes.STRING},
        stock:{type:DataTypes.DECIMAL},
        contarStock:{type:DataTypes.BOOLEAN},
        solicitado:{type:DataTypes.BOOLEAN}
    });
    return Producto;
}