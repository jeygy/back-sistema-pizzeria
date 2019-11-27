const mesaCtrl = {};

mesaCtrl.getMesas = async (req, res) => {
    try {
        res.status(200).json({message:"GET Mesas"});
    } catch (error) {
        res.json({message:error});
    }
}

mesaCtrl.createMesa = async (req, res) => {
    try {
        res.status(201).json({message:"CREATE Mesa"});
    } catch (error) {
        res.json({message:error});
    }
}

mesaCtrl.getMesaById = async (req, res) => {
    try {
        res.status(200).json({message:"GET Mesa por id"});
    } catch (error) {
        res.json({message:error});
    }
}

mesaCtrl.updateMesa = async (req, res) => {
    try {
        res.status(201).json({message:"UPDATE Mesa"});
    } catch (error) {
        res.json({message:error});
    }
}

mesaCtrl.deleteMesa = async (req, res) => {
    try {
        res.status(200).json({message:"DELETE Mesa"});
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = mesaCtrl;