let express = require('express');
let router = express.Router();

const controller = require("../controllers/myStore")


/* GET home page. */
router.post('/myStore', controller.myStore);


module.exports = router;
