const express = require('express');
const router = express.Router();
const controller = require("../controllers/userProfile");
const createUserMiddleware = require("../middlewares/userMiddlewares");
const loginMiddleware = require("../middlewares/LoginMiddlewares");
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware')

router.get('/',loginMiddleware.validateToken,notLoggedUserMiddleware,  controller.userProfile);


//post para criação de usuário
router.post('/criarNovo',
createUserMiddleware.fieldsValidation, 
createUserMiddleware.validateUser, 
controller.createUser,

)
//atualização ou edição do cadastro do usuário
router.post('/completarCadastro',
    controller.updateUser,
)

//adicionar um eendereço do usuário
router.post('/addAdress', controller.addAdress)


module.exports = router;
