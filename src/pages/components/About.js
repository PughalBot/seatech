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
      <h1 className="font-bs text-5xl pl-4 md:pl-10 text-[#F7FFF7]">About Us - Nurturing Coastal Vitality</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 p-4 md:pl-10 md:pr-10">
        <p className="text-justify font-jb text-[#B3B3B3]">🌊 Welcome to our world of coastal resilience and environmental stewardship! We're more than just a project; we're a passionate community of individuals and organizations dedicated to safeguarding the pristine beauty of the Mekong Delta in Vietnam.</p>
        <p className="text-justify font-jb text-[#B3B3B3]">🌱 Our journey begins with a deep commitment to preserving coastal ecosystems and empowering local communities. Our story is one of collaboration, innovation, and the unwavering belief that together, we can create positive change for both the environment and the people who call this delta home.</p>
        <p className="text-justify font-jb text-[#B3B3B3]">🌏 At our core, we are advocates for global responsibility, taking the challenges posed by rising sea levels and human activities head-on. Our vision is a world where coastlines flourish, where carbon footprints are offset, and where corporate responsibility is more than just a buzzword—it's a way of life.</p>
        <p className="text-justify font-jb text-[#B3B3B3]">🏡 But, most importantly, we are champions of local vitality. Our work is guided by the belief that resilient coastal communities lead to a flourishing ecosystem. We're here to empower, protect, and nurture the very heart of the Mekong Delta</p>
        <p className="text-justify font-jb text-[#B3B3B3]">Join us in this remarkable journey towards a sustainable, vibrant future. Together, we'll make waves of change, one coastline at a time.</p>
      </div>

      <h1 className="font-bs text-5xl pl-4 md:pl-10 text-[#F7FFF7]">Ressilience's Vision - Illuminating a Brighter Shoreline</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 p-4 md:pl-10 md:pr-10">
      <p className="text-justify font-jb text-[#B3B3B3]">🌟 In our vision, the Mekong Delta emerges as a symbol of resilience, where coastal ecosystems stand as guardians of natural beauty and biodiversity. Picture a vibrant and thriving delta, where each sunrise paints a promise of hope and sustainability along the coastline.</p>
        <p className="text-justify font-jb text-[#B3B3B3]">🌏 We aspire to create a world where sustainability knows no bounds, where industries, local communities, and global leaders unite in a shared commitment to safeguard our coastal heritage. This vision extends far beyond the horizon, inspiring regions worldwide to embrace environmental stewardship as an essential part of their identity.</p>
        <p className="text-justify font-jb text-[#B3B3B3]">🌱 Ultimately, we envision not just a project but a movement, an everlasting wave of change that empowers communities, nurtures the earth, and illuminates a brighter shoreline for generations to come.</p>
      </div>

      <h1 className="font-bs text-5xl pl-4 md:pl-10 text-[#F7FFF7]">Ressilience's Mission - Sustaining Coastal Reverie</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 p-4 md:pl-10 md:pr-10">
        <p className="text-justify font-jb text-[#B3B3B3]">🌊 Our mission is to act as stewards of the enchanting Mekong Delta, protecting its coastal reverie and fostering resilient ecosystems. We are dedicated to combating coastal erosion, guided by the belief that safeguarding this natural treasure is a shared responsibility.</p>
        <p className="text-justify font-jb text-[#B3B3B3]">🌏 We aim to bridge the realms of corporate responsibility and environmental preservation, inviting sponsors to embark on a transformative journey. Together, we are committed to balancing progress and preservation, making a lasting impact that ripples far beyond the shoreline.</p>
        <p className="text-justify font-jb text-[#B3B3B3]">🌱 Our mission unfolds as an epic narrative, where local communities are empowered, nature thrives, and the heart of the Mekong Delta beats with sustainable vitality. We aspire to etch a legacy of coastal resilience and environmental harmony, redefining the future of this magnificent delta and inspiring a world in harmony with nature.</p>      </div>
      </motion.section>
      </>
  );
};

export default About;
