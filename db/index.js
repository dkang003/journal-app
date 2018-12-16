const
    mongoose = require('mongoose')

mongoose.connect(process.env.MONGOD_URI, { useNewUrlParser: true }, err => {
    console.log(err || "Connected to mLab! (passport-authentication)");
})



module.exports = mongoose;