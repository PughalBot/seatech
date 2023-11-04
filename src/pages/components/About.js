import { motion } from "framer-motion";
import Head from "next/head";

const About = () => {
  return (
    <>
    <Head>
        <meta name="description" content="Crowdento is an Event management company that excels in crafting unforgettable events. Merging local traditions with modern flair, we orchestrate experiences that resonate. Driven by precision and creativity, we're redefining gatherings in Chennai."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        
        <link rel='icon' href='/cc1.png' />
        <title>Kandaraoli | Home</title>
    </Head>
    <motion.section 
      id="about" 
      className="h-fit bg-black flex flex-col pt-16 md:pt-24 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h1 className="font-bs text-5xl pl-4 md:pl-10 text-[#F7FFF7]">About Us</h1>
      <div className="grid grid-cols-1 gap-6 pb-6 p-4 md:pl-10 md:pr-10">
        <p className="text-justify font-jb text-[#B3B3B3] text-xl font-bold">Welcome to RESSILIENCE</p>
        <p className="text-justify font-jb text-[#B3B3B3]">We are the driving force behind coastal resilience and sustainable development in the Mekong Delta. Our mission is to protect the region's rich ecosystems, vital infrastructure, and local livelihoods from the relentless threat of coastal erosion.</p>
      </div>

      <h1 className="font-bs text-5xl pl-4 md:pl-10 text-[#F7FFF7]">Ressilience's Vision</h1>
      <div className="grid grid-cols-1 gap-6 pb-6 p-4 md:pl-10 md:pr-10">
        <p className="text-justify font-jb text-[#B3B3B3] text-xl font-bold">A Resilient Mekong Delta</p>
        <p className="text-justify font-jb text-[#B3B3B3]">Our vision is a Mekong Delta that stands strong against the challenges of climate change and coastal erosion, offering a secure and prosperous future for its people and the environment.</p>
      </div>

      <h1 className="font-bs text-5xl pl-4 md:pl-10 text-[#F7FFF7]">Ressilience's Mission</h1>
      <div className="grid grid-cols-1 gap-6 pb-6 p-4 md:pl-10 md:pr-10">
        <p className="text-justify font-jb text-[#B3B3B3]"><span className="font-bold">Crafting Experiences, Building Memories:</span> Our mission at Crowdento is to harness the power of creativity and precision to design events that resonate, inspire, and leave an indelible mark.</p>
        <p className="text-justify font-jb text-[#B3B3B3]"><span className="font-bold">Where Precision Meets Passion:</span> At Crowdento, our mission is to blend meticulous planning with a passion for creativity, ensuring every event we manage stands out and leaves a lasting impact.</p>
        <p className="text-justify font-jb text-[#B3B3B3]"><span className="font-bold">Beyond Events, We Create Journeys:</span> Our mission is to move beyond traditional event management. With a blend of innovation, expertise, and a keen understanding of our clients' needs, we aim to craft journeys that are unforgettable..</p>
      </div>
      </motion.section>
      </>
  );
};

export default About;
