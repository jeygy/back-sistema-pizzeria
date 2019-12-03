const categoriaCtrl = {};
const { Categoria } = require('../database');

categoriaCtrl.getCategorias = async (req, res) => {
    try {
        const lstCategorias = await Categoria.findAll();
        res.status(200).json({lstCategorias});
    } catch (error) {
        res.json({message:error});
    }
}

categoriaCtrl.createCategorias = async (req, res) => {
    try {
        const categoriaNuevo = req.body;
        const categoriaCreada = await Categoria.create(categoriaNuevo);
        res.status(201).json(categoriaCreada)
    } catch (error) {
        res.json({message:error});
    }
}

categoriaCtrl.getCategoriaById = async (req, res) => {
    try {
        const idCategoria = req.params.id;
        const categoria = await Categoria.findOne({where:{id:idCategoria}});
        if (categoria) {
            res.status(200).json(categoria);            
        } else {
            res.status(404).json({message:`No existe ningun categoria con id: ${idCategoria}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

categoriaCtrl.updateCategoria = async (req, res) => {
    try {
        const idCategoria = req.params.id;
        const nuevosDatos = req.body;
        const categoria = await Categoria.findOne({where:{id:idCategoria}});

        if (categoria) {            
            const categoriModificada = await categoria.update(nuevosDatos);    
            res.status(200).json(categoriModificada);
        } else {
            res.status(404).json({message:`No existe ningun Categoria con id: ${idCategoria}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

categoriaCtrl.deleteCategoria = async (req, res) => {
    try {
        const idCategoria = req.params.id;
        const categoriEliminada = await Categoria.destroy({where:{id:idCategoria}});

        if (categoriEliminada) {
            res.status(200).json({message:"Categoria Eliminada"});
        } else {
            res.status(404).json({message:`No existe ninguna Categoria con id: ${idCategoria}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

module.exports =  categoriaCtrl;