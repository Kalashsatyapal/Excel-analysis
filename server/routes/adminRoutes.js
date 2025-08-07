const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getAdminData } = require('../controllers/adminController');

router.get('/dashboard', auth, getAdminData);

module.exports = router;
