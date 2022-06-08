const router = require("express").Router()
let index_controller = require("../controllers/index")

router.get("/", index_controller.index)

app.get('/', (req, res) => {  //incoming request, outgoing response
    // what should happen??
    res.render("index") //.ejs because reffered in the set at the beginning
    //return no code can happen after in the get
  })



app.get('/wares', (req, res) => {  //incoming request, outgoing response
    // what should happen??
    res.render("second") //return no code can happen after in the get
})


app.get('/', (req, res) => {  //incoming request, outgoing response
    res.render("index", "second") //return no code can happen after in the get
})



module.exports = router