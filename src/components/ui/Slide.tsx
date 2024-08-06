import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

interface SlideProps {
  image1: string;
  image2: string;
}

const Slide: React.FC<SlideProps> = ({ image1, image2 }) => {
  const image1Ref = React.useRef<HTMLDivElement>(null);
  const image2Ref = React.useRef<HTMLDivElement>(null);
  const grayBoxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // GSAP animations
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
  }, []);

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916352191174', '_blank', 'noopener,noreferrer');
  };




  return (
    <div className="relative flex h-screen min-h-fit w-full overflow-hidden">
      {/* Image 1 sliding from left to right */}
      <motion.div
        className="absolute inset-0"
        ref={image1Ref}
      >
        <Image
          src={image1}
          alt="Image 1"
          layout='fill'
          objectFit="cover"
          className="rounded-e-md"
        />
      </motion.div>

      {/* Gray Box sliding from right to left */}
      <motion.div
        className="absolute rounded-s-md inset-0"
        ref={grayBoxRef}
        style={{ backgroundColor: '#D3D3D3', opacity: 40 }}
      />

      {/* Image 2 sliding from right to left */}
      <motion.div
        className="absolute text-black top-16 inset-0"
        ref={image2Ref}
      >
        <div className='text-black font-bold font-neopixelregular text-start text-5xl mt-16 mr-6 '>
        <h1 className='mr-6 ml-4' >
          Transforming your ideas into reality
        </h1>
        {/* <h1 className=" font-neopixelregular" >
            reality
          </h1> */}
        </div>

        <p
          className="text-black font-neopixelregular  text-2xl mt-3 mr-16 ml-4">
          Unlock Free Hosting and Domain with <span className='text-3xl  font-light text-purple-500' >Every Project!</span>
        </p>

        <div className="button-wrapper">
          <button
          onClick={handleWhatsAppClick}
            className="relative text-lg md:text-xl lg:text-2xl flex items-center px-7  py-3 md:px-16 md:py-4 overflow-hidden font-medium font-neopixelregular transition-all bg-indigo-500 rounded-md group ml-10 mt-8"
          >
            <span
              className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
            >
              <span
                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
              ></span>
            </span>
            <span
              className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
            >
              <span
                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
              ></span>
            </span>
            <span
              className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
            ></span>
            <span
              className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
            >
              Try now &#8599;
            </span>
          </button>
        </div>
        {/* <Image
          src={image2}
          alt="Image 2"
          width={800}
          height={800}
          objectFit="contain"
        /> */}
      </motion.div>
    </div>
  );
};

export default Slide;
