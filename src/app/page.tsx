"use client";
import Navigationbar from "@/components/Navigationbar/Navigationbar";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link as ScrollLink } from 'react-scroll';
import InfiniteImageScroll from "@/components/ui/InfiniteImageScroll";
import HeroSection from "@/components/Hero/HeroSection";
import InfiniteTextScroll from "@/components/ui/InfiniteTextScroll";
import WorksSlider from "@/components/ui/WorksSlider";
import TeamSlider from "@/components/ui/TeamSlider";
import Footer from "@/components/Footer/footer";
import InfiniteToolsTextScroll from "@/components/ui/InfiniteToolsTextScroll";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916352191174', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    gsap.fromTo('.hero-title',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.hero-title',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true
        }
      });

    gsap.fromTo('.hero-description',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.hero-description',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true
        }
      });

    gsap.fromTo('.contact-button',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-button',
          start: 'top 90%',
          end: 'top 70%',
          scrub: true
        }
      });
  }, []);

  

  return (
    <>

      <main className="bg-black">

      <Navigationbar />
      <HeroSection />
      <InfiniteTextScroll />
      <WorksSlider />
      <InfiniteImageScroll />
      <InfiniteToolsTextScroll />
      <TeamSlider />
      <Footer />


      </main>

    </>
  );
}
