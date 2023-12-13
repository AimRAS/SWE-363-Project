const express = require('express')
const router = express.Router()
// const multer = require('multer')
const Event = require('../models/event')
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');
// const fileSizeLimiter = require('../middleware/fileSizeLimiter');
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']
const bodyParser = require('body-parser')



// router.use(bodyParser.urlencoded({ limit: '10mb', extended: false, inflate: "10mb", parameterLimit: 100000 }))


// const storage = multer.memoryStorage(); // In-memory storage, adjust as needed
// const upload = multer({ storage: storage, limits: { fileSize: 20 * 1024 * 1024 } }); // 20 MB limit


// function checkAuthentication(req) {
//   // Implement logic to verify the JWT token here
//   // If authenticated, redirect to a specific page with a flag
//   const token = req.cookies.jwt;

//   // check json web token exists & is verified
//   if (token) {
//     jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
//       if (err) {
//         console.log("i waas in errrrrrrr");
//         return false;
//       } else {
//         console.log("it is authenitcated from funct");
//         return true;
//       }
//     });
//   } else {
//     console.log("not even a token");
//     return false;
//   }
// }

// All Events Route
router.get('/',checkUser, async (req, res)=>{
  
  // let query = Event.find()

  try {
    // const events = await query.exec()
    const events = await Event.find().populate('userID');
    res.render("index", {events: events, Event})
  } catch (error) {
    res.render('index')
  }

})

// Create Book Route
router.post('/',checkUser, async (req, res) => {
    const event = new Event({

      userID: res.locals.user._id,
      title: req.body.title,
      description: req.body.description,  
      
      date: req.body.date,

      // startDate: new Date(req.body.startDate),
      // endDate: new Date(req.body.endDate),
      // endTime: req.body.endTime,

      location: req.body.location
    })
    savePoster(event, req.body.poster)

    event.save()
  
    // try {
    //   const newBook = await book.save()
    //   // res.redirect(`books/${newBook.id}`)
    //   res.redirect(`books`)
    // } catch {
    //   // renderNewPage(res, book, true)
    // }
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