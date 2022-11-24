const User = require('./model');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9ReyJ1c2VyTmFtZSI6IkdpcmwxIiwiaWF0IjoxNjY5MjA4ODIxLCJleHAiOjE2NjkyMTA2MjF9VIXKFxoo7KUrYghoithAjUK0hW0Zi9VdxYhFSnXwF9F4";

async function findUser(ID) {
    try {
        const user = await User.findById(ID);
            return {
                message: 'User found successfuly',
                details: user,
            };
    } catch (err) {
        return {
            message: 'Please input a valid user ID',
        };
    }

}

async function createUser(json) {
    try {
        const newUser = new User({
            userName: json.userName,
            firstName: json.firstName,
            secondName: json.secondName,
            phoneNumber: json.phoneNumber,
            email: json.email,
            password: json.password,
        });
        await newUser.save();

        return {
            message: 'User created successfully',
            details: newUser,
        };
    }
    catch (err) {
        return {
            message: 'Invalid parameters',
        };
    };
}

async function updateUser(newJson, ID) {
    try {
        const user = await User.findByIdAndUpdate(ID, newJson);
            return {
                message: 'User updated successfully',
                old_details : user,
                updated_details : newJson,
            };
    } catch (err) {
        return {
            message: 'Please input a valid user ID',
        };
    }
   
}

async function deleteUser(ID) {
    try {
        const user = await User.findByIdAndRemove(ID);
            return {
                message: 'User deleted successfully',
                details: user,
            };
    } catch (err) {
        return {
            message: 'Please input a valid user ID',
        };
    }

}

async function accountUser(body) {
        const user = await User.findOne({token: body.token});
        return {
            message: 'Welcome to your account',
            details: user,
        };
}

async function authorizationUser(body) {
    try {
        const user = await User.findOne(body);
        const { userName, password } = user;
        if ((userName && password)) {
            const token = jwt.sign({userName}, JWT_SECRET, { expiresIn: '1800s' });
            user.token = token;
            await user.save();
            return {
                message: 'You is authorized successfully',
                access_token: token,
            };
          }
        } catch (err) {
            return {
                message: 'Please input a valid user data',
            };
        }
}

module.exports = {
    deleteUser,
    updateUser,
    createUser,
    findUser,
    accountUser,
    authorizationUser,
};
