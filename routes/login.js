let express = require('express');
let router = express.Router();

const controller = require("../controllers/login");




router.get('/', controller.login);
router.post('/', controller.createUser)


module.exports = router;
