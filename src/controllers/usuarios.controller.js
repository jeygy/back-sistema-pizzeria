const usaurioCtrl = {};
const { Usuario } = require('../database');
const bcrypt = require('bcryptjs');

usaurioCtrl.getUsuarios = async (req, res) => {
    try {
        const lstUsuarios = await Usuario.findAll();
        res.status(200).json(lstUsuarios);
    } catch (error) {
        res.json({ message: error });
    }
}

usaurioCtrl.createUsuario = async (req, res) => {
    try {

        let { nombre, pass, rolId} = req.body;
        pass = bcrypt.hashSync(pass, 10);

        const usuarioCreado = await Usuario.create({ nombre, pass, rolId });
        res.status(201).json(usuarioCreado);
    } catch (error) {
        res.json({ message: error.message })
    }
}

usaurioCtrl.getUsuarioById = async (req, res) => {
    try {
        const idUsuario = req.params.id;
        const usuario = await Usuario.findOne({ where: { id: idUsuario } });
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ message: `No existe ningún Usuario con id: ${idUsuario}` });
        }
    } catch (error) {
        res.json({ message: error });
    }
}

usaurioCtrl.updateUsuario = async (req, res) => {
    try {
        const idUsuario = req.params.id;

        let { nombre, pass, rolId} = req.body;
        pass = bcrypt.hashSync(pass, 10);

        const datosNuevos = { nombre, pass, rolId};
        
        const usuario = await Usuario.findOne({ where: { id: idUsuario } });
        if (usuario) {
            const usuarioModificado = await usuario.update(datosNuevos);
            res.status(200).json(usuarioModificado);
        } else {
            res.status(404).json({ message: `No existe ningún Usuario con id: ${idUsuario}` });
        }
        res.status(201).json({ message: "PUT Usuario" });
    } catch (error) {
        res.json({ message: error });
    }
}

usaurioCtrl.deleteUsuario = async (req, res) => {
    try {
        const idUsuario = req.params.id;
        const usuarioEliminado = await Usuario.destroy({ where: { id: idUsuario } });
        if (usuarioEliminado) {
            res.status(200).json({ message: "Usuario eliminado" });
        } else {
            res.status(404).json({ message: `No existe ningún Usuario con id: ${idUsuario}` });
        }
        res.status(200).json({ message: "DELETE Usuario" });
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = usaurioCtrl;