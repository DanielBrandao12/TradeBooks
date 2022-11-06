const usersModel = require('../models/users')

//função para renderizar minha página de login
function login(req, res) {
  return res.render("login",{ errors: [], data: {} })
};




module.exports = {
  login,
};