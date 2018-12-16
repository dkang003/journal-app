// authentication controller
const
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models/user');


// create session and cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});


// Local Signup Action
passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    User.findOne({ email }, (err, user) => {
        if (err) return done(err);
        // if the user exists, return false because can't create an existing user
        if (user) return done(null, false);
        // if no existing user is found, create the new user
        User.create(req.body, (err, newUser) => {
            if (err) return console.log(err);
            return done(null, newUser);
        });
    });
}));

// Local Login Action
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    User.findOne({ email }, (err, user) => {
        if (err) return done(err);
        // if no user is found, or if the user is found but password is invalid, return false
        if (!user || !user.validPassword(password)) return done(null, false);
        // return the user if user exists and password is valid
        return done(null, user);
    });
}));



module.exports = passport;