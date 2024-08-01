"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaTimes, FaBars } from "react-icons/fa";

const Menulinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about-us" },
  { title: "Services", link: "/services" },
  { title: "Contact Us", link: "/contact-us" },
  { title: "Update Hub", link: "/update-hub" }
];

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tl = useRef<GSAPTimeline>();

  useGSAP(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });
    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 0.5,
        autoAlpha: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
      })
      .to(".menu-link-item-holder", {
        duration: 0.5,
        y: 0,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.70
      });
  }, { scope: container });

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={container}>
      <div className="fixed glass-background  font-telegraphic top-0 left-0 w-full p-8 flex justify-between items-center z-10">
        <div className="text-white font-telegraphic">
          <Link className="text-4xl" href="/">spliXtech</Link>
        </div>
        <div className="cursor-pointer text-white" onClick={handleMenuClick}>
          <FaBars size={35} />
        </div>
      </div>
      <div className="menu-overlay fixed top-0 left-0 w-full h-full p-8 glass-background-blue-violet z-20 flex flex-col clip-path-polygon-closed">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow flex justify-start items-center">
            <div className="flex flex-col space-y-4 text-left">
              {Menulinks.map((Menulink, index) => (
                <div key={index} className="menu-link-item-holder relative">
                  <Link href={Menulink.link} className="text-yellow-50 text-5xl font-normal leading-none" onClick={handleMenuClick}>
                    {Menulink.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-end w-full transition duration-300 ease-in-out mx-auto group">
            <div className="flex text-2xl flex-col space-y-2 text-white">
              <Link href="https://x.com/Akshar_patel_13?t=TsN5oGBu9VDVy1J3tAASPQ&s=09" className="group">
                X <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
              <Link href="https://www.instagram.com/_akshar.x" className="group">
                Instagram <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
              <Link href="https://www.behance.net/aksharpatel24" className="group">
              behance <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
              <Link href="https://www.linkedin.com/in/akshar-patel-4a78b0217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="group">
                LinkedIn <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
            </div>
            <div className="flex flex-col text-3xl space-y-2 text-white">
              <Link href="https://wa.me/916352191174" className="group">
                WhatsApp <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
            </div>
            <div className="cursor-pointer text-white" onClick={handleMenuClick}>
              <FaTimes size={35} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
