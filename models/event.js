const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        rquired: true
    },
    endTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Data,
        required: true
    },
    location: {
        type: Date,
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