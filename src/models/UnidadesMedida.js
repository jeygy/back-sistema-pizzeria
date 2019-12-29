module.exports = (sequelize, DataTypes) => {
    const UnidadMedida = sequelize.define('unidad-medida',{
        id:{type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        descripcion:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}}
    });
    return UnidadMedida;
}