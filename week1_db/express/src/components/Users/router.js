const { Router } = require('express');
const UserComponent = require('./index');
const UserValid = require('./validation');
const Validation = require('../../config/validationMiddleware');
const ValidationToken = require('../../config/validTokenMiddleware');

const router = Router();

router.get('/user/:userID', UserComponent.findUser);

router.post('/user', Validation(UserValid.validCreateUser), UserComponent.createUser);

router.put('/user/:userID', UserComponent.updateUser);

router.delete('/user/:userID', UserComponent.deleteUser);

router.post('/sign-in', Validation(UserValid.validSignIn), UserComponent.authorizationUser);

router.post('/account', ValidationToken, UserComponent.accountUser);

module.exports = router;
