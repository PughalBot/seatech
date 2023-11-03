import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const Hero = () => {
  const text = "Crowdento is an Event management company that excels in crafting unforgettable events. Merging local traditions with modern flair, we orchestrate experiences that resonate. Driven by precision and creativity, we're redefining gatherings in Chennai.";

  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });// Close mobile menu after clicking a link
  };
  
  return (
    <>
    <Head>
        <meta name="description" content="Crowdento is an Event management company that excels in crafting unforgettable events. Merging local traditions with modern flair, we orchestrate experiences that resonate. Driven by precision and creativity, we're redefining gatherings in Chennai."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content="/cc1.png"/>
        <link rel='icon' href='/cc1.png' />
        <title>Crowdento Events</title>
    </Head>
    <motion.section 
      id="hero" 
      className="h-screen bg-white flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 2 }}
    >
      <img src="/fill logo.png" alt="Logo" className="h-auto w-11/12" />
      
      <div className="font-jb w-11/12 tetx-center text-justify md:text-2xl mx-4 my-6 text-black">
        {text.split(" ").map((word, index) => (
          <motion.span 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
          >
            {word + " "}
          </motion.span>
        ))}
      </div>

      <motion.div 
        className="absolute bottom-4 animate-bounce"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
      <img src="/arrow.png" onClick={() => handleScroll("about")} alt="arrow" className="h-10 md:h-14 w-auto" />
      </motion.div>
    </motion.section>
    </>
  );
};

export default Hero;
