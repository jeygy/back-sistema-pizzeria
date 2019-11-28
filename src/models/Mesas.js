module.exports = (sequelize, DataTypes) => {
    const Mesa = sequelize.define('mesa', {
        id:{type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        descripcion:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}}
    });
    return Mesa;
}