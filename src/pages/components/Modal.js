import React from 'react';

const Modal = ({ amount, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black bg-opacity-80 rounded-lg w-94 p-6 md:p-8 overflow-y-auto max-h-[80vh]">
        <button className="absolute top-4 right-4 text-red-600 hover:text-red-800 transition-colors focus:outline-none" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <p className='text-white text-xl font-medium font-sg'>Are you sure you want to buy {amount} carbon credits?</p>
        <div className="flex justify-end space-x-2 mt-4">
          <button
            className="text-red-700 py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-700 hover:bg-green-500 hover:text-black py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
