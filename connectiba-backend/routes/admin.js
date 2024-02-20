const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')



router.post('/create-room/', adminController.createRoom);

module.exports = router; 