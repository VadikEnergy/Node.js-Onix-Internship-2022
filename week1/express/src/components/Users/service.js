/**
*   ! Const can be left blank and fill in any user information in JSON
*  @param {JSON}
* */

// * Example list of users
const data = [
    {
        userName: 'Girl0',
        firstName: 'Tania',
        secondName: 'Riley',
        phoneNumber: '38094378260',
        email: 'tania20@gmail.com',
        password: '4rp4mBZhCnrtxT',
    },
    {
        userName: 'Girl1',
        firstName: 'Erica',
        secondName: 'Mendoza',
        phoneNumber: '38094378261',
        email: 'erica21@gmail.com',
        password: '2EZrqCTjutUPuv',
    },
];

function findAll() {
    return data;
}

/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */
function findUser(ID) {
    if (ID >= 0 && ID < data.length) {
        return data.at(ID);
    }

    return {
        message: 'User Not Found',
    };
}

function createUser(json) {
    data.push(json);

    return {
        message: 'New User Created',
    };
}

function updateUser(newJson, ID) {
    data[ID] = newJson;

    return {
        message: 'Updated',
    };
}

function deleteUser(ID) {
    if (ID > -1) {
        data.splice(ID, 1);
    }

    return {
        message: 'Deleted',
    };
}

module.exports = {
    deleteUser,
    updateUser,
    createUser,
    findUser,
    findAll,
};
