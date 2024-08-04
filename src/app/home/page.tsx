"use client";
import React,{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WorksSlider from '@/components/ui/WorksSlider';
import InfiniteImageScroll from '@/components/ui/InfiniteImageScroll';
import InfiniteTextScroll from '@/components/ui/InfiniteTextScroll';
import TeamSlider from '@/components/ui/TeamSlider';
import HeroSection from '@/components/Hero/HeroSection';
import Footer from '@/components/Footer/footer';
import Navigationbar from '@/components/Navigationbar/Navigationbar';




const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 
  return (
    <div data-aos="fade-up" className='no-scrollbar ' >

      <Navigationbar />
      <HeroSection />

      <WorksSlider />

      <InfiniteImageScroll />

      <WorksSlider />

      <InfiniteTextScroll />

      <TeamSlider />

      <Footer />
    </div>
  );
};

export default HomePage;
