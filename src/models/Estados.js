module.exports = (sequelize, DataTypes) => {
    const Estado = sequelize.define('estado', {
        id:{type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        descripcion:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}}
    });
    return Estado;
}