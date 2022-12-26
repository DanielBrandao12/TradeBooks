const productsModel = require("../models/products")

function index(req, res) {

  const listProducts = productsModel.getAll()
  res.render('index',{userLogged: req.session.userLogged /*colocar isso em todas as rotas*/, listProducts })

};


module.exports = { index, };