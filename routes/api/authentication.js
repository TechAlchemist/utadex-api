const express = require('express');
const router = express.Router();
const authenticationController = require('../../controllers/authentication');

router.post('/login', authenticationController.login);

module.exports = router;