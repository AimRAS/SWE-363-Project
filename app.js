
require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const eventRouter = require('./routes/events')

const app = express()


app.use(express.urlencoded({ extended: true}))

app.set("view engine", "ejs")
app.set('views', __dirname + '/views')
app.use(express.static('./public'))

// connect to mongodb

mongoose.connect(process.env.dbURL)
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err))




app.use('/', eventRouter)


app.all('*',(req,res)=>{
    res.status(404).send('<h1>resoure not found</h1>')
})



app.listen(3300)

   