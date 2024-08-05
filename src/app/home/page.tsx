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
import Slide from '@/components/ui/Slide';
import ImageSlider from '@/components/ui/ImageSlider';
import CookieCard from '@/components/CookieCard/CookieCard';




const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" className='no-scrollbar bg-white' >

      {/* <Slide image1="/Images/BG/milad-fakurian-o59EEbR1n_w-.jpg" image2="/Images/Art/casual-life-3d-young-woman-balancing-on-one-hand-with-boxes-and-coffee-cup-in-hands.png" /> */}

    <CookieCard />

    </div>
  );
};

export default HomePage;
