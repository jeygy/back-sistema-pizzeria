module.exports = (sequelize, DataTypes) => {
    const Caja = sequelize.define('caja', {
        id:{type:DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        monto:{type:DataTypes.DECIMAL, alloNull:false, validate:{notEmpty:true}},
        fechaHora:{type:DataTypes.DATE, defaultValue: DataTypes.fn('NOW')},
        motivo:{type:DataTypes.STRING}
    });
    return Caja;
}