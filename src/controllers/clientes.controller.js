const clienteCtrl = {};
const { Cliente } = require('../database');

clienteCtrl.getClientes = async (req, res) => {
    try {
        const lstClientes = await Cliente.findAll();
        res.status(200).json(lstClientes);
    } catch (error) {
        res.json({message:error});
    }
}

clienteCtrl.createCliente = async (req, res) => {
    try {
        const clienteNuevo = req.body;
        const clienteCreado = await Cliente.create(clienteNuevo);
        res.status(201).json(clienteCreado);
    } catch (error) {
        res.json({message:error});
    }
}

clienteCtrl.getClienteById = async (req, res) => {
    try {
        const idCliente = req.params.id;
        const cliente = await Cliente.findOne({where:{id:idCliente}});
        if (cliente) {
            res.status(200).json(cliente);            
        } else {
            res.status(404).json({message:`No existe ningún cliente con el id : ${idCliente}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

clienteCtrl.updateCliente = async (req, res) => {
    try {
        const idCliente = req.params.id;
        const nuevosDatos = req.body;
        const cliente = await Cliente.findOne({where:{id:idCliente}});
        if (cliente) {
            const clienteModificado = await cliente.update(nuevosDatos);
            res.status(201).json(clienteModificado);            
        } else {
            res.status(404).json({message:`No existe ningún cliente con el id: ${idCliente}`});
        }
    } catch (error) {
        res.json({message:error});
    }
}

clienteCtrl.deleteCliente = async (req, res) => {
    try {
        const idCliente = req.params.id;
        const clienteEliminado = await Cliente.destroy({where:{id:idCliente}});
        if (clienteEliminado) {
            res.status(200).json({message:"Cliente eliminado"});
        } else {
            res.status(404).json({message:`No existe ningún cliente con el id: ${idCliente}`})
        }
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = clienteCtrl;