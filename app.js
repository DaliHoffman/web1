const express = require('express')
const app = express()
const PORT = 3000
const expressLayouts = require('express-ejs-layouts')

// note Error: Cannot find module 'ejs' means npm install neccessarry
//All of the using files //setup goes here
app.use(express.static('assets'))
app.set('view engine', 'ejs')
app.set('views', './views')             //Views are templates
app.use(expressLayouts)


//MVC is the popular framework to use. Model (data), View(Template), Controller does something to data and returns to view

//routes go here
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


//routes go here


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})