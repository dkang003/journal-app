require('dotenv').config();

const
    express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    methodOverride = require('method-override'),
    ejsLayouts = require('express-ejs-layouts'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    // passportConfig = require('./services/auth'),
    // MongoDBStore = require('connect-mongodb-session')(session),
    flash = require('connect-flash'),
    PORT = process.env.PORT || 3000;


// Connect to DB
require('./db');



app.listen(PORT, (err) => {
    console.log(err || `Listening on port ${PORT}`);
})