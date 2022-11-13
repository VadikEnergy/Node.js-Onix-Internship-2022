const UserService = require('./service');

async function findAll(req, res) {
    try {
        const users = await UserService.findAll();

        return res.status(200).json({
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function findUser(req, res) {
    try {
        const user = await UserService.findUser(req.params.userID);

        const userid = Number.parseInt(req.params.userID, 10);

        if (typeof userid !== 'number' || Number.isNaN(userid)) {
            return res.status(400).json({
                error: 'Params error',
                details: 'User ID is not a number',
            });
        }

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function createUser(req, res) {
    try {
        const user = await UserService.createUser(req.body);

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function updateUser(req, res) {
    try {
        const user = await UserService.updateUser(req.body, req.params.userID);

        const userid = Number.parseInt(req.params.userID, 10);

        if (typeof userid !== 'number' || Number.isNaN(userid)) {
            return res.status(400).json({
                error: 'Params error',
                details: 'User ID is not a number',
            });
        }

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function deleteUser(req, res) {
    try {
        const user = await UserService.deleteUser(req.params.userID);

        const userid = Number.parseInt(req.params.userID, 10);

        if (typeof userid !== 'number' || Number.isNaN(userid)) {
            return res.status(400).json({
                error: 'Params error',
                details: 'User ID is not a number',
            });
        }

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

module.exports = {
    findAll,
    findUser,
    createUser,
    updateUser,
    deleteUser,

};
