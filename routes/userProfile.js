let express = require('express');
let router = express.Router();

const controller = require("../controllers/userProfile")



router.get('/', controller.userProfile);
router.post('/criarNovo', controller.createUser)


module.exports = router;
