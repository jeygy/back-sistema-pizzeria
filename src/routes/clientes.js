const Router = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.status(200).json({message: 'GET Clientes'}))

module.exports = router;