"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper as SwiperType } from "swiper";

const WorksSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const cardData = [
    {
      id: 1,
      title: "e-commerce solutions",
      imageUrl:
        "https://images.unsplash.com/photo-1721925376073-4d2c53dd12f2?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Affiliate marketing",
      imageUrl:
        "https://images.unsplash.com/photo-1721925395637-cd3f2954df8d?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Invoice management",
      imageUrl:
        "https://images.unsplash.com/photo-1721925360331-852599c4327a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Chatting app",
      imageUrl:
        "https://images.unsplash.com/photo-1707814143198-d9d68e808464?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <div className="font-neopixelregular  bg-frosted-morning p-4">
      <div className=" p-5">
        <h1 className="text-7xl text-black text-start">
          Websites for Every Business, Across All Platforms.
        </h1>
      </div>
      <br />
      <Swiper
        slidesPerView={3.5} // Show 3 full slides and part of the 4th
        spaceBetween={5} // Add space between slides
        centeredSlides={false} // Ensure slides are not centered
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          swiperRef.current = swiper;
        }}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <motion.div
              className=" rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-2xl text-black mt-4">{card.title}</h2>
            </motion.div>
            <br />
          </SwiperSlide >
        ))}
      </Swiper>
      <div className="flex text-3xl justify-end space-x-6 mt-4">
        <button
          onClick={handlePrevClick}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded-md"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNextClick}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded-md"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
// WorksSlider
export default WorksSlider;
