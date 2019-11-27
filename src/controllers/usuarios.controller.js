const usaurioCtrl = {};

usaurioCtrl.getUsuarios = async (req, res) => {
    try {
        res.status(200).json({message:"GET Usuarios"});
    } catch (error) {
        res.json({message:error});
    }
}

usaurioCtrl.createUsuario = async (req, res) => {
    try {
        res.status(201).json({message:"POST Usuario"});
    } catch (error) {
        res.json({message:error})
    }
}

usaurioCtrl.getUsuarioById = async (req, res) => {
    try {
        res.status(200).json({message:"GET Usuario por id"});
    } catch (error) {
        res.json({message:error});   
    }
}

usaurioCtrl.updateUsuario = async (req, res) => {
    try {
        res.status(201).json({message:"PUT Usuario"});
    } catch (error) {
        res.json({message:error});
    }
}

usaurioCtrl.deleteUsuario = async (req, res) => {
    try {
        res.status(200).json({message:"DELETE Usuario"});
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = usaurioCtrl;