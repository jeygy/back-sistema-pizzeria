const Router = require('express');
const router = Router();
const { getRoles, createRol,
        getRolById, updateRol,
        deleteRol } = require('../controllers/roles.controller');

router.route('/')
    .get(getRoles)
    .post(createRol);

router.route('/:id')
    .get(getRolById)
    .put(updateRol)
    .delete(deleteRol);

module.exports = router;