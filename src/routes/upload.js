const Router = require('express');
const router = Router();

router.route('/')
    .get( (req, res) => res.json({message:'todo ok'}));

module.exports = router;