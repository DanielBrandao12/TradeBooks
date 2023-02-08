const database = require('../database/models')

function createPedido(req, res){
    let id = req.session.userLogged.id
    let {tipoPedido, valorFrete,ValorPedido, ValorTotal} = req.body

    database.Pedidos.create({
        TYPE_PEDIDO: tipoPedido,
        STATUS_PEDIDO,
        VALOR_FRETE: valorFrete,
        VALOR_PEDIDO: ValorPedido,
        VALOR_TOTAL: ValorTotal,
        DATE_PEDIDO,
        USERS_ID: id,

    }).then((data) =>{
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


module.exports = {
    createPedido
}