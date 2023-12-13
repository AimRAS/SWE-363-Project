const express = require('express')
const collection = require("./mongodb")
const app = express()
const path = require("path")
const hbs = require("hbs")
const async = require('hbs/lib/async')
const tempelatePath=path.join(__dirname,'../tempelate')
const nodemailer = require('nodemailer')


app.use(express.json())
app.set("view engine","hbs")
app.set("views", tempelatePath)
app.use(express.urlencoded({extended:false}))


app.get ("/",(req,res)=>{
    res.render("login")
})
app.get ("/signup",(req,res)=>{
    res.render("signup")
})

 app.post("/signup",async(req,res)=>{

    const data={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,

    }
    await collection.insertMany([data])
    
    res.render("EventPage")
 })
 app.post("/signup",async(req,res)=>{

    const data={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,

    }
    await collection.insertMany([data])
    
    res.render("EventPage")
 })
 app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ username: req.body.username })
        if (check.password === req.body.password) {
            res.status(201).render("EventPage", { naming: `${req.body.password}+${req.body.username}` })
        }
        else {
            res.send("incorrect password")
        }
    } 
    catch (e) {
        res.send("wrong details")
    }
})




app.listen(3000,()=> {
    console.log('connected');
})

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'azzoz2001@gmail.com',
      pass: 'Qweewq@123321'
    }
  });
  var mailOptions = {
    from: 'azzoz2001@gmail.com',
    to: 's201962450@kfupm.edu.sa',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ username: req.body.username })
        if (check.password === req.body.password) {
            res.status(201).render("EventPage", { naming: `${req.body.password}+${req.body.username}` })
        }
        else {
            res.send("incorrect password")
        }
    } 
    catch (e) {
        res.send("wrong details")
    }
})