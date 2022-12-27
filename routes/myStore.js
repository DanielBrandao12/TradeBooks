const express = require('express');
const router = express.Router();

const controller = require("../controllers/myStore")
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware')

/* GET home page. */
router.get('/',notLoggedUserMiddleware, controller.myStore);


module.exports = router;
