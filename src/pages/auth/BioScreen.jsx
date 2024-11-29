import React from "react";

const BioScreen = () => {
  const generatedBio =
    "As an intermediate Product Designer with a strong focus on Product Design, I am a detail-oriented problem solver who is passionate about creating user-centered designs. With a proven track record of delivering successful product designs, I am committed to creating innovative and intuitive solutions that meet and exceed user expectations. Let's collaborate to create a compelling and personalized user experience that will leave a lasting impression.";

  const additionalBio =
    "I'm John, a passionate Frontend Developer with a knack for creating engaging and responsive user interfaces. My journey in web development started with a love for design, and over the years, I've honed my skills in HTML, CSS, and JavaScript.";

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Progress Indicator */}
        <div className="flex items-center mb-1">
          <button className="text-black text-xl font-bold mr-auto mb-20">
            ←
          </button>
          <div className="flex-grow flex justify-between space-x-2">
            {[1, 2, 3, 4].map((step, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === 3
                    ? "bg-black"
                    : index < 3
                    ? "bg-black"
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Header */}
        <h1 className="text-2xl font-bold mb-2">Tell us a little about yourself</h1>
        <p className="text-gray-500 mb-6">
          We've generated a tentative bio for you, you can modify it or if you're fine with it you can submit.
        </p>

        {/* Generated Bio */}
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <p className="text-gray-700">{generatedBio}</p>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Not sure where to start? Check out this sample.
        </p>

        {/* Additional Sample */}
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-700">{additionalBio}</p>
        </div>
      </div>
    </div>
  );
};

export default BioScreen;
