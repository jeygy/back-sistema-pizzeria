const Router = require('express');
const router = Router();
const { getOrdenes, createOrden,
        getOrdenById, updateOrden,
        deleteOrden } = require('../controllers/ordenes.controller');

router.route('/')
    .get(getOrdenes)
    .post(createOrden);

router.route('/:id')
    .get(getOrdenById)
    .put(updateOrden)
    .delete(deleteOrden);

module.exports = router;