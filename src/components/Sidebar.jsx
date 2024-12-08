import React, { useState } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Ask Anything");

  const menuItems = [
    { name: "Ask Anything", href: "/question-ask" },
    { name: "Questions for you", href: "/question-you" },
    { name: "Answer requests", href: "/answer-requests" },
    { name: "Drafts", href: "/drafts" },
  ];

  return (
    <aside className="w-1/4 p-6 bg-white border-r">
      <h2 className="font-bold text-lg mb-4">Questions</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={() => setActiveLink(item.name)}
              className={`block ${
                activeLink === item.name
                  ? "text-red-500 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
