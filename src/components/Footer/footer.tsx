"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaCookieBite } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  useEffect(() => {
    // GSAP animation for footer content
    gsap.from('.footer-content', {
      y: 50,
      opacity: 100,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2
    });
  }, []);

  const footerLinks = [
    {
      title: 'PRODUCT',
      links: [
        { name: 'Ecommerce store', href: '/ecommerce-store' },
        { name: 'Blog', href: '/blog' },
        { name: 'AI/Ml', href: '/ai-ml' },
        { name: 'Wobble Ai', href: '/wobble-ai' },
        { name: 'Wobble Chat', href: '/wobble-chat' }
      ]
    },
    {
      title: 'ABOUT',
      links: [
        { name: 'About us', href: '/about-us' },
        { name: 'Contact us', href: '/contact-us' }
      ]
    },
    {
      title: 'OTHER',
      links: [
        { name: 'Update Hub', href: '/update-hub' },
        { name: 'Privacy Hub', href: '/privacy-hub' },
        { name: 'Cookie', href: '/cookie' }
      ]
    }
  ];

  return (
    <div className="bg-light-beige text-charcoal p-10">
      <div className="footer-content flex flex-col md:flex-row justify-between items-start opacity-0">
        <div className="mb-8 text-black md:mb-0">
          <motion.h2
            className="font-bold font-neopixelregular text-5xl mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            SpliXTech
          </motion.h2>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title} className="mb-6">
            <motion.h3
              className="font-semibold text-sm text-charcoal uppercase mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            >
              {section.title}
            </motion.h3>
            <ul>
              {section.links.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ translateX: 10 }}
                  className="mb-1 text-dark-blue-1 cursor-pointer"
                >
                  <Link href={link.href}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex space-x-4 text-black mt-8 md:mt-0">
          {[
            { icon: <FaTwitter />, href: "https://x.com/Akshar_patel_13?t=TsN5oGBu9VDVy1J3tAASPQ&s=09" },
            // { icon: <FaFacebookF />, href: "https://facebook.com/yourprofile" },
            { icon: <FaInstagram />, href: "https://www.instagram.com/_akshar.x?igsh=emp1cWo4aW5zZTZo" },
            // { icon: <FaTiktok />, href: "https://tiktok.com/@yourprofile" },
            { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/akshar-patel-4a78b0217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: <FaCookieBite />, href: "/cookie" }
          ].map(({ icon, href }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="text-xl cursor-pointer"
            >
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <p className="text-center text-[#333333] text-sm mt-10">Copyright © SpliXTech</p>
    </div>
  );
};

export default Footer;
