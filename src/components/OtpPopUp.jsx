import React from 'react';

const OtpPopUp = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-white flex items-center justify-center z-50 ${isOpen ? 'visible' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
        <input
          type="text"
          placeholder="OTP"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          defaultValue="1234"
        />
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OtpPopUp;
