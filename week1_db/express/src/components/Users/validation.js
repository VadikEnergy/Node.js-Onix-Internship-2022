const Joi = require('joi');

const createUser = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    firstName: Joi.string().min(3).max(30).required(),
    secondName: Joi.string().min(3).max(30).required(),
    phoneNumber: Joi.number().min(10).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr', 'de', 'it', 'ua', 'ru'] } }).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/).required(),

});

const authorizationUser = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/).required(),
})

module.exports = {
    validCreateUser: createUser,
    validSignIn: authorizationUser,
};