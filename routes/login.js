const express = require('express');
const router = express.Router();
const controller = require("../controllers/login");
const loginMiddleware = require("../middlewares/LoginMiddlewares");
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware')

router.get("/",loggedUserMiddleware, controller.login);
router.post("/logar",
    loginMiddleware.fieldsValidation,
    loginMiddleware.validateUser,
    controller.autheticateUser,

    );

module.exports = router;