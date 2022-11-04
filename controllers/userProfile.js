
//função para renderizar página de usuário
function userProfile(req, res) {
  res.render('userProfile')
};

function createUser(req, res) {
  const { name, email, password } = req.body
  console.log(req.body)
  usersModel.create(name, email, password)
  return res.redirect("/");

}
module.exports = { userProfile,createUser };