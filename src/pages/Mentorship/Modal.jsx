import React from "react";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 sm:mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={closeModal}
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
        </div>
        <div className="mb-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
