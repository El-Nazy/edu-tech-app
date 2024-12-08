import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Verification = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state for the button
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract user details from location.state
  const { email, password } = location.state || {};

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1); // Allow only the last character entered
    setOtp(updatedOtp);

    // Move to next input if available
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus(); // Move focus to the previous input
    }
  };

  const resendCode = async () => {
    setTimer(60);
    setOtp(["", "", "", "", ""]);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://edu-tech-backend-lpm4.onrender.com/v1/users/me/send-email-verification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to resend verification code.");
      }

      setSuccess("A new verification code has been sent.");
    } catch (err) {
      setError(err.message || "Failed to resend verification code.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (otp.includes("")) {
      setError("Please fill all the OTP fields.");
      return;
    }

    setIsLoading(true); // Start loading
    setError("");
    setSuccess("");

    try {
      // Step 1: Verify the OTP
      const verifyResponse = await fetch(
        "https://edu-tech-backend-lpm4.onrender.com/v1/users/me/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp: otp.join("") }),
        }
      );

      if (!verifyResponse.ok) {
        const verifyData = await verifyResponse.json();
        throw new Error(verifyData.message || "Verification failed.");
      }

      // Step 2: Perform the signup
      const signupResponse = await fetch(
        "https://edu-tech-backend-lpm4.onrender.com/api/v1/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!signupResponse.ok) {
        const signupData = await signupResponse.json();
        throw new Error(signupData.message || "Signup failed.");
      }

      setSuccess("Email verified and account created successfully! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000); // Redirect after success
    } catch (err) {
      setError(err.message || "Verification failed. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://world.uz/files/1920-Panel1-FeatureHeader-Academy_689867mk.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content container */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Verification</h1>
        <p className="text-center text-gray-500 mb-6">
          Kindly input the code sent to <br />
          <span className="font-medium">{email}</span>
        </p>

        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              value={value}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <div className="text-center mb-4 text-gray-500">
          {timer > 0 ? (
            <span>Resend code in {timer}s</span>
          ) : (
            <button
              onClick={resendCode}
              className="text-indigo-500 hover:underline"
            >
              Resend
            </button>
          )}
        </div>

        <button
          onClick={handleOtpSubmit}
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
            "Confirm"
          )}
        </button>
      </div>
    </div>
  );
};

export default Verification;
