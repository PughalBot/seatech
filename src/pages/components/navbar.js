import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavHome = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu toggle

  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  const router = useRouter();

  return (
    <div className='flex justify-end pt-2'>
    <div className=" font-lol p-2 mx-4 sticky rounded-full top-2 z-10 w-fit bg-white border-black border-2">
      <div className="flex justify-between">
        {/* Desktop navbar items */}
        <ul className={`flex space-x-4 w-full text-lg pl-4 pr-4 md:pl-8 md:pr-8 justify-between md:flex`}>
          <li>
            <button onClick={() => router.push("/")} className="text-black">Logout</button>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default NavHome;
