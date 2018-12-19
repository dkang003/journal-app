const
    express = require('express'),
    usersRouter = new express.Router(),
    passport = require('passport'),
    User = require('../models/user');


// delete a user
usersRouter.delete('/profile', isLoggedIn, (req, res) => {
    User.findByIdAndDelete(req.user.id, (err, deletedUser) => {
        if (err) res.json({ success: false, err })
        res.render('index')
    })
});

// render login view
usersRouter.get('/login', (req, res) => {
    res.render('login')
});

// login route
usersRouter.post('/login', passport.authenticate('local-login', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/login'
}));

// render signup view
usersRouter.get('/signup', (req, res) => {
    res.render('signup');
});

// signup route
usersRouter.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/signup'
}));

// require login to view profile
usersRouter.get('/profile', isLoggedIn, ({ user }, res) => {
    res.render('profile', { user });
});

// route to update users password
usersRouter.patch('/profile', isLoggedIn, (req, res) => {
    if (!req.body.password) delete req.body.password;
    // merge req.body into req.user object
    Object.assign(req.user, req.body);
    req.user.save((err, updatedUser) => {
        if (err) console.log(err);
        res.redirect('/users/profile');
    });
});


// Edit Route using method override
usersRouter.get('/profile/edit', isLoggedIn, (req, res) => {
    res.render('editProfile');
});

// Logout Route
usersRouter.get('/logout', (req, res) => {
    // destroys current session and sends back to landing page
    req.logout(); 
    res.redirect('/');
});

// check if the user is logged in
function isLoggedIn(req, res, next) {
    // isAuthenticted checks the cookie
    if (req.isAuthenticated()) return next();
    // if not authenticated, redirect to login view
    res.redirect('/users/login');
}
 
module.exports = usersRouter;