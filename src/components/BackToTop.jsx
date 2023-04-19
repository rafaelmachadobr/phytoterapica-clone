import React from "react";
import { FiArrowUp } from "react-icons/fi";

function BackToTop() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      className="fixed bottom-2 right-2 bg-gray-400 w-12 h-12 flex justify-center items-center rounded-full shadow-lg transform m-6"
    >
      <FiArrowUp className="w-6 h-6 text-white" />
    </button>
  );
}

export default BackToTop;
