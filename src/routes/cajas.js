const Router = require('express');
const router = Router();
const { getCajas, createCaja,
        getCajaById, updateCaja,
        deleteCaja } = require('../controllers/cajas.controller');

router.route('/')
    .get(getCajas)
    .post(createCaja);

router.route('/:id')
    .get(getCajaById)
    .put(updateCaja)
    .delete(deleteCaja);

module.exports = router;