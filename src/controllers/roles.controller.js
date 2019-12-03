const rolCtrl = {};
const { Rol } = require('../database');

rolCtrl.getRoles = async (req, res) => {
    try {
        const lstRoles = await Rol.findAll();
        res.status(200).json(lstRoles);
    } catch (error) {
        res.json({ message: error });
    }
}

rolCtrl.createRol = async (req, res) => {
    try {
        const nuevoRol = req.body;
        const rolCreado = await Rol.create(nuevoRol);
        res.status(201).json(rolCreado);
    } catch (error) {
        res.json({ message: error });
    }
}

rolCtrl.getRolById = async (req, res) => {
    try {
        const idRol = req.params.id;
        const rol = await Rol.findOne({ where: { id: idRol } });
        if (rol) {
            res.status(200).json(rol);
        } else {
            res.status(404).json({ message: `No existe ningún Rol con id: ${idRol}` });
        }
    } catch (error) {
        res.json({ message: error });
    }
}

rolCtrl.updateRol = async (req, res) => {
    try {
        const idRol = req.params.id;
        const nuevosDatos = req.body;
        const rol = await Rol.findOne({ where: { id: idRol } });
        if (rol) {
            rolModificado = await rol.update(nuevosDatos);
            res.status(200).json(rolModificado);
        } else {
            res.status(404).json({ message: `No existe ningún Rol con id: ${idRol}` });
        }
    } catch (error) {
        res.json({ message: error });
    }
}

rolCtrl.deleteRol = async (req, res) => {
    try {
        const idRol = req.params.id;
        const rolEliminado = await Rol.destroy({ where: { id: idRol } });
        if (rolEliminado) {
            res.status(200).json({ message: "Rol eliminado" });
        } else {
            res.status(404).json({ message: `No existe ningún Rol con id: ${idRol}` });
        }
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = rolCtrl;