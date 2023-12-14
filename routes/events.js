const express = require('express')
const router = express.Router()
// const multer = require('multer')
const Event = require('../models/event')
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');
// const fileSizeLimiter = require('../middleware/fileSizeLimiter');
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']
const moment = require('moment')



// All Events Route
router.get('/',checkUser, async (req, res)=>{
  let searchOptions = {}
  let email = 'student'
  if (req.query.title != null && req.query.title !== '') {
    searchOptions.title = new RegExp(req.query.title, 'i')
  }
  if (req.query.channel != null && req.query.channel !== '') {
    if (req.query.channel == "Dean")
    email = 'KFUPM@KFUPM'
  }
 
  
  try {
    // const events = await query.exec()
    const events = await Event.find(searchOptions).populate('userID')
    events.reverse();
    
    res.render("index", {events: events, Event, searchOptions: req.query, moment})
  } catch (error) {
    console.log("erro hereerere");
    res.render('index')
  }

})

// router.get('/searchEvents', checkUser, async (req, res)=>{
//   try {
    
//   } catch (error) {
//     res.render('index')
//   }
// })

// Create Event Route
router.post('/',checkUser, async (req, res) => {
  try {
    if (req.body.title = null || req.body.title == ""){
      throw Error('Title is Required');
    }

      
    const event = new Event({

      userID: res.locals.user._id,
      title: req.body.title,
      description: req.body.description,  
  
      startDate: new Date(req.body.startDate),
      endDate: new Date(req.body.endDate),
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      location: req.body.location,
      registrationLink: req.body.link
    })
    savePoster(event, req.body.poster)

    await event.save()
    res.redirect("/")
      
    } catch (err) {
      res.send("error")
    }
})

router.post('/LogoutBtn', async (req, res) => {

  f
})




function savePoster(event, posterEncoded) {
  if (posterEncoded == null) return
  const poster = JSON.parse(posterEncoded)
  if (poster != null && imageMimeTypes.includes(poster.type)) {
    event.posterImage = new Buffer.from(poster.data, 'base64')
    event.posterImageType = poster.type
  }
}

module.exports = router