const cajaCtrl = {};
const { Caja } = require('../database');

cajaCtrl.getCajas = async (req, res) => {
    try {
        const lstCajas = await Caja.findAll();
        res.status(200).json(lstCajas);
    } catch (error) {
        res.json({message:error});
    }
}

cajaCtrl.createCaja = async (req, res) => {
    try {
        const nuevaCaja = req.body;
        const cajaCreada = await Caja.create(nuevaCaja);
        res.status(201).json(cajaCreada);
    } catch (error) {
        res.json({message:error});
    }
}

cajaCtrl.getCajaById = async (req, res) => {
    try {
        const idCaja = req.params.id;
        const caja = await Caja.findOne({where:{id:idCaja}});
        if (caja) {
            res.status(200).json(caja);
        } else {
            res.status(404).json({message:`No existe ninguna caja con id: ${idCaja}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

cajaCtrl.updateCaja = async (req, res) => {
    try {
        const idCaja = req.params.id;
        const nuevosDatos = req.body;
        const caja = await Caja.findOne({where:{id:idCaja}});
        if (caja) {
            const cajaModificada = await caja.update(nuevosDatos);
            res.status(201).json(cajaModificada);            
        } else {
            res.status(404).json({message:`No existe ninguna caja con id: ${idCaja}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

cajaCtrl.deleteCaja = async (req, res) => {
    try {
        const idCaja = req.params.id;
        const cajaEliminada = await Caja.destroy({where:{id:idCaja}});
        if (cajaEliminada) {
            res.status(200).json({message:"Caja eliminada con éxito"});
        } else {
            res.status(404).json({message:`No existe ninguna caja con id: ${idCaja}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = cajaCtrl;