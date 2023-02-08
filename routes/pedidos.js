const express = require('express');
const router = express.Router();

const controller = require('../controllers/pedidos')


router.post('/pedidos', controller.createPedido)

router.post('/itens', controller.createItensPedido)

router.put('/updateQtdeBook', controller.updateQtdeBooks)



module.exports = router
