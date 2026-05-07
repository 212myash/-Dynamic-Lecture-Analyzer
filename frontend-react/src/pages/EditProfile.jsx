import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function EditProfile() {
  const navigate = useNavigate();
  const { user, updateProfile, getProfile } = useAuth();

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    profileImage: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
        setFormData({
          fullName: profile.fullName || '',
          mobileNumber: profile.mobileNumber || '',
          profileImage: profile.profileImage || ''
        });
        if (profile.profileImage) {
          setImagePreview(profile.profileImage);
        }
      } catch (err) {
        console.error('Failed to load profile:', err);
      }
    };

    fetchProfile();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.trim() && formData.fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (formData.mobileNumber.trim() && !/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          profileImage: 'Image size must be less than 5MB'
        }));
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors((prev) => ({
          ...prev,
          profileImage: 'Please select a valid image file'
        }));
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({
          ...prev,
          profileImage: reader.result
        }));
        setErrors((prev) => ({
          ...prev,
          profileImage: ''
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError('');
    setSuccessMessage('');

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      await updateProfile(
        formData.fullName || user?.fullName,
        formData.mobileNumber || user?.mobileNumber,
        formData.profileImage || user?.profileImage
      );

      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => {
        navigate('/profile');
      }, 1500);
    } catch (error) {
      setGeneralError(error.message || 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Edit Profile</h1>
            <button
              onClick={() => navigate(-1)}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Back
            </button>
          </div>
        </div>

        {generalError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            {generalError}
          </div>
        )}

        {successMessage && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
            {successMessage}
          </div>
        )}

        {/* Edit Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Profile Image
              </label>
              <div className="flex items-center gap-6">
                {/* Image Preview */}
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Profile Preview"
                    className="w-24 h-24 rounded-full object-cover border-2 border-blue-600"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                    <span className="text-3xl text-white font-bold">
                      {user?.fullName?.[0]?.toUpperCase() || 'U'}
                    </span>
                  </div>
                )}

                {/* File Input */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.profileImage && (
                <p className="text-red-500 text-sm mt-1">{errors.profileImage}</p>
              )}
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
                disabled={isLoading}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="10-digit mobile number"
                maxLength="10"
                disabled={isLoading}
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
              )}
            </div>

            {/* Email (Read-only) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (Cannot be changed)
              </label>
              <input
                type="email"
                value={user?.email || ''}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Saving Changes...' : 'Save Changes'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/profile')}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg transition duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
