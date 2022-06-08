const express = require('express')
const app = express()
const PORT = 3000
const expressLayouts = require('express-ejs-layouts')

// note Error: Cannot find module 'ejs' means npm install neccessarry
//All of the using files //setup goes here
app.use(express.static('assets'))
app.use("/", index_router)
app.use("/products", products_router)

app.set('view engine', 'ejs')
app.set('views', './views')             //Views are templates
app.use(expressLayouts)


//MVC is the popular framework to use. Model (data), View(Template), Controller does something to data and returns to view

//routes go here

const index_router = require('./routes/index')
const products_router = require('./routes/products')

//routes go here


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})