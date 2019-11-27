const Router = require('express');
const router = Router();
const { getEstados, createEstado,
        getEstadoById, updateEstado,
        deleteEstado } = require('../controllers/estados.controller');

router.route('/')
    .get(getEstados)
    .post(createEstado);

router.route('/:id')
    .get(getEstadoById)
    .put(updateEstado)
    .delete(deleteEstado);

module.exports = router;