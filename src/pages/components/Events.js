import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <>
    <Head>
        <meta name="description" content="Crowdento is an Event management company that excels in crafting unforgettable events. Merging local traditions with modern flair, we orchestrate experiences that resonate. Driven by precision and creativity, we're redefining gatherings in Chennai."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        
        <link rel='icon' href='/cc1.png' />
        <title>Crowdento Events</title>
    </Head>
    <motion.section 
      id="services" 
      className="h-fit bg-white flex flex-col pt-16 md:pt-24 justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h1 className="font-bs text-5xl font-medium text-black">Crowdento's Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 pb-6 p-4 py-10 md:pl-10 md:pr-10">
      <Link href="/birthday">
      <div className="flex flex-col items-center transform transition-transform duration-200 hover:scale-110">
        <div className="w-80 h-80 md:w-96 md:h-96 border-2 border-black rounded-2xl flex flex-wrap flex-row items-contain items-center justify-center ">
          <img src="/bday.jpg" alt="Birthday Event" className="objects-contain px-4 py-4"/>
        </div>
        <h2 className="font-jb text-black font-medium cursor-pointer py-2 px-2">Birthday Events</h2>
      </div>
      </Link>
      <Link href="/wedding">
      <div className="flex flex-col items-center transform transition-transform duration-200 hover:scale-110">
        <div className="w-80 h-80 md:w-96 md:h-96 border-2 border-black rounded-2xl flex flex-wrap flex-row items-contain items-center justify-center">
          <img src="/wed.jpg" alt="Wedding Event" className="objects-contain px-4 py-4"/>
        </div>
        <h2 className="font-jb text-black font-medium cursor-pointer py-2 px-2">Wedding Events</h2>
      </div>
      </Link>
      <Link href="/corporate">
      <div className="flex flex-col items-center transform transition-transform duration-200 hover:scale-110">
        <div className="w-80 h-80 md:w-96 md:h-96 border-2 border-black rounded-2xl flex flex-wrap flex-row items-contain items-center  justify-center">
          <img src="/cop.jpg" alt="Corporate Event" className="objects-contain px-4 py-4"/>
        </div>
        <h2 className="font-jb text-black font-medium cursor-pointer py-2 px-2">Corporate Events</h2>
      </div>
      </Link>
      <Link href="/college">
      <div className="flex flex-col items-center transform transition-transform duration-200 hover:scale-110">
        <div className="w-80 h-80 md:w-96 md:h-96 border-2 border-black rounded-2xl flex flex-wrap flex-row items-contain items-center  justify-center">
          <img src="/col.jpg" alt="Farewell & College Event" className="objects-cover px-4 py-4"/>
        </div>
        <h2 className="font-jb text-black font-medium cursor-pointer py-2 px-2">Farewell & College Events</h2>
      </div>
      </Link>
      </div>
      </motion.section>
      </>
  );
};

export default About;
