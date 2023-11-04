import React from 'react';
import Link from 'next/link';
import NavHome from './components/navbar';

export default function Dashboard() {
  return (
    <>
      <NavHome />
      <div className='flex justify-center items-center min-h-screen'>
        <Link href="/buycred">
          <div className='w-40 h-40 bg-gray-700 bg-opacity-75 backdrop-filter rounded-lg backdrop-blur-lg border-2 border-white flex flex-col justify-center items-center hover:cursor-pointer'>
            <img src="/money.png" alt="money" className="mb-4" />
            <p className="text-white text-center text-sm">Buy Credits</p>
          </div>
        </Link>
      </div>
    </>
  );
}
