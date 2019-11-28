module.exports = (sequelize, DataTypes) => {
    const Domicilio = sequelize.define('domicilio', {
        id:{type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        direccion:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}}
    });
    return Domicilio;
}