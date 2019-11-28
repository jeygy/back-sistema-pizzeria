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
        const estadoCreado = await Estado.findAll(nuevoEstado);
        res.status(201).json(estadoCreado);
    } catch (error) {
        res.json({message:error});
    }
}

estadoCtrl.getEstadoById = async (req, res) => {
    try {
        res.status(200).json({message:"GET estado por id"});
    } catch (error) {
        res.json({message:error});
    }
}

estadoCtrl.updateEstado = async (req, res) => {
    try {
        res.status(201).json({message:"UPDATE estado"});
    } catch (error) {
        res.json({message:error});
    }
}

estadoCtrl.deleteEstado = async (req, res) => {
    try {
        res.status(200).json({message:"DELETE estado"});
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = estadoCtrl;