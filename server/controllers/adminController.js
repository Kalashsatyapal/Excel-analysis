exports.getAdminData = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Unauthorized' });
  }
  res.json({ msg: 'Welcome, admin dashboard!' });
};
