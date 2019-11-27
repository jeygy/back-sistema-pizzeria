const ordenCtrl = {};

ordenCtrl.getOrdenes = async (req, res) => {
    try {
        res.status(200).json({message:"GET Ordenes"});
    } catch (error) {
        res.json({message:error});
    }
}

ordenCtrl.createOrden = async (req, res) => {
    try {
        res.status(201).json({message:"POST Ordenes"});
    } catch (error) {
        res.json({message:error});
    }
}

ordenCtrl.getOrdenById = async (req, res) => {
    try {
        res.status(200).json({message:"GET Orden por id"});
    } catch (error) {
        res.json({message:error});
    }
}

ordenCtrl.updateOrden = async (req, res) => {
    try {
        res.status(200).json({message:"PUT Orden"});
    } catch (error) {
        res.json({message:error});
    }
}

ordenCtrl.deleteOrden = async (req, res) => {
    try {
        res.status(200).json({message:"DELETE Orden"});
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = ordenCtrl;