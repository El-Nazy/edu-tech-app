import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Validate input
    if (!password || !confirmPassword) {
      setError("Both fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://edu-tech-backend-lpm4.onrender.com/api/v1/users/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }), // Send the new password
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.message || "Failed to reset password. Please try again."
        );
      }

      setSuccess("Password reset successfully! You can now log in.");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://world.uz/files/1920-Panel1-FeatureHeader-Academy_689867mk.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Reset Password</h1>
        <p className="text-gray-500 mb-6">
          Enter your new password to reset it.
        </p>

        {error && <p className="mb-4 text-sm text-red-500 text-center">{error}</p>}
        {success && (
          <p className="mb-4 text-sm text-green-500 text-center">{success}</p>
        )}

        <form onSubmit={handleResetPassword}>
          <div className="mb-4 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </button>
          </div>

          <div className="mb-4 relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
              onClick={() =>
                setConfirmPasswordVisible(!confirmPasswordVisible)
              }
            >
              {confirmPasswordVisible ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 bg-black text-white rounded-md ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
