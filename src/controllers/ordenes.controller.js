const ordenCtrl = {};
const { Orden } = require('../database');

ordenCtrl.getOrdenes = async (req, res) => {
    try {
        const lstOrdenes = await Orden.findAll();
        res.status(200).json(lstOrdenes);
    } catch (error) {
        res.json({ message: error });
    }
}

ordenCtrl.createOrden = async (req, res) => {
    try {
        const ordenNueva = req.body;
        const ordenCreada = await Orden.create(ordenNueva);
        res.status(201).json(ordenCreada);
    } catch (error) {
        res.json({ message: error });
    }
}

ordenCtrl.getOrdenById = async (req, res) => {
    try {
        const idOrden = req.params.id;
        const orden = await Orden.findOne({ where: { id: idOrden } });
        if (orden) {
            res.status(200).json(orden);
        } else {
            res.status(404).json({ message: { id: idOrden } });
        }
    } catch (error) {
        res.json({ message: error });
    }
}

ordenCtrl.updateOrden = async (req, res) => {
    try {
        const idOrden = req.params.id;
        const nuevosDatos = req.body;
        const orden = await Orden.findOne({ where: { id: idOrden } });
        if (orden) {
            const ordenModificada = await orden.update(nuevosDatos);
            res.status(200).json(ordenModificada);
        } else {
            res.status(404).json({ message: `No existe ninguna Orden con id: ${idOrden}` });
        }
    } catch (error) {
        res.json({ message: error });
    }
}

ordenCtrl.deleteOrden = async (req, res) => {
    try {
        const idOrden = req.params.id;
        const ordenEliminada = await Orden.destroy({ where: { id: idOrden } });
        if (ordenEliminada) {
            res.status(200).json({message:"Orden eliminada"});
        } else {
            res.status(404).json({ message: `No existe ninguna Orden con id: ${idOrden}` });
        }
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = ordenCtrl;