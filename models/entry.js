const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = entrySchema;