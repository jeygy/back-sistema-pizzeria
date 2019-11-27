const productoCtrl = {};

productoCtrl.getProductos = async (req, res) => {
    try {
        res.status(200).json({message:"GET Productos"});
    } catch (error) {
        res.json({message:error});
    }
}

productoCtrl.createProducto = async (req, res) => {
    try {
        res.status(201).json({message:"POST Producto"})
    } catch (error) {
        res.json({message:error});
    }
}

productoCtrl.getProductoById = async (req, res) => {
    try {
        res.status(200).json({message:"GET Producto por id"});
    } catch (error) {
        res.json({message:error});
    }
}

productoCtrl.updateProducto = async (req, res) => {
    try {
        res.status(201).json({message:"PUT Producto"});
    } catch (error) {
        res.json({message:error});
    }
}

productoCtrl.deleteProducto = async (req, res) => {
    try {
        res.status(200).json({message:"Delete Producto"})
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = productoCtrl;