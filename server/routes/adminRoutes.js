const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getAdminData ,getAllUsers,updateUserRole} = require('../controllers/adminController');

router.get('/dashboard', auth, getAdminData);
router.get('/users', auth, getAllUsers);
router.put('/update-role', auth, updateUserRole);
module.exports = router;
