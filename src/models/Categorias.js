module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('categorias', {
        id:{type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        descripcion:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}}
    });
    return Categoria;
}