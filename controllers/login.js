const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");
const database = require('../database/models');

function getUsers(req, res) {
  
}

//função para renderizar minha página de login
function login(req, res){
  return res.render("login",{ errors: [], data: {} });
};

function autheticateUser(req, res){
   const { email, password } = req.body;
   const token = jwt.sign({ email }, jwtKey, { expiresIn: "2h"});
   res.cookie("token", token);

   //teste de login, verificação se senha digitada está correta
   database.User.findOne({
    where:{
     email: req.body.email,
    
    },
    
  }).then((data) => {

if(req.body.password == data.dataValues.UPASSWORD){
      console.log('senhas iguais')
     
      return res.redirect("/userProfile");
     
   }else{
    console.log('senhas diferentes')
    
   }
    
  });
    //teste de login fim
};

module.exports = {
  login, 
  autheticateUser,
  getUsers,

};