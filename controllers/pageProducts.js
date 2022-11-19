const productsModel = require("../models/products")

function pageProducts(req, res) {

  const listProducts = productsModel.getAll()
  res.render('pageProducts', { listProducts })

};


module.exports = { pageProducts, };