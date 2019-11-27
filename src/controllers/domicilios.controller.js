const domicilioCtrl = {};

domicilioCtrl.getDomicilios = async (req, res) => {
    try {
        res.status(200).json({message:"GET Domicilios"});
    } catch (error) {
        res.json({message:error});
    }
}

domicilioCtrl.createDomicilio = async (req, res) => {
    try {
        res.status(201).json({message:"POST Domicilio"});
    } catch (error) {
        res.json({message:error});
    }
}

domicilioCtrl.getDomicilioById = async (req, res) => {
    try {
        res.status(201).json({message:"GET Domicilio por id"});
    } catch (error) {
        res.json({message:error});
    }
}

domicilioCtrl.updateDomicilio = async (req, res) => {
    try {
        res.status(201).json({message:"PUT Domicilio"});
    } catch (error) {
        res.json({message:error});
    }
}

domicilioCtrl.deleteDomicilio = async (req, res) => {
    try {
        res.status(200).json({message:"DELETE Domicilio"});
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = domicilioCtrl;