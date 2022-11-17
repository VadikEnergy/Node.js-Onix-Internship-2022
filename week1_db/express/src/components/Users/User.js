const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type : String,
        require: true,
        min : 3,
        max : 30,
        unique : true
    },
    firstName: {
        type : String,
        require: true,
        min : 3,
        max : 30,
        unique : true
    },
    secondName: {
        type : String,
        require: true,
        min : 3,
        max : 30,
        unique : true
    },
    phoneNumber: {
        type : Number,
        require: true,
        min : 10,
        unique : true
    },
    email: {
        type : String,
        require: true,
        max : 30,
        unique : true
    },
    password: {
        type : String,
        require: true,
        min : 8
    }
});

module.exports = mongoose.model('User', UserSchema);
