
require('dotenv').config()


const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

const eventRouter = require('./routes/events')


app.use(express.urlencoded({ extended: true}))

app.set("view engine", "ejs")
app.set('views', __dirname + '/views')
app.use(express.static('./public'))

// connect to mongodb
const mongoose = require('mongoose')
mongoose.connect(process.env.dbURL)
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err))




app.use('/', eventRouter)


app.all('*',(req,res)=>{
    res.status(404).send('<h1>resoure not found</h1>')
})



app.listen(process.env.PORT || 5000)

   