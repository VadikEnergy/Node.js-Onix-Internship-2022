const mongoose = require('mongoose');
const User = require('../../models/User');

mongoose.connect('mongodb://localhost:27017/users', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        .then(() => console.log("Database connected!"))
        .catch(err => console.log(err));

/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */

function findUser(ID) {
    const user = User.findById(ID);
    return user;
}

function createUser(json) {
    const newUser = new User({
        userName: json.userName,
		firstName: json.firstName,
		secondName: json.secondName,
		phoneNumber: json.phoneNumber,
		email: json.email,
		password: json.password,
    });
    newUser.save().then(()=> console.log('User saved successfully'));

    return {
        message: 'User created successfully',
    };
}

function updateUser(newJson, ID) {
    User.findByIdAndUpdate(ID, newJson, {new: true, upsert: true}, function(err, result){
        if(err){
            console.log(err)
        } else{
            console.log(result)
        }
    });

    return {
        message: 'User updated successfully',
    };
}


function deleteUser(ID) {
    User.findByIdAndRemove(ID, function(err, result){
        if(err){
            console.log(err);
        } else{
            console.log(result)
        }
    });

    return {
        message: 'User deleted successfully',
    };
}

module.exports = {
    deleteUser,
    updateUser,
    createUser,
    findUser,
};
