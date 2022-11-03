const usersModel = require('../models/users')

//função para renderizar minha página de login
function login(req, res) {
  return res.render("login",{ errors: [], data: {} })
};


//função para criar usuário
function createUser(req, res) {
  const { name, email, password } = req.body
  console.log(req.body)
  usersModel.create(name, email, password)
  return res.redirect("login");

}
function enterUserProfile(req, res) {

  return res.redirect("userProfile");

}

module.exports = {
  login,
  createUser,
  enterUserProfile,
};