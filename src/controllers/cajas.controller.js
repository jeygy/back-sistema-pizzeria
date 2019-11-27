const cajaCtrl = {};

cajaCtrl.getCajas = async (req, res) => {
    try {
        res.status(200).json({message:"GET Cajas"});
    } catch (error) {
        res.json({message:error});
    }
}

cajaCtrl.createCaja = async (req, res) => {
    try {
        res.status(201).json({message:"CREATE Caja"});
    } catch (error) {
        res.json({message:error});
    }
}

cajaCtrl.getCajaById = async (req, res) => {
    try {
        res.status(200).json({message:"GET Caja por id"});
    } catch (error) {
        res.json({message:error});
    }
}

cajaCtrl.updateCaja = async (req, res) => {
    try {
        res.status(201).json({message:"UPDATE Caja"});
    } catch (error) {
        res.json({message:error});
    }
}

cajaCtrl.deleteCaja = async (req, res) => {
    try {
        res.status(200).json({message:"DELETE Caja"});
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = cajaCtrl;