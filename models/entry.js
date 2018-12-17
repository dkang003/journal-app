const
    mongoose = require('mongoose'),
    entrySchema = new mongoose.Schema({
        date: {
            type: Date,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        body:  {
            type: String,
            required: true
        },
    }, { timestamps: true });
    

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;