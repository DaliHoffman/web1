const router = require("express").Router()
let products_controller = require("../controllers/products")

router.get("/", products_controller.index)

module.exports = router