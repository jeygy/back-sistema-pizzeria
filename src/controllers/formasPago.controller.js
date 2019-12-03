const formasPagoCtrl = {};
const { FormaPago } =require('../database');

formasPagoCtrl.getFormasPago = async (req, res) => {
    try {
        const lstFormasPago = await FormaPago.findAll();
        res.status(200).json(lstFormasPago);
    } catch (error) {
        res-json({message:error});
    }
}

formasPagoCtrl.createFormaPago = async (req, res) => {
    try {
        const formaNueva = req.body;
        const formaCreada = await FormaPago.create(formaNueva);
        res.status(201).json(formaCreada);
    } catch (error) {
        res-json({message:error});
    }
}

formasPagoCtrl.getFormaPagoById = async (req, res) => {
    try {
        const idForma = req.params.id;
        const forma = await FormaPago.findOne({where:{id:idForma}});
        if (forma) {
            res.status(200).json(forma);
        } else {
            res.status(404).json({message:`No existe ninguna Forma de pago con id: ${idForma}`});
        }
    } catch (error) {
        res-json({message:error});
    }
}

formasPagoCtrl.updateFormaPago = async (req, res) => {
    try {
        const idForma = req.params.id;
        const nuevosDatos = req.body;
        const forma = await FormaPago.findOne({where:{id:idForma}});
        if (forma) {
            const formaModificada = await forma.update(nuevosDatos);
            res.status(200).json(formaModificada);
        } else {
            res.status(404).json({message:`No existe ninguna Forma de pago con id: ${idForma}`});
        }
    } catch (error) {
        res-json({message:error});
    }
}

formasPagoCtrl.deleteFormaPago = async (req, res) => {
    try {
        const idForma = req.params.id;
        const formaEliminada = await FormaPago.destroy({where:{id:idForma}});
        if (formaEliminada) {
            res.status(200).json({message:"Forma de pago eliminada"});
        } else {
            res.status(404).json({message:`No existe ninguna Forma de pago con id: ${idForma}`});
        }
        res.status(201).json({message:"DELETE Forma de Pago"});
    } catch (error) {
        res-json({message:error});
    }
}

module.exports = formasPagoCtrl;