const productsModel = require("../models/products")
const products = require("../database/models")
function index(req, res) {
  products.Books.findAll().then((data) =>{
  const listProducts = productsModel.getAll()
  res.render('index',{userLogged: req.session.userLogged /*colocar isso em todas os controllers*/, listProducts, data })
})
};


module.exports = { index, };