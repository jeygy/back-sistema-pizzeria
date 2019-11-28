module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define('rol', {
        id:{type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        descripcion:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}}
    });
    return Rol;
}