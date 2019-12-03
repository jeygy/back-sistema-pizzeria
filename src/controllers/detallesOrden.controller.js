const detallesOrdenCtrl = {};
const { DetalleOrden } = require('../database');


detallesOrdenCtrl.getDetalles = async (req, res) => {
    try {
        const lstDetalles = await DetalleOrden.findAll();
        res.status(200).json(lstDetalles);
    } catch (error) {
        res.json({message:error});
    }
}

detallesOrdenCtrl.createdetalle = async (req, res) => {
    try {
        const detalleNuevo = req.body;
        const detalleCreado = await DetalleOrden.create(detalleNuevo);
        res.status(201).json(detalleCreado);
    } catch (error) {
        res.json({message:error});
    }
}

detallesOrdenCtrl.getDetalleById = async (req, res) => {
    try {
        const idDetalle = req.params.id;
        const detalle = await DetalleOrden.findOne({where:{id:idDetalle}});
        if (detalle) {
            res.status(200).json(detalle);            
        } else {
            res.status(404).json({message:`No existe ningun Detalle con id: ${idDetalle}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

detallesOrdenCtrl.updateDetalle = async (req, res) => {
    try {
        const idDetalle = req.params.id;
        const datosNuevos = req.body;
        const detalle = await DetalleOrden.findOne({where:{id:idDetalle}});
        if (detalle) {
            const detalleModificado = await detalle.update(datosNuevos);
            res.status(200).json(detalleModificado);
        } else {
            res.status(404).json({message:'No existe ningun Detalle con id: ${idDetalle}'});
        }
        res.status(200).json({message:"PUT Detalles Orden"});
    } catch (error) {
        res.json({message:error});
    }
}

detallesOrdenCtrl.deleteDetalle = async (req, res) => {
    try {
        const idDetalle = req.params.id;
        const detelleEliminado = await DetalleOrden.destroy({where:{id:idDetalle}});
        if (detelleEliminado) {
            res.status(200).json({message:"Detalle eliminado"})
        } else {
            res.status(404).json({message:'No existe ningun Detalle con id: ${idDetalle}'});
        }
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = detallesOrdenCtrl;