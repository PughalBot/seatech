import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import Modal from './components/Modal'; // Replace with your actual path to FilmModal component

export default function BuyCred() {
  const [credit, setCredit] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleCreditChange = (event) => {
    setCredit(event.target.value);
  };

  const calculateTotal = () => {
    return Number(credit) * 40;
  };

  const handleOpenModal = () => {
    // Check if credit is a number and greater than 0
    if (!isNaN(credit) && Number(credit) > 0) {
      setIsModalOpen(true);
    } else {
      alert('Please enter a valid credit amount.');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Function to close the modal
  };

  const handleConfirmModal = () => {
    // Here you can handle the confirmation action, such as processing the payment
    // For now, we'll just close the modal and route to success page
    setIsModalOpen(false);
    router.push("/success"); // This should be the correct route
  };

  const router = useRouter();
  return (
    <div className='bg-white h-screen w-screen'>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='w-fit p-4 bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70 border border-gray-100'>
          <form className="w-fit max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-white md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                  Company Name:
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value="Industry 1"
                  disabled
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-2">
              <div className="md:w-1/3">
                <label className="block text-white md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                  Credit Needed: 
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="number"
                  placeholder="Max 20000"
                  value={credit}
                  onChange={handleCreditChange}
                  max="20000"
                />
              </div>
              
            </div>
            <div className="md:flex md:justify-end mb-6">
              <span className="text-sm text-gray-400">
                *Max 20000
              </span>
            </div>
            <div className="md:flex md:justify-end">
            <Button
                variant="contained"
                type="button"
                className="shadow focus:shadow-outline bg-black hover:bg-white hover:text-black focus:outline-none text-white font-bold py-2 px-4 rounded"
                onClick={handleOpenModal} // Open modal on button click
              >
                Pay ${credit ? calculateTotal() : '0'}
              </Button>
            </div>
          </form>
        </div>
      </div>
      {/* Conditional rendering of the FilmModal */}
      {isModalOpen && (
        <Modal
          amount={credit}
          onClose={handleCloseModal}
          onConfirm={handleConfirmModal}
        />
      )}
    </div>
  );
}
