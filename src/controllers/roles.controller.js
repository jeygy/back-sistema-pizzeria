const rolCtrl = {};
const { Rol } = require('../database');

rolCtrl.getRoles = async (req, res) => {
    try {
        const lstRoles = await Rol.findAll();
        res.status(200).json(lstRoles);
    } catch (error) {
        res.json({message:error});
    }
}

rolCtrl.createRol = async (req, res) => {
    try {
        const nuevoRol = req.body;
        const rolCreado = await Rol.create(nuevoRol);
        res.status(201).json(rolCreado);
    } catch (error) {
        res.json({message:error});
    }
}

rolCtrl.getRolById = async (req, res) => {
    try {
        res.status(200).json({message:"GET Rol por id"})
    } catch (error) {
        res.json({message:error});
    }
}

rolCtrl.updateRol = async (req, res) => {
    try {
        res.status(201).json({message:"UPDATE Roles"});
    } catch (error) {
        res.json({message:error});
    }
}

rolCtrl.deleteRol = async (req, res) => {
    try {
        res.status(200).json({message:"DELETE Roles"});
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = rolCtrl;