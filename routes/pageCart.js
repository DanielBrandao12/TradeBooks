let express = require('express');
let router = express.Router();

const controller = require("../controllers/pageCart")
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware')

/* GET home page. */
router.get('/',  notLoggedUserMiddleware,controller.pageCart);


module.exports = router;