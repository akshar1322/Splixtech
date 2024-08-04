"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from('.hero-subheading', {
      duration: 1.2,
      x: -100,
      opacity: 0,
      delay: 0.5,
      ease: "power4.out",
      stagger: 0.3
    });

    gsap.from('.hero-heading', {
      duration: 1.2,
      x: -100,
      opacity: 0,
      delay: 0.3,
      ease: "power4.out"
    });

    // Canvas animation
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      let angle = 0;
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(angle);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillRect(-50, -50, 100, 100);
        ctx.restore();
        angle += 0.01;
        requestAnimationFrame(draw);
      };
      draw();
    }
  }, []);

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916352191174', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-start pl-16 bg-cover bg-center bg-no-repeat overflow-hidden"
         style={{ backgroundImage: 'url("/Images/BG/hero img.jpg")' }}>
      <canvas
        id="hero-canvas"
        className="absolute inset-0"
        style={{ zIndex: 0 }}
        width="1920" // Set canvas width to match your design
        height="1080" // Set canvas height to match your design
      />
      <div className="relative z-10">
        <motion.h1
          className="text-5xl font-bold text-white hero-heading"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Transforming ideas into reality
        </motion.h1>
        <motion.p
          className="text-xl text-white mt-4 hero-subheading"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          Unlock Free Hosting and Domain with Every Project!
        </motion.p>
        <button
          onClick={handleWhatsAppClick}
          className="mt-8 bg-yellow-400 px-6 py-3 font-semibold rounded hover:bg-yellow-300 transition duration-300"
        >
          Try now &#8599;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
