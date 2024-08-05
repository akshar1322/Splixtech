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

  return (
    <div className="relative flex h-96 w-full overflow-hidden">
      {/* Image 1 sliding from left to right */}
      <motion.div
        className="absolute inset-0"
        ref={image1Ref}
      >
        <Image
          src={image1}
          alt="Image 1"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* Gray Box sliding from right to left */}
      <motion.div
        className="absolute inset-0"
        ref={grayBoxRef}
        style={{ backgroundColor: '#D3D3D3' }}
      />

      {/* Image 2 sliding from right to left */}
      <motion.div
        className="absolute inset-0"
        ref={image2Ref}
      >
        <Image
          src={image2}
          alt="Image 2"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
    </div>
  );
};

export default Slide;
