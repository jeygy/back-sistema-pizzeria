const Router = require('express');
const router = Router();
const { getMesas, getMesaById,
        createMesa, updateMesa,
        deleteMesa } = require('../controllers/mesas.controller');

router.route('/')
    .get(getMesas)
    .post(createMesa);

router.route('/:id')
    .get(getMesaById)
    .put(updateMesa)
    .delete(deleteMesa);
    
module.exports = router;