const domicilioCtrl = {};
const { Domicilio } = require('../database');

domicilioCtrl.getDomicilios = async (req, res) => {
    try {
        const lstDomicilios = await Domicilio.findAll();
        res.status(200).json(lstDomicilios);
    } catch (error) {
        res.json({message:error});
    }
}

domicilioCtrl.createDomicilio = async (req, res) => {
    try {
        const domicilioNuevo = req.body;
        const domicilioCreado = await Domicilio.create(domicilioNuevo);
        res.status(201).json(domicilioCreado);
    } catch (error) {
        res.json({message:error});
    }
}

domicilioCtrl.getDomicilioById = async (req, res) => {
    try {
        const idDomicilio = req.params.id;
        const domicilio = await Domicilio.findOne({where:{id:idDomicilio}});
        if (domicilio) {
            res.status(200).json(domicilio);            
        } else {
            res.status(404).json({message:`No existe ningún Domicilio con id: ${idDomicilio}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

domicilioCtrl.updateDomicilio = async (req, res) => {
    try {
        const idDomicilio = req.params.id;
        const nuevosDatos = req.body;
        const domicilio = await Domicilio.findOne({where:{id:idDomicilio}});
        if (domicilio) {
            const domicilioModificado = await domicilio.update(nuevosDatos);
            res.status(200).json(domicilioModificado);
        } else {
            res.status(404).json({message:`No existe ningún Domicilio con id: ${idDomicilio}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

domicilioCtrl.deleteDomicilio = async (req, res) => {
    try {
        const idDomicilio = req.params.id;
        const domicilioEliminado = await Domicilio.destroy({where:{id:idDomicilio}});
        if (domicilioEliminado) {
            res.status(200).json({message:"Domicilio Eliminado"});
        } else {
            res.status(404).json({message:`No existe ningún Domicilio con id: ${idDomicilio}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = domicilioCtrl;