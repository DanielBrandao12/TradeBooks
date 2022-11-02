const {body} = require('express-validator')

function validateUser(req, res, next) {
    console.log("Olá, cheguei no middleware");
next()
}


module.exports = {
    validateUser,

    
}