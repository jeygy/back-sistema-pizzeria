const formasPagoCtrl = {};

formasPagoCtrl.getFormasPago = async (req, res) => {
    try {
        res.status(200).json({message:"GET Formas de Pago"});
    } catch (error) {
        res-json({message:error});
    }
}

formasPagoCtrl.createFormaPago = async (req, res) => {
    try {
        res.status(201).json({message:"POST Forma de Pago"});
    } catch (error) {
        res-json({message:error});
    }
}

formasPagoCtrl.getFormaPagoById = async (req, res) => {
    try {
        res.status(200).json({message:"GET Forma de Pago por id"});
    } catch (error) {
        res-json({message:error});
    }
}

formasPagoCtrl.updateFormaPago = async (req, res) => {
    try {
        res.status(201).json({message:"PUT Forma de Pago"});
    } catch (error) {
        res-json({message:error});
    }
}

formasPagoCtrl.deleteFormaPago = async (req, res) => {
    try {
        res.status(201).json({message:"DELETE Forma de Pago"});
    } catch (error) {
        res-json({message:error});
    }
}

module.exports = formasPagoCtrl;