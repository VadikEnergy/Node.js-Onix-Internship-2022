const mongoose = require('mongoose');

module.exports = {
        init(_app) {
        mongoose.connect('mongodb://localhost:27017/users', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                })
                .then(() => console.log("Database connected!"))
                .catch(err => console.log(err));
        },
}