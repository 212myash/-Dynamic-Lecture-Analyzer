import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Profile() {
  const navigate = useNavigate();
  const { user, logout, getProfile } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
        setProfileData(profile);
      } catch (err) {
        setError('Failed to load profile');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const displayUser = profileData || user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
            <button
              onClick={() => navigate(-1)}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Back
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            {displayUser?.profileImage ? (
              <img
                src={displayUser.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                <span className="text-5xl text-white font-bold">
                  {displayUser?.fullName?.[0]?.toUpperCase() || 'U'}
                </span>
              </div>
            )}
          </div>

          {/* Profile Details */}
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <p className="text-lg text-gray-800 font-semibold">
                {displayUser?.fullName || 'N/A'}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <p className="text-lg text-gray-800 break-all">
                {displayUser?.email || 'N/A'}
              </p>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Mobile Number
              </label>
              <p className="text-lg text-gray-800">
                {displayUser?.mobileNumber || 'N/A'}
              </p>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Role
              </label>
              <p className="text-lg text-gray-800 capitalize">
                {displayUser?.role || 'User'}
              </p>
            </div>

            {/* Account Created */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Account Created
              </label>
              <p className="text-lg text-gray-800">
                {displayUser?.createdAt
                  ? new Date(displayUser.createdAt).toLocaleDateString()
                  : 'N/A'}
              </p>
            </div>

            {/* Last Updated */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Last Updated
              </label>
              <p className="text-lg text-gray-800">
                {displayUser?.updatedAt
                  ? new Date(displayUser.updatedAt).toLocaleDateString()
                  : 'N/A'}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <Link
              to="/edit-profile"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 text-center"
            >
              Edit Profile
            </Link>
            <button
              onClick={handleLogout}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
