import React, { useState, useRef, useEffect } from "react";

const Verification = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
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
    setOtp(["", "", "", "", ""]); // Clear the OTP inputs
  };

  const handleSubmit = () => {
    alert(`Entered OTP: ${otp.join("")}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Verification</h1>
        <p className="text-center text-gray-500 mb-6">
          Kindly input the code sent to <br />
          <span className="font-medium">ak********ddddsya@gmail.com</span>
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
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Verification;
