const express = require('express');
const router = express.Router();
const controller = require("../controllers/userProfile");
const createUserMiddleware = require("../middlewares/userMiddlewares");

router.get('/',controller.userProfile);

//post para criação de usuário
router.post('/criarNovo',
createUserMiddleware.fieldsValidation, 
createUserMiddleware.validateUser, 
controller.createUser,

)

router.post('/completarCadastro',
    controller.updateUser,
)




module.exports = router;
