const Router = require('express');
const router = Router();
const { getDetalles, createdetalle,
        getDetalleById, updateDetalle,
        deleteDetalle } = require('../controllers/detallesOrden.controller');

router.route('/')
    .get(getDetalles)
    .post(createdetalle);

router.route('/:id')
    .get(getDetalleById)
    .put(updateDetalle)
    .delete(deleteDetalle);

module.exports = router;