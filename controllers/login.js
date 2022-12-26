const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");
const database = require('../database/models');

function getUsers(req, res) {

}

//função para renderizar minha página de login
function login(req, res) {
  return res.render("login", { errors: [], data: {} });
};

function autheticateUser(req, res) {
  const { email, password } = req.body;

  const token = jwt.sign({ email }, jwtKey, { expiresIn: "1h" });
  res.cookie("token", token);

  database.User.findOne({
    where: {
      email: req.body.email,

    },

  }).then((data) => {

    //Verificar se a senha digita é igual a que está no banco de dados
    if (password == data.dataValues.UPASSWORD) {
      //tirar a senha antes de ir para sessão, para não exibir minha senha 
      delete data.dataValues.UPASSWORD
      //sessão recebe os dados dos usuário logado para poder usar em todas as minhas views
      req.session.userLogged = data.dataValues

      res.redirect("/userProfile");

    } else {
      console.log('senhas diferentes')

    }

  });

};

module.exports = {
  login,
  autheticateUser,
  getUsers,


};