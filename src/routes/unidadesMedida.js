const Router = require('express');
const router = Router();
const { getUnidadMedidas, getUnidadMedidaById,
        createUnidadMedida, updateUnidadMedida,
        deleteUnidadMedida } = require('../controllers/unidadesMedida.controller');

router.route('/')
    .get(getUnidadMedidas)
    .post(createUnidadMedida);

router.route('/:id')
    .get(getUnidadMedidaById)
    .put(updateUnidadMedida)
    .delete(deleteUnidadMedida);

module.exports = router;