
const products = require("../database/models")
function pageProducts(req, res) {



  //findAll pega todos os livros da tabela tb_books
  products.Books.findAll().then((data) =>{
    
    //essa variavel vem do json, apagar ea depois que o banco de livros estiver feito
 
    res.render('pageProducts', {userLogged: req.session.userLogged , data })
  })

};



module.exports = { pageProducts, };