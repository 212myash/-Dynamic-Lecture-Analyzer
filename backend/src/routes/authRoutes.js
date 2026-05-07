const express = require('express');
const {
  signup,
  signin,
  getProfile,
  updateProfile,
  logout
} = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/signin', signin);

// Protected routes
router.get('/profile', authMiddleware, getProfile);
router.put('/profile/update', authMiddleware, updateProfile);
router.post('/logout', authMiddleware, logout);

module.exports = router;
