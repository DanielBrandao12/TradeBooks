const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");
const database = require('../database/models');

function getUsers(req, res) {

}

//função para renderizar minha página de login
function login(req, res) {
  return res.render("login", {erro: "", errors: [], data: {}});
};

function autheticateUser(req, res) {
  const { email, password } = req.body;

  const token = jwt.sign({ email }, jwtKey, { expiresIn: "1h" });
  res.cookie("token", token);
  
  
  database.User.findOne({
    where: {
      email: req.body.email,
      
    }
    
  }).then((data) => {
    
    console.log(data)
    try{

      //Verificar se a senha digita é igual a que está no banco de dados
      if (password == data.dataValues.UPASSWORD) {
        //tirar a senha antes de ir para sessão, para não exibir minha senha 
        delete data.dataValues.UPASSWORD
        //sessão recebe os dados dos usuário logado para poder usar em todas as minhas views
        req.session.userLogged = data.dataValues
      
        res.redirect("/userProfile");
      
      } else {
        res.render("login", {erro: "Senha incorreta", errors: [], data: {}});
      
      }

}catch(error){
  res.render("login", {erro: "E-mail não existe no sistema.", errors: [], data: {}});
  
  
}
   
    
  });
  
};
function logout (req, res){
    res.clearCookie('connect.sid')
    res.clearCookie('token')
    req.session.destroy()
   
    return res.redirect('/')
}

module.exports = {
  login,
  autheticateUser,
  getUsers,
  logout


};