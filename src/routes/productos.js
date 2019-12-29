const Router = require('express');
const router = Router();
const { getProductos, getProductoById, 
        createProducto, updateProducto, 
        deleteProducto, getProductoConsumible } = require('./../controllers/productos.controller');

router.route('/')
    .get(getProductos)
    .post(createProducto);

router.route('/:id')
    .get(getProductoById)
    .put(updateProducto)
    .delete(deleteProducto);

router.route('/consumibles/1')
    .get(getProductoConsumible)

module.exports = router;