const { Router } = require('express');
const UserComponent = require('./index');

const router = Router();

router.get('/:userID', UserComponent.findUser);

router.post('/', UserComponent.createUser);

router.put('/:userID', UserComponent.updateUser);

router.delete('/:userID', UserComponent.deleteUser);

module.exports = router;
