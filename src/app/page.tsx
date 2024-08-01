"use client";
import Menu from "@/components/Navigationbar/menu";
import Image from "next/image";


export default function Home() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916352191174', '_blank', 'noopener,noreferrer'); 
  };
  return (
    <>
    <Menu />
   <main className="relative flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24">
      <Image
        src="/Images/BG/paris-bilal-YEtLnGgmgvk-.jpg" 
        alt="Background Image"
        layout="fill"
        quality={100}
        className="z-0 opacity-50" 
      />
      <h1 className="z-10 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-ledcounter7 text-center">
        spli<span className="text-purple-400">X</span>tech
      </h1>
      <p className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl z-10 text-center mt-4 sm:mt-6 md:mt-8">
        Akshar Patel presents  SpliXTech, transforming the digital landscape with cutting-edge web development, AI, ML, advanced software solutions, <span className="text-green-400">exceptional UI/UX design, and 3D product design,</span> in partnership with Redmagic Studio.
      </p>
      <button
        className="z-10 mt-4 sm:mt-6 md:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-lg text-base sm:text-lg md:text-xl font-bold hover:bg-green-600 transition duration-300"
        onClick={handleWhatsAppClick}
      >
        Contact Us on WhatsApp
      </button>
    </main>
    </>
  );
}
