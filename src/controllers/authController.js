const { Usuario } = require('../database');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const login = async (req, res) => {

    try {
        let { nombre } = req.body;
        let { pass } = req.body;

        const user = await Usuario.findOne({ where: { nombre } });
        console.log(user)
       //verifico si el usuario existe
        if (user) {
            //verifico que el password sea correcto
            const match = await bcrypt.compare(pass, user.pass );
            if (match) {
                const payload = {
                    nombre: user.nombre,
                    rolId: user.rolId
                }
                 //genero token
                jwt.sign(payload, process.env.SECRET_TOKEN, function(error, token) {
                    if (error) {
                        res.status(500).json({error});
                    } else {
                        res.json({token})
                    }
                })
            } else {
                res.json({message:'Password Incorrecto.'});
            }
        } else {
            res.json({ message: `no se encontro ningun usuario con el nombre ${nombre}` })
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}

module.exports = login;