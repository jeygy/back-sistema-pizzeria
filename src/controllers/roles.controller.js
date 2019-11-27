const rolCtrl = {};

rolCtrl.getRoles = async (req, res) => {
    try {
        res.status(200).json({message:"GET Roles"});
    } catch (error) {
        res.json({message:error});
    }
}

rolCtrl.createRol = async (req, res) => {
    try {
        res.status(201).json({message:"POST Rol"});
    } catch (error) {
        res.json({message:error});
    }
}

rolCtrl.getRolById = async (req, res) => {
    try {
        res.status(200).json({message:"GET Rol por id"})
    } catch (error) {
        res.json({message:error});
    }
}

rolCtrl.updateRol = async (req, res) => {
    try {
        res.status(201).json({message:"UPDATE Roles"});
    } catch (error) {
        res.json({message:error});
    }
}

rolCtrl.deleteRol = async (req, res) => {
    try {
        res.status(200).json({message:"DELETE Roles"});
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = rolCtrl;