"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaInstagram, FaFacebook, FaTwitter, FaMedium } from 'react-icons/fa';
import { Swiper as SwiperType } from "swiper";
import teamData from '@/data/TeamData.js';

const TeamSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

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
    <div className="font-neopixelregular bg-frosted-morning p-4">
      <div className="p-5">
        <h1 className="text-7xl text-black text-start">
          Meet Our Team
        </h1>
      </div>
      <br />
      <Swiper
        slidesPerView={3.5}
        spaceBetween={50}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          swiperRef.current = swiper;
        }}
      >
        {teamData.map((member) => (
          <SwiperSlide key={member.id}>
            <motion.div
              className="rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ backgroundColor: member.backgroundColor }}
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-2xl text-black mt-4">{member.name}</h2>
              <p className="text-lg text-gray-700">{member.role}</p>
              <div className="flex space-x-4 mt-4">
                {member.socialLinks.instagram && (
                  <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl" />
                  </a>
                )}
                {member.socialLinks.facebook && (
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl" />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-2xl" />
                  </a>
                )}
                {member.socialLinks.medium && (
                  <a href={member.socialLinks.medium} target="_blank" rel="noopener noreferrer">
                    <FaMedium className="text-2xl" />
                  </a>
                )}
              </div>
            </motion.div>
            <br /> <br />
          </SwiperSlide>
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

export default TeamSlider;
