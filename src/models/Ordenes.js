module.exports = (sequelize, DataTypes) => {
    const Orden = sequelize.define('orden', {
        id:{type:DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        total:{type:DataTypes.DECIMAL, alloNull:false, validate:{notEmpty:true}},
        observacion:{type:DataTypes.STRING},
        fechaHora:{type:DataTypes.DATE, defaultValue: DataTypes.fn('now')},
        tipoOrden:{type:DataTypes.STRING}
    });
    return Orden;
}