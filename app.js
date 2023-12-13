
require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const eventRouter = require('./routes/events')
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')
const { requireAuth, checkUser } = require('./middleware/authMiddleware')
const bodyParser = require('body-parser')
const fileSizeLimiter = require('./middleware/fileSizeLimiter');


const app = express()


// app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
// app.use(express.bodyParser({limit: '50mb'}));
// create an incoming form object
// var form = new formidable.IncomingForm();

// ADD THIS LINE to increase file size limit to 10 GB; default is 200 MB
// form.maxFileSize = 10 * 1024 * 1024 * 1024;

app.set("view engine", "ejs")
app.set('views', __dirname + '/views')
app.use(express.static('./public'))

// connect to mongodb

mongoose.connect(process.env.dbURL)
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err))




app.use('/', eventRouter)
app.use(authRoutes)


app.all('*',(req,res)=>{
    res.status(404).send('<h1>resoure not found</h1>')
})



app.listen(3500)

   