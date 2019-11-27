const Router = require('express');
const router = Router();
const { getFormasPago, createFormaPago,
        getFormaPagoById, updateFormaPago,
        deleteFormaPago } = require('../controllers/formasPago.controller');

router.route('/')
    .get(getFormasPago)
    .post(createFormaPago);

router.route('/:id')
    .get(getFormaPagoById)
    .put(updateFormaPago)
    .delete(deleteFormaPago);

module.exports = router;