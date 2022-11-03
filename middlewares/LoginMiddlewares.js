const {body, validationResult} = require('express-validator')

function validateUser(req, res, next) {
    console.log("Olá, cheguei no middleware");


const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.render("login", {
    errors: errors.array(),
    data: {
      email: req.body.email,
      password: req.body.password,
    },
  });
}

next();
}

const fieldsValidation = [
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