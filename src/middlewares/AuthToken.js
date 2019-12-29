const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.path != '/api/login') {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            console.log(token)
            jwt.verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
                if (error) return res.status(403).send({message:'No tienes los permisos para estar aquí.', error});
                if (req.method != 'GET') {
                    if (decoded.rolId == 1) next();
                    else res.status(403).send({message: "No tienes los permisos para ingresar --."}); 
                }else {
                    next();
                }
            });
        } else res.status(403).send({message: "No tienes los permisos para ingresar."});
    } else next();
};