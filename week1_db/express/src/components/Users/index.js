const UserService = require('./service');

async function findUser(req, res) {
    try {
        const user = await UserService.findUser(req.params.userID);

        return res.status(200).json({
            data: user,
        });

    } catch (err) {
        return res.status(400).json({
            error: 'User not found',
            details: 'You have entered an incorrect ID',
            solution: 'Please enter a valid ID',
            });
    }
}

async function createUser(req, res) {
    try {
        const user = await UserService.createUser(req.body);

        return res.status(201).json({
            data: user,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            details: null,
        });
    }
}
async function updateUser(req, res) {
    try {
        const user = await UserService.updateUser(req.body, req.params.userID);

        return res.status(201).json({
            data: user,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            details: null,
        });
    }
}

async function deleteUser(req, res) {
    try {
        const user = await UserService.deleteUser(req.params.userID);

        return res.status(201).json({
            data: user,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            details: null,
        });
    }
}

module.exports = {
    findUser,
    createUser,
    updateUser,
    deleteUser,
};
