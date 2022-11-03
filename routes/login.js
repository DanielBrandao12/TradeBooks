let express = require('express');
let router = express.Router();

const controller = require("../controllers/login");

const loginMiddleware = require("../middlewares/LoginMiddlewares");



router.get('/', controller.login);
router.post('/',loginMiddleware.fieldsValidation , loginMiddleware.validateUser)


module.exports = router;
