// use express for backend
const express = require('express')
const app = express()

// use cookies to store login info
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// Max upload is for events is 10 MB
const bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// set the view engine to ejs
app.set("view engine", "ejs")
app.set('views', __dirname + '/views')

// all static files are in public folder (assets, css, js ...)
app.use(express.static('./public'))

// get variables from .env file (not pushed to github)
require('dotenv').config()

// connect to DataBase
const mongoose = require('mongoose')
mongoose.connect(process.env.dbURL)
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err))


// the needed routes
const eventRouter = require('./routes/events')
const authRoutes = require('./routes/authRoutes')
app.use(eventRouter)
app.use(authRoutes)

// in case failed to connect to server, send resource not found
app.all('*',(req,res)=>{
    res.status(404).send('<h1>resoure not found</h1>')
})

// listen at port 3500
app.listen(process.env.PORT || 3500)