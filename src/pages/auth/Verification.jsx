import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Verification = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = location.state || {}; // Passed from SignUp

  const handleVerification = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    if (!code) {
      setError("Please enter the verification code.");
      setIsLoading(false);
      return;
    }

    try {
      const verifyResponse = await fetch(
        "https://edu-tech-backend-lpm4.onrender.com/api/v1/users/me/verify-email  ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, code }),
        }
      );

      const verifyData = await verifyResponse.json();

      if (!verifyResponse.ok) {
        throw new Error(verifyData.message || "Verification failed.");
      }

      setSuccess("Email verified successfully!");

      // Navigate to dashboard or login after success
      navigate("/dashboard", { state: { email, password } });
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
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
        <h1 className="text-2xl font-bold mb-2">Verify Your Email</h1>
        <p className="text-gray-500 mb-6">
          Enter the verification code sent to your email.
        </p>

        {error && (
          <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
        )}
        {success && (
          <p className="mb-4 text-sm text-green-500 text-center">{success}</p>
        )}

        <form onSubmit={handleVerification}>
          <div className="mb-4">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Verification Code"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
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
              "Verify"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
