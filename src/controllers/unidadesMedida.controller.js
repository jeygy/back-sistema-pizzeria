const UnidadMedCtrl = {};
const { UnidadMedida } = require('../database');


UnidadMedCtrl.getUnidadMedidas = async (req, res) => {
    try {
        const lstUnidadesMedida = await UnidadMedida.findAll();
        res.status(200).json(lstUnidadesMedida);
    } catch (error) {
        res.json({ message: error });
    }
}

UnidadMedCtrl.createUnidadMedida = async (req, res) => {
    try {
        const unidadMedidaNuevo = req.body;
        const unidadMedidaCreado = await UnidadMedida.create(unidadMedidaNuevo);
        res.status(201).json(unidadMedidaCreado);
    } catch (error) {
        res.json({ message: error });
    }
}

UnidadMedCtrl.getUnidadMedidaById = async (req, res) => {
    try {
        const idUnidadMedida = req.params.id;
        const unidadMedida = await UnidadMedida.findOne({ where: { id: idUnidadMedida } });
        if (unidadMedida) {
            res.status(200).json(unidadMedida);
        } else {
            res.status(404).json({ message: `No existe ninguna Unidad de Medida con id: ${idUnidadMedida}` });
        }
    } catch (error) {
        res.json({ message: error });
    }
}

UnidadMedCtrl.updateUnidadMedida = async (req, res) => {
    try {
        const idUnidadMedida = req.params.id;
        const nuevosDatos = req.body;
        const unidadMedida = await UnidadMedida.findOne({ where: { id: idUnidadMedida } });

        if (unidadMedida) {
            const prodModificado = await unidadMedida.update(nuevosDatos);
            res.status(200).json(prodModificado);
        } else {
            res.status(404).json({ message: `No existe ninguna Unidad de Medida con id: ${idUnidadMedida}` });
        }
    } catch (error) {
        res.json({ message: error });
    }
}

UnidadMedCtrl.deleteUnidadMedida = async (req, res) => {
    try {

        const idUnidadMedida = req.params.id;
        const unidadEliminado = await UnidadMedida.destroy({ where: { id: idUnidadMedida } });

        if (unidadEliminado) {
            res.status(200).json({ message: "UnidadMedida Eliminado" });
        } else {
            res.status(404).json({ message: `No existe ningun Unidad de Medida con id: ${idUnidadMedida}` });
        }

    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = UnidadMedCtrl;