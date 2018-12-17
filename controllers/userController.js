const
    User = require('../models/users.js');

// index
// show
// create
// update
// delete

module.exports = {
    index: (req, res) => {
        User.find({}, (err, users) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, users })
        });
    },
    show: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, user })
        });
    },
    create: (req, res) => {
        User.create(req.body, (err, newUser) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, newUser })
        });
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, deletedUser })
        });
    }
    // ,
    // update: (req, res) => {
    //     User.findByIdAndUpdate(req.params.id)
    // }
}