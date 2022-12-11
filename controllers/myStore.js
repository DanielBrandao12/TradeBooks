

function myStore(req, res) {
  let id =req.body
  res.render('myStore', id)

};


module.exports = { myStore };