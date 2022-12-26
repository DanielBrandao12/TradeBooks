const express = require('express');
const router = express.Router();

const controller = require("../controllers/myStore")


/* GET home page. */
router.get('/', controller.myStore);


module.exports = router;
