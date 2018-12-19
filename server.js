require('dotenv').config();

const
    express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    methodOverride = require('method-override'),
    ejs = require('ejs'),
    ejsLayouts = require('express-ejs-layouts'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    session = require('express-session'),
    MongoDBStore = require('connect-mongodb-session')(session),
    store = new MongoDBStore({
        uri: process.env.MONGOD_URI,
        collection: 'sessions'
    }),
    passportConfig = require('./services/auth'),
    flash = require('connect-flash'),
    usersRouter = require('./routers/users.js'),
    entriesRouter = require('./routers/entries'),
    PORT = process.env.PORT || 3000;


// Connect to DB
require('./db');

// Define and Use Session
// 
app.use(session({
    secret: 'Iamyourfathaaa',
    cookie: { maxAge: 999999999 },
    resave: true,
    saveUninitialized: false,
    store
}));

// Hook up Passport
// 
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    app.locals.currentUser = req.user;
    app.locals.loggedIn = !!req.user;
    next();
})

// Middleware
// 
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(flash());
app.use(express.json());
app.use(methodOverride('_method'));

// EJS Configuration
// 
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.get('/', (req, res) => {
    res.render('index');
});

// Router
app.use('/users', usersRouter);
app.use('/entries', entriesRouter); // put isLoggedIn here


function isLoggedIn(req, res, next) {
    // isAuthenticted checks the cookie
    if (req.isAuthenticated()) return next();
    // if not authenticated, redirect to login view
    res.redirect('/users/login');
}

app.listen(PORT, (err) => {
    console.log(err || `Listening on port ${PORT}`);
})