const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    entrySchema = require('./entry');

require('mongoose-type-email');

const userSchema = new mongoose.Schema({
        name: {
            type: String
            // ,
            // required: true
        },
        email: {
            type: mongoose.SchemaTypes.Email
            // ,
            // required: true
        },
        password: {
            type: String
            // ,
            // required: true
        },
        entries: [entrySchema]
    }, { timestamps: true });


// Hash the users password
userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    
    bcrypt.genSalt(8, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

// 
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;