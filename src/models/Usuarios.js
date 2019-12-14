module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuarios', {
        id:{type:DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        nombre:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}},
        pass:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}}
    });
    return Usuario;
}