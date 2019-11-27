const Router = require('express');
const router = Router();
const { getProductos, getProductoById, 
        createProducto, updateProducto, 
        deleteProducto } = require('./../controllers/productos.controller');

router.route('/')
    .get(getProductos)
    .post(createProducto);

router.route('/:id')
    .get(getProductoById)
    .put(updateProducto)
    .delete(deleteProducto);

module.exports = router;