
const database = require('../database/models');

function pageCart(req, res) {
  let id = req.session.userLogged.id
  database.Address.findAll({
    where: {
      USERS_ID: id
    }
  }).then((data) => {
    let myAddress = data


 res.render('pageCart', {

    userLogged: req.session.userLogged,
    myAddress
  })
  });
  


};


module.exports = { pageCart, };