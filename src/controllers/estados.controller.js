const estadoCtrl = {};
const { Estado } = require('../database');

estadoCtrl.getEstados = async (req, res) => {
    try {
        const lstEstados = await Estado.findAll();
        res.status(200).json(lstEstados);
    } catch (error) {
        res.json({message:error});
    }
}

estadoCtrl.createEstado = async (req, res) => {
    try {
        const nuevoEstado = req.body;
        const estadoCreado = await Estado.create(nuevoEstado);
        res.status(201).json(estadoCreado);
    } catch (error) {
        res.json({message:error});
    }
}

estadoCtrl.getEstadoById = async (req, res) => {
    try {
        const idEstado = req.params.id;
        const estado = await Estado.findOne({where:{id:idEstado}});
        if (estado) {
            res.status(200).json(estado);
        } else {
            res.status(404).json({message:`No existe ningún Estado con id: ${idEstado}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

estadoCtrl.updateEstado = async (req, res) => {
    try {
        const idEstado = req.params.id;
        const nuevosDatos = req.body;
        const estado = await Estado.findOne({where:{id:idEstado}});
        if (estado) {
            const estadoModificado = await estado.update(nuevosDatos);
            res.status(200).json(estadoModificado);
        } else {
            res.status(404).json({message:`No existe ningún Estado con id: ${idEstado}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

estadoCtrl.deleteEstado = async (req, res) => {
    try {
        const idEstado = req.params.id;
        const estadoEliminado = await Estado.destroy({where:{id:idEstado}});
        if (estadoEliminado) {
            res.status(200).json({message:"Estado eliminado"});
        } else {
            res.status(404).json({message:`No existe ningún Estado con id: ${idEstado}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = estadoCtrl;