const express = require('express')
const router = express.Router()
const multer = require('multer')
const Event = require('../models/event')
// const upload = multer({
//     dest:
// })

// All Events Route
router.get('/',(req, res)=>{
    res.render("index")
})

// router.post('/', (req, res) => {
//     console.log(req.body.title);

//     const event = new Event({
//         title: req.body.title,

//     });

//     event.save()

// })

module.exports = router