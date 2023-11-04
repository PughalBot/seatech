import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
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
      id="contact" 
      className="h-fit bg-black pt-16  md:pt-24 flex flex-col items-center  space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 1 }}
    >
      <h1 className="font-bs text-5xl text-[#f7f7f7]">Contact Us</h1>
      <p className="font-jb text-center text-[#b3b3b3] w-11/12 lg:w-2/5">If you have any questions or would like more information about our services, please feel free to contact us. We're here to help!</p>
      
      {/* <div className="grid grid-cols-4 gap-4 md:gap-10 md:pt-10 pb-6">
        <Link href="https://www.instagram.com/crowdento" target="_blank">
        <div className="flex flex-col items-center">
          <img src="/insta.png" alt="Phone" className="w-6 md:w-10 h-auto" />
        </div>
        </Link>

        <Link href="tel:+919840457238" target="_blank">
        <div className="flex flex-col items-center ">
          <img src="/phone.png" alt="Phone" className=" w-6 md:w-10 h-auto" />
        </div>
        </Link>

        <Link href="mailto:contact@crowdento.com" target="_blank">
        <div className="flex flex-col items-center">
          <img src="/email.png" alt="Phone" className="w-6 md:w-10 h-auto" />
        </div>
        </Link>
      <Link href="https://wa.me/919840457238" target="_blank">
        <div className="flex flex-col items-center">
          <img src="/wap.png" alt="Phone" className="w-6 md:w-10 h-auto" />
        </div>
        </Link>
      </div> */}
      
      
      
      <div className="w-full bg-white px-2 py-2 items-center flex justify-center">
        <h1 className="text-black font-medium">{`© ${new Date().getFullYear()} Ressilience. All Rights Reserved.`}</h1>
      </div>
    </motion.section>
    </>
  );
};

export default Contact;
