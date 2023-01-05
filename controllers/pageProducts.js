const productsModel = require("../models/products")
const products = require("../database/models")
function pageProducts(req, res) {



  //findAll pega todos os livros da tabela tb_books
  products.Books.findAll().then((data) =>{
    
    //essa variavel vem do json, apagar ea depois que o banco de livros estiver feito
    const listProducts = productsModel.getAll()
    res.render('pageProducts', {userLogged: req.session.userLogged , listProducts, data })
  })

};



module.exports = { pageProducts, };