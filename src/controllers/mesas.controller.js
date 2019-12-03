const mesaCtrl = {};
const { Mesa } = require('../database');

mesaCtrl.getMesas = async (req, res) => {
    try {
        const lstMesas = await Mesa.findAll();
        res.status(200).json(lstMesas);
    } catch (error) {
        res.json({message:error});
    }
}

mesaCtrl.createMesa = async (req, res) => {
    try {
        const mesaNueva = req.body;
        const mesaCreada = await Mesa.create(mesaNueva);
        res.status(201).json(mesaCreada);
    } catch (error) {
        res.json({message:error});
    }
}

mesaCtrl.getMesaById = async (req, res) => {
    try {
        const idMesa = req.params.id;
        const mesa = await Mesa.findOne({where:{id:idMesa}});
        if (mesa) {
            res.status(200).json(mesa);
        } else {
            res.status(404).json({message:`No existe ninguna mesa con id: ${idMesa}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

mesaCtrl.updateMesa = async (req, res) => {
    try {
        const idMesa = req.params.id;
        const nuevosDatos = req.body;
        const mesa = await Mesa.findOne({where:{id:idMesa}});
        if (mesa) {
            const mesaModificada = await mesa.update(nuevosDatos);
            res.status(200).json(mesaModificada);
        } else {
            res.status(404).json({message:`No existe ninguna mesa con id: ${idMesa}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

mesaCtrl.deleteMesa = async (req, res) => {
    try {
        const idMesa = req.params.id;
        const mesaEliminada = await Mesa.destroy({where:{id:idMesa}});
        if (mesaEliminada) {
            res.status(200).json({message:"Mesa eliminada"});
        } else {
            res.status(404).json({message:`No existe ninguna mesa con id: ${idMesa}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = mesaCtrl;