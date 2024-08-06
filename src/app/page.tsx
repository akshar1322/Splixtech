// src/pages/index.tsx
"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navigationbar from "@/components/Navigationbar/Navigationbar";
import InfiniteImageScroll from "@/components/ui/InfiniteImageScroll";
import HeroSection from "@/components/Hero/HeroSection";
import InfiniteTextScroll from "@/components/ui/InfiniteTextScroll";
import WorksSlider from "@/components/ui/WorksSlider";
import TeamSlider from "@/components/ui/TeamSlider";
import Footer from "@/components/Footer/footer";
import InfiniteToolsTextScroll from "@/components/ui/InfiniteToolsTextScroll";
import Slide from '@/components/ui/Slide';
import CookieCard from "@/components/CookieCard/CookieCard";
import useInView from '@/hooks/useInView';
import LoadingScreen from "@/components/ui/LoadingScreen";
import Portfolio from "@/components/ui/Portfolio";



// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { ref: heroRef, inView: heroInView } = useInView();
  const { ref: worksRef, inView: worksInView } = useInView();
  const { ref: teamRef, inView: teamInView } = useInView();

  const [heroAnimated, setHeroAnimated] = useState(false);
  const [worksAnimated, setWorksAnimated] = useState(false);
  const [teamAnimated, setTeamAnimated] = useState(false);

  useEffect(() => {
    if (heroInView && !heroAnimated) {
      gsap.fromTo('.hero-title', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo('.hero-description', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo('.contact-button', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 });
      setHeroAnimated(true);
    }
  }, [heroInView, heroAnimated]);

  useEffect(() => {
    if (worksInView && !worksAnimated) {
      gsap.fromTo('.works-slider', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
      setWorksAnimated(true);
    }
  }, [worksInView, worksAnimated]);

  useEffect(() => {
    if (teamInView && !teamAnimated) {
      gsap.fromTo('.team-slider', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
      setTeamAnimated(true);
    }
  }, [teamInView, teamAnimated]);

      // const [loading, setLoading] = useState(true);

      // useEffect(() => {
      //   const timer = setTimeout(() => {
      //     setLoading(false);
      //   }, 5000); // Match this duration with the animation duration

      //   return () => clearTimeout(timer);
      // }, []);

      // if (loading) {
      //   return <LoadingScreen />;
      // }


  return (
    <main className="bg-transparent">
      <Navigationbar />
      <div ref={heroRef}>
        {/* <HeroSection /> */}
      </div>
      <CookieCard />
      <div ref={worksRef} className="works-slider">
        <Slide
          image1="/Images/BG/hero_img.jpg"
          image2="/Images/Art/3d-business-man-and-woman-working-with-laptop-1.png"

        />
        <InfiniteTextScroll />
        <WorksSlider />
      </div>
      <div ref={teamRef} className="team-slider">
      <InfiniteImageScroll />
        <TeamSlider />
      </div>
      <InfiniteToolsTextScroll />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Home;
