let express = require('express');
let router = express.Router();

const controller = require("../controllers/pageCart")


/* GET home page. */
router.get('/', controller.pageCart);


module.exports = router;