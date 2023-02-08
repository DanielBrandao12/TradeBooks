
const database = require('../database/models')

function createPedido(req, res) {
   // const id = req.session.userLogged.id
    const { tipoPedido, valorFrete, valorPedido, valorTotal , id} = req.body

    database.Pedidos.create({
        TYPE_PEDIDO: tipoPedido,
      //  STATUS_PEDIDO,
        VALOR_FRETE: valorFrete,
        VALOR_PEDIDO: valorPedido,
        VALOR_TOTAL: valorTotal,
       // DATE_PEDIDO,
        USERS_ID: id,

    }).then((data) => {
        return res.json(data)
        //No front pegar o id do pedido criado 
        //para adicionar na tabela de itens
        //cada item vai ser adicionado o id do pedido
        //e cada item recebe o id de cada livro do carrinho
        //após isso, acessar tabela de itens e fazer update
        //pegando a quantidade de livros comprados e subtraindo
        //com a quantidade no estoque de livros
    })

}

function createItensPedido(req, res) {
    //idPedido e IdBook ver depois de onde vou receber essas informações
    const { qtde,idPedidos, idBooks } = req.body

    database.Itens.create({
        QTDE: qtde,
        ID_PEDIDOS: idPedidos,
        BOOKS_ID: idBooks,
    }).then((data) => {
        return res.json(data)
    })
}


function updateQtdeBooks(req, res) {
    //receber id do livro que vai ser alterado
  
    // receber a quantidade que vai ser subtraida do estoque
    const { qtde , id} = req.body
    database.Books.findAll({
        where: {
          ID: id
        }
      }).then((data) => {
        
        database.Books.update({
            QTDE: data[0].QTDE - qtde,
    
        },
            {
                where: {
                    id,
                }
            })
        
            
      })
}

module.exports = {
    createPedido,
    createItensPedido,
    updateQtdeBooks
}