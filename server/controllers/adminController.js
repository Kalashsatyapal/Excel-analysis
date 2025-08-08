
exports.getAdminData = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Unauthorized' });
  }
  res.json({ msg: 'Welcome, admin dashboard!' });
};
const User = require('../models/User'); // Ensure User model is imported

// Get all users
exports.getAllUsers = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Unauthorized' });
  const users = await User.find({}, '-password'); // exclude password
  res.json(users);
};

// Update user role
exports.updateUserRole = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Unauthorized' });

  const { userId, newRole } = req.body;
  if (!['user', 'admin'].includes(newRole)) {
    return res.status(400).json({ msg: 'Invalid role' });
  }

  await User.findByIdAndUpdate(userId, { role: newRole });
  res.json({ msg: 'User role updated' });
};
