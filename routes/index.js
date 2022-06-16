const router = require("express").Router()
let index_controller = require("../controllers/index")

router.get("/", index_controller.index)


//  app.get('/', (req, res) => {  //incoming request, outgoing response
//      res.render("index", "wares") //return no code can happen after in the get
//  })



module.exports = router