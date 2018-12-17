const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs')

require('mongoose-type-email');

const entrySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body:  {
        type: String,
        required: true
    },
}, { timestamps: true });

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true
        },
        password: {
            type: String,
            required: true
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
const Entry = mongoose.model('Entry', entrySchema);

module.exports = { User, Entry };