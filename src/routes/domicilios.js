const Router = require('express');
const router = Router();
const { getDomicilios, getDomicilioById,
        createDomicilio, updateDomicilio,
        deleteDomicilio } = require('./../controllers/domicilios.controller');

router.route('/')
    .get(getDomicilios)
    .post(createDomicilio);

router.route('/:id')
    .get(getDomicilioById)
    .put(updateDomicilio)
    .delete(deleteDomicilio);

module.exports = router;