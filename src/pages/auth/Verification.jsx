import React, { useState, useRef, useEffect } from "react";

const Verification = ({ email }) => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1); // Only allow one character
    setOtp(updatedOtp);

    // Move to next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const resendCode = () => {
    setTimer(60);
    setOtp(["", "", "", "", ""]); 
    setError(""); 
    setSuccess("A new code has been sent to your email."); 
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setSuccess(""); 

    if (otp.includes("")) {
      setError("Please fill all the OTP fields.");
      return;
    }

    try {
      // API request to verify OTP
      const response = await fetch(
        "https://rabbit-honest-ibex.ngrok-free.app/api/users/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp: otp.join("") }), 
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "OTP verification failed.");
      }

      setSuccess("OTP verified successfully! Welcome aboard.");
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
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

        {/* Error or success message */}
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
          className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Verification;
