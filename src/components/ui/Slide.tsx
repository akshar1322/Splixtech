import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

interface SlideProps {
  image1: string;
  image2: string;
}

const Slide: React.FC<SlideProps> = ({ image1, image2 }) => {
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const grayBoxRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const stringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial animations
    gsap.fromTo(
      image1Ref.current,
      { x: '-100%' },
      { x: '0%', duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      image2Ref.current,
      { x: '100%' },
      { x: '0%', duration: 1, ease: 'power2.out', delay: 0.5 }
    );

    gsap.fromTo(
      grayBoxRef.current,
      { x: '100%', width: '0%' },
      { x: '0%', width: '50%', duration: 1, ease: 'power2.out', delay: 1 }
    );

    // GSAP SVG path animation
    let path = 'M 10 100 Q 500 100 990 100';
    const finalPath = 'M 10 100 Q 500 100 990 100';

    const handleMouseMove = (e: MouseEvent) => {
      const { offsetX, offsetY } = e;
      path = `M 10 100 Q ${offsetX} ${offsetY} 990 100`;

      gsap.to(svgPathRef.current, {
        attr: { d: path },
        duration: 0.2,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(svgPathRef.current, {
        attr: { d: finalPath },
        duration: 0.5,
        ease: 'elastic.out(1, 0.2)',
      });
    };

    const stringElement = stringRef.current;
    stringElement?.addEventListener('mousemove', handleMouseMove);
    stringElement?.addEventListener('mouseleave', handleMouseLeave);

    // Clean up event listeners on unmount
    return () => {
      stringElement?.removeEventListener('mousemove', handleMouseMove);
      stringElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916352191174', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative flex h-screen min-h-fit w-full overflow-hidden">
      {/* Image 1 sliding from left to right */}
      <motion.div className="absolute inset-0" ref={image1Ref}>
        <Image
          src={image1}
          alt="Image 1"
          layout="fill"
          objectFit="cover"
          className="rounded-e-xl"
        />
      </motion.div>

      {/* Gray Box sliding from right to left */}
      <motion.div
        className="absolute rounded-s-xl inset-0"
        ref={grayBoxRef}
        style={{ backgroundColor: '#D3D3D3', opacity: 40 }}
      />

      {/* Image 2 sliding from right to left */}
      <motion.div className="absolute text-black top-16 inset-0" ref={image2Ref}>
        <div className="text-black font-kontanter text-start text-4xl mt-16 mr-6">
          <h1 className="mr-6 ml-4">Transforming your ideas into reality</h1>
        </div>



        <p className="text-black font-kontanter text-xl mt-3 mr-16 ml-4">
          Unlock Free Hosting and Domain with{' '}
          <span className="text-3xl font-light text-purple-500">
            Every Project!
          </span>
        </p>
        {/* <motion.div className="button-wrapper yellowDot-cursor">
          <div id="string" ref={stringRef}>
          <svg width="1000" height="200" xmlns="http://www.w3.org/2000/svg">

     <defs>
          <linearGradient id="color-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="red" />
            <stop offset="50%" stopColor="blue" />
            <stop offset="100%" stopColor="pink" />
          </linearGradient>
        </defs>
        <path
          ref={svgPathRef}
          d="M 10 100 Q 500 100 990 100"
          stroke="url(#color-gradient)"
          strokeWidth="1.5"
          fill="transparent"
        />
      </svg>
          </div>
        </motion.div> */}
        <div className="button-wrapper">
          <button
            onClick={handleWhatsAppClick}
            className="relative text-lg md:text-xl lg:text-2xl flex items-center px-7 py-3 md:px-16 md:py-4 overflow-hidden font-light font-kontanter transition-all bg-indigo-500 rounded-md group ml-10 mt-8"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Try now &#8599;
            </span>
          </button>
        </div>


      </motion.div>

    </div>
  );
};

export default Slide;
