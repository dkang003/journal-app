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
            user.entries.unshift(req.body)
            user.save(err => {
                if (err) res.json({ success: false, err })
                res.redirect('/users/profile')
            })
        })
    },
    update: (req, res) => {
        // TEST USER FOR POSTMAN
        // let userId = "5c1827e94a8b2fedd386c7c8"
        // let entryId = "5c1ab17f37cf103bb75291a4"
        // FIND USER BY COOKIE ID
        User.findById(req.user.id, (err, user) => {
            if (err) res.json({ success: false, err })
            let entry = user.entries.id(req.params.id)
            if (!entry) res.json({ success: false, message: "Entry does not exist" })
            Object.assign(entry, req.body);
            user.save(err => {
                if (err) res.json({ success: false, err })
                res.redirect('/users/profile')
            })
        })
    },
    destroy: (req, res) => {
        // TEST USER FOR POSTMAN
        // let userId = "5c1827e94a8b2fedd386c7c8"
        // let entryId = "5c1ab17f37cf103bb75291a4"
        // FIND USER BY COOKIE ID
        let userId = req.user.id
        let entryId = req.params.id
        User.findById(userId, (err, user) => {
            if (err) res.json({ success: false, err })
            let entry = user.entries.id(entryId)
            let newArr = user.entries.filter(entries => entries !== entry)
            user.entries = newArr
            user.save(err => {
                if (err) res.json({ success: false, err })
                // res.json({ success: true, user })
                res.redirect('/users/profile')
            })
        })
    },
    edit: (req, res) => {
        User.findById(req.user.id, (err, user) => {
            if (err) res.json({ success: false, err });

            let entry = user.entries.id(req.params.id);
            console.log(entry.date)
            moment = require('moment')
            if (!entry) throw new Error("Entry does not exist.");
            res.render('editEntry', entry)
        })
    }
}