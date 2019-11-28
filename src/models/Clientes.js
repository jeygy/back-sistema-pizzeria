module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('cliente', {
        id:{type:DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        telefono:{type:DataTypes.STRING, alloNull:false, validate:{notEmpty:true}},
        nombre:{type:DataTypes.STRING},
        observacion:{type:DataTypes.STRING}
    });
    return Cliente;
}