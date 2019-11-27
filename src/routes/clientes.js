const Router = require('express');
const router = Router();
const { getClientes, createCliente, 
        getClienteById, updateCliente, 
        deleteCliente } = require('./../controllers/clientes.controller');

router.route('/')
    .get(getClientes)
    .post(createCliente);

router.route('/:id')
    .get(getClienteById)
    .put(updateCliente)
    .delete(deleteCliente)

module.exports = router;