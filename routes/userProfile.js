let express = require('express');
let router = express.Router();

const controller = require("../controllers/userProfile")



router.get('/', controller.userProfile);



module.exports = router;
