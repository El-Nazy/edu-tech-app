import React from 'react'
import img from '../assets/1.png'
import img1 from '../assets/2.png'

function Prefer() {
  return (
    <div>
        <span>Community</span>
        <div className="flex flex-col items-center  text-center min-h-screen pt-10">
 
  <h1 className="text-2xl font-bold mb-4">Pick your preferred program</h1>
  
  {/* Description */}
  <span className="text-gray-600 mb-6 px-24">
    Mentorship Program, where growth thrives! Our platform connects mentors and mentees for professional and personal development. Mentors inspire and guide, while mentees learn and grow. Join our community and unlock your potential today!
  </span>

  {/* Images */}
  <div className="flex space-x-4">
    <img src={img} alt="Program 1" className="w-60 h-60 object-cover rounded-md" />
    <img src={img1} alt="Program 2" className="w-60 h-60 object-cover rounded-md" />
  </div>
</div>

    </div>
  )
}

export default Prefer