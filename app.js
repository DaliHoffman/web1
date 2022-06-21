const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const compression = require('compression')
const index_router = require('./routes/index')
const PORT = process.env.PORT || 3000
const wares_router = require('./routes/wares')
const app = express()


// note Error: Cannot find module 'ejs' means npm install neccessarry
//All of the using files //setup goes here
app.use(express.static('assets'))
app.use("/", index_router)
app.use("/wares", wares_router)
app.use(compression()) // Using Compression to speed up the website

app.set('view engine', 'ejs')
app.set('views', './views')             //Views are templates
app.use(expressLayouts)


//MVC is the popular framework to use. Model (data), View(Template), Controller does something to data and returns to view

//routes go here


//routes go here


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})