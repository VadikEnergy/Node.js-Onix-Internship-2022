const User = require('./User');

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
