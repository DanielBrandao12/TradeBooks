const {body,validationResult} = require('express-validator')

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
next()
}


module.exports = {
    validateUser,

    
}