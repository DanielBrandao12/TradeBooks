let express = require('express');
let router = express.Router();

const controller = require("../controllers/login");




router.get('/', controller.login);
router.post('/register',controller.createUser)


module.exports = router;
