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

// Create Book Route
router.post('/', async (req, res) => {
    const event = new Event({
      title: req.body.title,
      
      publishDate: new Date(req.body.publishDate),
      pageCount: req.body.pageCount,
      description: req.body.description
    })
    saveCover(book, req.body.cover)
  
    try {
      const newBook = await book.save()
      // res.redirect(`books/${newBook.id}`)
      res.redirect(`books`)
    } catch {
      renderNewPage(res, book, true)
    }
  })

module.exports = router