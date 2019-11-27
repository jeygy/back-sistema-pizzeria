const categoriaCtrl = {};

categoriaCtrl.getCategorias = async (req, res) => {
    try {
        res.status(200).json({message:"GET Categorias"})
    } catch (error) {
        res.json({message:error});
    }
}

categoriaCtrl.createCategorias = async (req, res) => {
    try {
        res.status(201).json({message:"POST Categoria"})
    } catch (error) {
        res.json({message:error});
    }
}

categoriaCtrl.getCategoriaById = async (req, res) => {
    try {
        res.status(200).json({message:"GET Catagoria por id"});
    } catch (error) {
        res.json({message:error});
    }
}

categoriaCtrl.updateCategoria = async (req, res) => {
    try {
        res.status(201).json({message:"PUT Categoria"})
    } catch (error) {
        res.json({message:error});
    }
}

categoriaCtrl.deleteCategoria = async (req, res) => {
    try {
        res.status(200).json({message:"DELETE Categoria"})
    } catch (error) {
        res.json({message:error});
    }
}

module.exports =  categoriaCtrl;