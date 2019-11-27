const Router = require('express');
const router = Router();
const { getUsuarios, getUsuarioById, 
        createUsuario, updateUsuario, 
        deleteUsuario } = require('./../controllers/usuarios.controller');

router.route('/')
    .get(getUsuarios)
    .post(createUsuario);

router.route('/:id')
    .get(getUsuarioById)
    .put(updateUsuario)
    .delete(deleteUsuario);

module.exports = router;