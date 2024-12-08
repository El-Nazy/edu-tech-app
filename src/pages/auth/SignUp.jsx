import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const handleEmailVerification = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true); // Start loading

    // Form validation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      // Trigger email verification
      const verifyResponse = await fetch(
        "https://edu-tech-backend-lpm4.onrender.com/v1/users/me/send-email-verification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const verifyData = await verifyResponse.json();

      if (!verifyResponse.ok) {
        throw new Error(
          verifyData.message || "Failed to send the verification email."
        );
      }

      setSuccess("Verification email sent. Please check your inbox.");
      navigate("/verification", { state: { email, password } });
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://world.uz/files/1920-Panel1-FeatureHeader-Academy_689867mk.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Create an Account!</h1>
        <p className="text-gray-500 mb-6">Sign up to get started.</p>

        {error && (
          <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
        )}
        {success && (
          <p className="mb-4 text-sm text-green-500 text-center">{success}</p>
        )}

        <form onSubmit={handleEmailVerification}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

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
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 flex items-center justify-center"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "Send Verification Email"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
