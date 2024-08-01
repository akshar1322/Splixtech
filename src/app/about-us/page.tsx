"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Contact from '../contact-us/page';
import Headerimage from '@/components/ui/Headerimage';
import Menu from '@/components/Navigationbar/menu';



// interfaces
interface Paragraph {
  id: number;
  story: string;
}



// paragraphs data
const storyParagraphs: Paragraph[] = [
  // {
  //   id: 1,
  //   story: 'Discover our journey and commitment to delivering exceptional solutions in web development&apos; software&apos; mobile apps&apos; UI/UX design&apos; and AI/ML',
  // },
  
];

// AboutUs page
const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | spliXtech';
  }, []);

  return (
    // main container 
    <main > 
      {/* header */}
        <Menu />
        <br /> <br /><br /> <br /> 
        
          <Headerimage 
          backgroundImageUrl="https://images.unsplash.com/photo-1700508671735-d724d59ea4b5?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          text="About Us" />

        {/* About-us */}
            <div className="container mx-auto p-4">
              <div className="flex flex-col md:flex-row items-center md:items-start my-12">
                <div className="md:w-1/2 p-10">
                  <h2 className="text-5xl font-neopixelregular font-semibold">SPLIXTECH</h2>
                  <p className="mt-4">
                  Discover our journey and commitment to delivering exceptional solutions in web development&apos; software&apos; mobile apps&apos; UI/UX design&apos; and AI/ML
                  </p>
                </div>
                <div className="md:w-80 p-4 relative group">
                  <Image
                    src="/Images/Logos/AksharPatel.png"
                    alt="Founder"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg hover:opacity-70 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex flex-col place-items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-75 rounded-lg">
                    <a target="_blank"href="https://www.instagram.com/_akshar.x" className="text-white m-2">
                      <i className="fab fa-instagram"></i> Follow on Instagram
                    </a>
                    <a target="_blank" href="https://x.com/Akshar_patel_13?t=TsN5oGBu9VDVy1J3tAASPQ&s=09" className="text-white m-2">
                      <i className="fab fa-twitter"></i> Follow on X
                    </a>
                    <a target="_blank" href="https://www.behance.net/aksharpatel24" className="text-white m-2">
                      <i className="fab fa-behance"></i> Follow on behance
                    </a>
                    <a target="_blank" href="https://dribbble.com/Akshar_09" className="text-white m-2">
                      <i className="fab fa-dribbble"></i> Follow on dribbble
                    </a>
                  </div>
                </div>
              </div>

                <div className="my-8">
                  <h2 className="text-3xl font-bold text-center"> 
                  SPLIXTECH, transforming the digital landscape with cutting-edge web development, AI, ML, advanced software solutions, exceptional UI/UX design, and 3D product design, in partnership with Redmagic Studio.

                  </h2>
                </div>

                  <div className="space-y-8">
                    {storyParagraphs.map(paragraph => (
                      <p key={paragraph.id} className="text-2xl leading-relaxed">
                        {paragraph.story}
                      </p>
                    ))}
                  </div>
            </div>
          {/* contact */}
          <br />
          <div className="relative overflow-hidden">
            <center>
            <h1 className='md:text-6xl text-8xl font-array bg-gradient-to-r  from-fuchsia-500 to-pink-500 bg-clip-text text-transparent font-light ' >Contact Us</h1>
            </center>
            
          </div>
          <br />
            <Contact />
           {/* footer */}
            
    </main>
  );
};

export default AboutUs;
