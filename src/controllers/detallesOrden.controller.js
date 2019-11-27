const detallesOrdenCtrl = {};


detallesOrdenCtrl.getDetalles = async (req, res) => {
    try {
        res.status(200).json({message:"GET Detalles Ordenes"});
    } catch (error) {
        res.json({message:error});
    }
}

detallesOrdenCtrl.createdetalle = async (req, res) => {
    try {
        res.status(201).json({message:"POST Detalles Orden"});
    } catch (error) {
        res.json({message:error});
    }
}

detallesOrdenCtrl.getDetalleById = async (req, res) => {
    try {
        res.status(200).json({message:"GET Detalles Orden por id"});
    } catch (error) {
        res.json({message:error});
    }
}

detallesOrdenCtrl.updateDetalle = async (req, res) => {
    try {
        res.status(200).json({message:"PUT Detalles Orden"});
    } catch (error) {
        res.json({message:error});
    }
}

detallesOrdenCtrl.deleteDetalle = async (req, res) => {
    try {
        res.status(200).json({message:"DELETE Detalles Orden"});
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = detallesOrdenCtrl;