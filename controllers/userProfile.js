const database = require('../database/models');

//função para renderizar página de usuário
function userProfile(req, res) {
  res.render('userProfile');
};

//criação de usuário
function createUser(req, res) {
  let { name,user_name, CPF, email, password } = req.body;
 
  database.User.create({
    FULL_NAME:name,
    USER_NAME: user_name,
    CPF,
    EMAIL: email, 
    UPASSWORD: password,
  });
  return res.redirect("/login");
};


module.exports = { 
  userProfile,
  createUser,
  
};