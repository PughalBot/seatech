import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const Success = () => {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 150);  // 500 ms interval for blinking

    return () => clearInterval(intervalId);  // Clear interval on component unmount
  }, []);

  const textAppearance = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: .15 } }
  };

  return (
    <>
      <Head>
        <meta name="description" content="TEDxSriSairamEngineeringCollege is a local manifestation of the TEDx movement, driven by a passionate and dynamic team of students, faculty members, and staff at Sri Sairam Engineering College. Our mission is to amplify the voice of innovative thinkers and creative minds within our community. We believe that ideas have the power to shape the world, and our event serves as a platform for these ideas to flourish."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content="/x.png"/>
        <link rel='icon' href='/x.png' />
        <title>Booking Confirm</title>
      </Head>
      <motion.section 
        initial="initial"
        animate="animate"
        className="h-screen bg-white flex flex-col pt-16 md:pt-24 justify-center items-center"
      >
        <motion.h1
          className="font-hj text-5xl md:text-6xl font-medium text-black"
          
          style={{ opacity: isBlinking ? 1 : 0 }}
        >
          thank you !!
        </motion.h1>
        <motion.p
          className="font-js text-[#db1068] text-xs md:text-xl text-center w-11/12 md:w-4/6 pt-2 pb-4"
          {...textAppearance}
        >
          Your booking has been confirmed. Further details will be sent to you through mail.
        </motion.p>
        <motion.div {...textAppearance}>
          <Link href="/dashboard">
            <button className="px-4 py-2 bg-[#db1068] text-center rounded-full font-bold text-lg text-white font-sg">
              Go to Home
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Success;