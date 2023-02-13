const express = require('express');
const router = express.Router();

const controller = require('../controllers/pedidos')


router.post('/', controller.createPedido)





module.exports = router
