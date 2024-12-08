import React from "react";

const Card = ({ title, description, students, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-36 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="mt-3 flex items-center space-x-2">
          {/* Sample avatars */}
          <div className="flex -space-x-2">
            {students.map((student, index) => (
              <img
                key={index}
                src={student.avatar}
                alt="student avatar"
                className="w-6 h-6 rounded-full border border-white"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">{students.length} Students</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
