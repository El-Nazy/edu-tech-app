import React, { useState, useRef } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaQuoteRight,
  FaLink,
  FaCode,
} from "react-icons/fa";

const MessageInput = () => {
  const [text, setText] = useState(""); // State for textarea content
  const textAreaRef = useRef(null); // Ref to access the textarea

  // Function to apply formatting to the selected text
  const applyFormatToSelection = (prefix, suffix = "") => {
    const textarea = textAreaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // If there is selected text
    if (start !== end) {
      const selectedText = text.substring(start, end);
      const formattedText = `${prefix}${selectedText}${suffix}`;

      // Update the text with the formatted selection
      const newText =
        text.substring(0, start) + formattedText + text.substring(end);
      setText(newText);

      // Restore the cursor position
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start + formattedText.length);
      }, 0);
    }
  };

  return (
    <div className="bg-white p-6 shadow-sm rounded-md mb-6">
      {/* Toolbar */}
      <div className="flex items-center space-x-4 mb-4 border-b pb-2">
        <button
          className="text-gray-700 hover:text-black focus:outline-none"
          onClick={() => applyFormatToSelection("**", "**")} // Bold
        >
          <FaBold />
        </button>
        <button
          className="text-gray-700 hover:text-black focus:outline-none"
          onClick={() => applyFormatToSelection("_", "_")} // Italic
        >
          <FaItalic />
        </button>
        <button
          className="text-gray-700 hover:text-black focus:outline-none"
          onClick={() => applyFormatToSelection("<u>", "</u>")} // Underline
        >
          <FaUnderline />
        </button>
        <button
          className="text-gray-700 hover:text-black focus:outline-none"
          onClick={() => applyFormatToSelection("- ", "")} // Unordered List
        >
          <FaListUl />
        </button>
        <button
          className="text-gray-700 hover:text-black focus:outline-none"
          onClick={() => applyFormatToSelection("1. ", "")} // Ordered List
        >
          <FaListOl />
        </button>
        <button
          className="text-gray-700 hover:text-black focus:outline-none"
          onClick={() => applyFormatToSelection("“", "”")} // Quote
        >
          <FaQuoteRight />
        </button>
        <button
          className="text-gray-700 hover:text-black focus:outline-none"
          onClick={() => applyFormatToSelection("[", "](url)")} // Link
        >
          <FaLink />
        </button>
        <button
          className="text-gray-700 hover:text-black focus:outline-none"
          onClick={() => applyFormatToSelection("<code>", "</code>")} // Code
        >
          <FaCode />
        </button>
      </div>

      {/* Textarea */}
      <textarea
        ref={textAreaRef} // Ref for the textarea
        placeholder="Type in your message here..."
        className="w-full border rounded-md p-4 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
        rows="4"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      {/* Post Button */}
      <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
        Post
      </button>
    </div>
  );
};

export default MessageInput;
