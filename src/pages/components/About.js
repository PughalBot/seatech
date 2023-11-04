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
        <p className="text-justify font-jb text-[#B3B3B3]">Founded in the heart of Chennai, Crowdento has emerged as a leading name in event management, revered for its impeccable blend of creativity and precision. The name "Crowdento" is derived from the art of orchestrating grand events ('crowd') with unmatched expertise and meticulous planning ('-ento').</p>
        <p className="text-justify font-jb text-[#B3B3B3]">Our strength lies in understanding our client's vision and transforming it into reality. With a dedicated team of professionals spanning various domains—from venue selection, decor, and culinary experts to entertainment specialists—we ensure every detail is perfectly aligned with the event's objectives.</p>
        <p className="text-justify font-jb text-[#B3B3B3]">Chennai, with its rich tapestry of culture, modernity, and tradition, offers a unique backdrop for events. Crowdento leverages this, merging local traditions with contemporary trends, ensuring every event stands out and resonates with its audience.  Over the years, our commitment to excellence and a keen understanding of the evolving event landscape has earned us the trust and loyalty of our clients. At Crowdento, we don't just plan events; we craft memories.</p>
      </div>

      <h1 className="font-bs text-5xl pl-4 md:pl-10 text-[#F7FFF7]">Kandaraoli's Vision</h1>
      <div className="grid grid-cols-1 gap-6 pb-6 p-4 md:pl-10 md:pr-10">
        <p className="text-justify font-jb text-[#B3B3B3]"><span className="font-bold">Creating Tomorrow's Gatherings Today:</span> At Crowdento, we envision a world where every event is more than just a gathering—it's an experience, a memory, and a moment that lasts a lifetime.</p>
        <p className="text-justify font-jb text-[#B3B3B3]"><span className="font-bold">Crafting Unforgettable Moments:</span> Our vision is to redefine the event experience, making every occasion not just memorable, but transformative.</p>
        <p className="text-justify font-jb text-[#B3B3B3]"><span className="font-bold">Bringing Dreams to Life:</span>  At Crowdento, we believe in the power of an event to inspire, to bring together, and to create lasting impressions. Our vision is to turn every dream into a reality, one event at a time.</p>
      </div>

      <h1 className="font-bs text-5xl pl-4 md:pl-10 text-[#F7FFF7]">Kandaraoli's Mission</h1>
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
