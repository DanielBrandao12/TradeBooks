const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");

//função para renderizar minha página de login
function login(req, res){
  return res.render("login",{ errors: [], data: {} });
};

function autheticateUser(req, res){
   const { email, password } = req.body;
   const token = jwt.sign({ email }, jwtKey, { expiresIn: 10});
   res.cookie("token", token);
   console.log('cheguei aqui')
   return res.redirect("/userProfile");
};

module.exports = {
  login, 
  autheticateUser,
};