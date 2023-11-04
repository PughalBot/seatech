import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function BuyCred() {
  // State to store the credit needed
  const [credit, setCredit] = useState('');

  // Function to handle changes in the credit input
  const handleCreditChange = (event) => {
    // Update the credit state with the new value
    setCredit(event.target.value);
  };

  // Function to calculate the payment amount
  const calculateTotal = () => {
    // Multiply the credit by 40
    return Number(credit) * 40;
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
                onClick={() => router.push("/sucess")}
              >
                Pay ${credit ? calculateTotal() : '0'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
