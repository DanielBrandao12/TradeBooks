const express = require('express');
const router = express.Router();
const controller = require("../controllers/login");
const loginMiddleware = require("../middlewares/LoginMiddlewares");

router.get("/",controller.login);
router.post("/logar",
    loginMiddleware.fieldsValidation,
    loginMiddleware.validateUser,
    controller.autheticateUser
    );

module.exports = router;