const database = require('../database/models');

//função para renderizar página de usuário
function userProfile(req, res) {
  res.render('userProfile', {
    //crio variavel para receber dados da sessão e usar na minha página
    userLogged: req.session.userLogged
  });
};

//criação de usuário
function createUser(req, res) {
  let { name, user_name, email, password } = req.body;

  database.User.create({
    FULL_NAME: name,
    USER_NAME: user_name,
    EMAIL: email,
    UPASSWORD: password,
  });
  return res.redirect("/login");
};

function updateUser(req, res) {
  //receve id do usuario que está salvo na sessão
  let id = req.session.userLogged.id
  let { name, user_name, dataNascimento, cpf, sexo, telefone } = req.body;

  database.User.update({
    FULL_NAME: name,
    USER_NAME: user_name,
    BIRTH_DATE: dataNascimento,
    CPF: cpf,
    SEXO: sexo,
    TEL: telefone,
  },
    {
      where: {
        id,
      }
    });

  return res.redirect('/userProfile')

}



function deleteUser(req, res) {

  let { id } = req.body;

  database.User.destroy({ where: { id, } });

}

//Adicionar endereço 
function addAdress(req, res) {
  let id = req.session.userLogged.id
  let { cep, rua, numero, complemento, bairro, cidade, estado } = req.body
  database.Adress.create({
    USERS_ID: id,
    CEP: cep,
    RUA: rua,
    NUMERO: numero,
    BAIRRO: bairro,
    CIDADE: cidade,
    ESTADO: estado,
    COMPLEMENTO: complemento,
  })
}


module.exports = {
  userProfile,
  createUser,
  updateUser,
  deleteUser,
  addAdress

};