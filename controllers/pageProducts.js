const productsModel = require("../models/products")

function pageProducts(req, res) {

  const listProducts = productsModel.getAll()
  res.render('pageProducts', {userLogged: req.session.userLogged , listProducts })

};


module.exports = { pageProducts, };