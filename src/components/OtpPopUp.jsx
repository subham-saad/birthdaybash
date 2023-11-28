// import React from 'react';

// const OtpPopUp = ({ isOpen, onClose }) => {
//   return (
//     <div className={`fixed inset-0 bg-white flex items-center justify-center z-50 ${isOpen ? 'visible' : 'hidden'}`}>
//       <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
//         <input
//           type="text"
//           placeholder="OTP"
//           className="w-full p-2 border border-gray-300 rounded-md mb-4"
//           defaultValue="1234"
//         />
//         <button
//           onClick={onClose}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OtpPopUp;
import React from "react";

export default function OtpPopUp({onClose, onOpen}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Welcome back
        </h1>
        <p className="text-center text-gray-700 mb-5">Sign in</p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="email@example.com"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="********"
          />
        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}