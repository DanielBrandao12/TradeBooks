
const database = require('../database/models')

function createPedido(req, res) {


    const id = req.session.userLogged.id

    const { tipoPedido, valorFrete, valorPedido, valorTotal } = req.body

    database.Pedidos.create({
        TYPE_PEDIDO: tipoPedido,
        //  STATUS_PEDIDO,
        VALOR_FRETE: valorFrete,
        VALOR_PEDIDO: valorPedido,
        VALOR_TOTAL: valorTotal,
        // DATE_PEDIDO,
        USERS_ID: id,

    }).then((data) => {

        const idPedidos = data.dataValues.id


        let dados = []


        dados.push({ "idBook": req.body.idBook, "qtde": req.body.qtde })


        for (let i = 0; i < dados[0].idBook.length; i++) {

            database.Itens.create({
                QTDE: dados[0].qtde[i],
                ID_PEDIDOS: idPedidos,
                BOOKS_ID: dados[0].idBook[i],
            })


            database.Books.findAll({
                where: {
                    ID: dados[0].idBook[i]
                }
            }).then((data) => {

                database.Books.update({
                    QTDE: data[0].QTDE - dados[0].qtde[i]

                },
                    {
                        where: {
                            ID: dados[0].idBook[i],
                        }
                    })


            })

            res.render('pageCart')

        }


    })
}







module.exports = {
    createPedido,

}