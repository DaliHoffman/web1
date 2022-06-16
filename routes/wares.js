const router = require("express").Router()
let wares_controller = require("../controllers/wares")

router.get("/", wares_controller.index)

router.get('/wares', (req, res) => {  //incoming request, outgoing response
    // what should happen??
    res.render("second") //return no code can happen after in the get
})



module.exports = router