const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    posterImage: {
        type: Buffer,
        required: true
    },
    posterImageType: {
        type: String,
        required: true
    }
})

eventSchema.virtual('posterImagePath').get(function() {
    if (this.posterImage != null && this.posterImageType != null) {
      return `data:${this.posterImageType};charset=utf-8;base64,${this.posterImage.toString('base64')}`
    }
})

module.exports = mongoose.model('Event', eventSchema)