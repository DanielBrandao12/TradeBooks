const {body} = require('express-validator')

function validateUser(req, res, next) {
    console.log("Olá, cheguei no middleware");
next()
}

const fieldsValidation = [
body("name")
.notEmpty().withMessage("Precisa digitar seu o nome"),

body("email").isEmail().withMessage("Você precisa digitar o email"),

body("password")
  .notEmpty()
  .withMessage("Você precisa digitar a senha")
  .isLength({ min: 5 })
  .withMessage("A senha precisa ter pelo menos 5 caracteres"),
];


module.exports = {
    validateUser,

    fieldsValidation,
}