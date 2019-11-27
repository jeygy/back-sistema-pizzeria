const clienteCtrl = {};

clienteCtrl.getClientes = async (req, res) => {
    try {
        res.status(200).json({message:"GET Clientes"});
    } catch (error) {
        res.json({message:error});
    }
}

clienteCtrl.createCliente = async (req, res) => {
    try {
        res.status(201).json({message:"POST Cliente"});
    } catch (error) {
        res.json({message:error});
    }
}

clienteCtrl.getClienteById = async (req, res) => {
    try {
        res.status(200).json({message:"GET Cliente por id"});
    } catch (error) {
        res.json({message:error});
    }
}

clienteCtrl.updateCliente = async (req, res) => {
    try {
        res.status(201).json({message:"PUT Cliente"})
    } catch (error) {
        res.json({message:error});
    }
}

clienteCtrl.deleteCliente = async (req, res) => {
    try {
        res.status(200).json({message:"DELETE Cliente"});
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = clienteCtrl;