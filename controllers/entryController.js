const
    Entry = require('../models/user.js')

// index, show, create, update, delete
module.exports = {
    index: Entry.find({}, (err, entries) => {
        if (err) res.json({ success: false, err })
        res.json({ success: true, entries })
    }),
    show: Entry.findById(req.params.id, (err, entry) => {
        if (err) res.json({ success: false, err })
        res.json({ success: true, entry })
    }),
    create: Entry.create(req.body, (err, newEntry) => {
        if (err) res.json({ success: false, err })
        res.json({ success: true, newEntry })
    }),
    update: Entry.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedEntry) => {
        if (err) res.json({ success: false, err })
        res.json({ success: true, updatedEntry })
    })
}