const Router = require('express');
const router = Router();
const { getCategorias, createCategorias,
        getCategoriaById, updateCategoria,
        deleteCategoria } = require('./../controllers/categorias.controller');

router.route('/')
    .get(getCategorias)
    .post(createCategorias);

router.route('/:id')
    .get(getCategoriaById)
    .put(updateCategoria)
    .delete(deleteCategoria);

module.exports = router;