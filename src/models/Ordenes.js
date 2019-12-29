module.exports = (sequelize, DataTypes) => {
    const Orden = sequelize.define('ordenes', {
        id:{type:DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        total:{type:DataTypes.DECIMAL, alloNull:false, validate:{notEmpty:true}},
        observacion:{type:DataTypes.STRING},
        fechaHora:{type:DataTypes.DATE, defaultValue: DataTypes.fn('getdate')},
        tipoOrden:{type:DataTypes.STRING}
    });
    return Orden;
}