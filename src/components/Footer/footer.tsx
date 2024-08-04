"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaCookieBite } from 'react-icons/fa';

const Footer: React.FC = () => {
  useEffect(() => {
    // Using gsap.to() instead of gsap.from() to ensure the initial state is visible
    gsap.to('.footer-content', {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: 0.2
    });
  }, []);

  const footerLinks = [
    {
      title: 'PRODUCT',
      links: ["Ecommerce store",'Blog', "AI/Ml","Wobble Ai", "Wobble Chat" ]
    },
    {
      title: 'ABOUT',
      links: ['About us', ' Contact us',]
    },
    {
      title: 'PARTNERS',
      links: ['Redmagic Studio','Epidemic Sound', ]
    },
    {
      title: 'OTHER',
      links: ['Update Hub', 'Privacy Hub ', 'Cookie',]
    }
  ];

  return (
    <div className="bg-[#F1F0EB] text-black p-10">
      <div className="footer-content flex flex-col md:flex-row justify-between items-start opacity-0">
        <div className="mb-8 text-black md:mb-0">
          <h2 className="font-bold font-neopixelregular text-black text-5xl mb-4">SpliXTech</h2>
          {/* <p>Select language: English (US)</p> */}
        </div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <motion.h3 className="font-semibold text-sm uppercase mb-3"
                       whileHover={{ scale: 1.1 }}
                       transition={{ type: 'spring', stiffness: 300 }}>
              {section.title}
            </motion.h3>
            <ul>
              {section.links.map((link) => (
                <motion.li key={link}
                           whileHover={{ translateX: 10 }}
                           transition={{ type: 'spring', stiffness: 300 }}
                           className="mb-1 cursor-pointer">
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex space-x-4  mt-8 md:mt-0">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaTiktok />
          <FaLinkedinIn />
          <FaCookieBite />
        </div>
      </div>
      <p className="text-center text-sm mt-10">Copyright © SpliXTech</p>
    </div>
  );
};

export default Footer;
