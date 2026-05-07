const User = require('../models/User');
const { generateToken } = require('../config/jwt');

/**
 * Sign Up Controller
 */
exports.signup = async (req, res) => {
  try {
    const { fullName, email, mobileNumber, password, confirmPassword } = req.body;

    // Validation
    if (!fullName || !email || !mobileNumber || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { mobileNumber }] });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'User with this email or mobile number already exists'
      });
    }

    // Create new user
    const user = await User.create({
      fullName,
      email,
      mobileNumber,
      password
    });

    // Generate token
    const token = generateToken(user._id);

    // Return response
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        profileImage: user.profileImage,
        role: user.role,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error during signup'
    });
  }
};

/**
 * Sign In Controller
 */
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // Find user and select password field
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Compare password
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate token
    const token = generateToken(user._id);

    // Return response
    res.status(200).json({
      success: true,
      message: 'Signed in successfully',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        profileImage: user.profileImage,
        role: user.role,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error during signin'
    });
  }
};

/**
 * Get User Profile
 */
exports.getProfile = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        profileImage: user.profileImage,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching profile'
    });
  }
};

/**
 * Update User Profile
 */
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { fullName, mobileNumber, profileImage } = req.body;

    // Validation
    if (!fullName && !mobileNumber && !profileImage) {
      return res.status(400).json({
        success: false,
        message: 'Please provide at least one field to update'
      });
    }

    // Check if mobile number is unique (if being updated)
    if (mobileNumber) {
      const existingUser = await User.findOne({
        mobileNumber,
        _id: { $ne: userId }
      });

      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'Mobile number already in use'
        });
      }
    }

    // Build update object
    const updateData = {};
    if (fullName) updateData.fullName = fullName;
    if (mobileNumber) updateData.mobileNumber = mobileNumber;
    if (profileImage) updateData.profileImage = profileImage;

    // Update user
    const user = await User.findByIdAndUpdate(
      userId,
      { ...updateData, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        profileImage: user.profileImage,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error updating profile'
    });
  }
};

/**
 * Logout (Frontend handles token removal)
 */
exports.logout = async (req, res) => {
  try {
    // Token removal is handled on frontend
    res.status(200).json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error during logout'
    });
  }
};
