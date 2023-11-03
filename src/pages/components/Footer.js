import React from 'react'

export default function Footer() {
  return (
    <div className="grid grid-cols-2 gap-10 flex justify-between pt-4 ">
    <a href="mailto:contact@crowdento.com" target="_blank" className="font-jb text-sm md:text-lg text-[#B3B3B3]">contact@crowdento.com</a>
    <a href="https://www.instagram.com/crowdento" target="_blank" className="font-jb text-sm md:text-lg text-right text-[#B3B3B3]">Instagram</a>
    <a href="tel:+919840457238" target="_blank" className="font-jb text-sm md:text-lg text-[#B3B3B3]">+91 9840457238</a>
    <a href="https://wa.me/919840457238" target="_blank" className="font-jb text-sm md:text-lg text-right text-[#B3B3B3]">Whatsapp</a>
    </div>
  )
}
