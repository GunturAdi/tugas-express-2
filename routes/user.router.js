const express = require('express');
const User = require('../controllers/user.controller');
const middleware = require('../middleware/middleware')

const router = express.Router();

router.get('/user', User.getUser);
router.post('/register', User.register);
router.get('/userdetail/:id', middleware.verifyToken, User.getDetailUser);
router.delete('/userdelete/:id', User.deleteUser);
router.put('/userupdate/:id', User.updateUser);
router.post('/login', User.login)

module.exports = router;
