const
    User = require('../models/user'),
    Entry = require('../models/entry');


// index, show, create, update, delete
module.exports = {
    index: (req ,res) => {
        // // TEST USER FOR POSTMAN
        // let id = "5c1827e94a8b2fedd386c7c8"
        // FIND USER BY COOKIE ID
        let id = req.user.id;
        User.findById(id, (err, user) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, user });
        })
    },
    new: (req, res) => {
        res.render('newEntry');
    },
    show: (req, res) => {
        // // TEST USER FOR POSTMAN
        // let id = "5c1827e94a8b2fedd386c7c8"
        // FIND USER BY COOKIE ID
        let id = req.user.id;
        User.findById(id, (err, user) => {
            if (err) res.json({ success: false, err })
            let entry = user.entries.id(req.params.id);

            if (!entry) res.json({ success: false, message: "Entry doesn't exist." });
            res.json({ success: true, entry })
        })
    },    
    create: (req, res) => {
        // TEST USER FOR POSTMAN
        // let id = "5c1827e94a8b2fedd386c7c8"
        // FIND USER BY COOKIE ID
        let id = req.user.id;
        User.findById(id, (err, user) => {
            if (err) res.json({ success: false, err })
            user.entries.push(req.body)
            user.save(err => {
                if (err) res.json({ success: false, err })
                res.redirect('/users/profile')
            })
        })
    },
    // update: Entry.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedEntry) => {
    //     if (err) res.json({ success: false, err })
    //     res.json({ success: true, updatedEntry })
    // }),
    // destroy: Entry.findByIdAndDelete(req.params.id, (err, deletedEntry) => {
    //     if (err) res.json({ success: false, err })
    //     res.json({ success: true, deletedEntry })
    // })
}