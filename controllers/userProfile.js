const database = require('../database/models');

//função para renderizar página de usuário
function userProfile(req, res) {
  res.render('userProfile');
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

  let { id, name, user_name, dataNascimento, cpf, sexo, telefone } = req.body;

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



}



function deleteUser(req, res) {

  let { id } = req.body;

  database.User.destroy({ where: { id, } });

}


module.exports = {
  userProfile,
  createUser,
  updateUser,
  deleteUser

};