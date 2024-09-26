import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const slides = [
    {
      image: '/Images/BG/hero_img.jpg',
      title: 'Web Development Services',
      description: 'We provide top-notch web development services to bring your business online.',
      buttonText: 'Learn More',
      buttonUrl: 'https://wa.me/916352191174',
      bgColor: '#FF6347', // Tomato color
    },
    {
      image: '/Images/BG/milad-fakurian-Ln-NOJdhpZA-.jpg',
      title: 'UI/UX Design',
      description: 'Crafting beautiful and functional designs to enhance user experience.',
      buttonText: 'Read More',
      buttonUrl: 'https://wa.me/916352191174',
      bgColor: '#4682B4', // Steel Blue color
    },
    {
      image: '/Images/BG/Contact-US.jpg',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs.',
      buttonText: 'Try Now',
      buttonUrl: 'https://wa.me/916352191174',
      bgColor: '#32CD32', // Lime Green color
    },
  ];

  const autoSlideRef = useRef<number | null>(null);

  // Automatically slide every 5 seconds
  useEffect(() => {
    autoSlideRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, []);

  // Function to go to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Scroll event to track Y-axis scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative  h-screen  flex items-center justify-between overflow-hidden">

      {/* Right-Side Banner with Scroll Effect */}
      <motion.div
        className="relative w-[1200px] h-[770px] bg-cover bg-center "
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        initial={{ y: 0 }}
        animate={{ y: scrollY * -0.1 }} // Parallax scroll effect
      >
        {/* Black overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-12 ">
          <h1 className="text-5xl text-white font-bold mb-4">{slides[currentSlide].title}</h1>
          <p className="text-xl text-white mb-6">{slides[currentSlide].description}</p>
          <Link href={slides[currentSlide].buttonUrl}>
            <button
              className="text-white px-6 py-3 rounded-md transition duration-300 transform hover:scale-105"
              style={{ backgroundColor: slides[currentSlide].bgColor }} // Dynamic button color
            >
              {slides[currentSlide].buttonText}
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Pagination with Click Event */}
      <div className="absolute bottom-10 right-12 cursor-pointer flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}  // Go to the selected slide
            className={`transition-all duration-300 ${index === currentSlide ? 'w-10' : 'w-3'} h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
