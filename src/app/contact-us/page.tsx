'use client';
// imports
import React  , { useEffect } from 'react';
import Button from '@/components/ui/Button';
// import Header from '../components/layout/Header';
// import Footer from '../components/layout/Footer';
// import Slider from '../components/layout/Slider';

// interfaces
interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

// interfaces
interface Paragraph {
  id: number;
  story: string;
}

// sliders data
const slidesData: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1718556256225-82afc1b30580?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Custom Slide 1',
    description: 'Custom Description 1',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1708660575990-101db3b00294?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Custom Slide 2',
    description: 'Custom Description 2',
  },
];



// contact page 
const Contact: React.FC = () => {

  useEffect(() => {
    document.title = 'Contact Us | SpliXtech';
  }, []);
  return (
    // main container
    <main>
      
          <div className="relative h-screen overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(../Images/BG/Contact-US.jpg)', backgroundAttachment: 'fixed' }}
            >

            </div>
            <div className="relative z-5 flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="w-full max-w-5xl p-8 bg-white bg-opacity-0 rounded-lg">
                <h2 className="text-center text-2xl font-semibold mb-4">
                Get in Touch with SpliXtech
                  <br />
                   We&apos;re here to help with your web, software, mobile, and AI/ML needs. Reach out to us for innovative solutions and outstanding support. <span className="italic">Thank You</span> 👍
                </h2>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900 "
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                    />
                    <span className="text-sm text-white">
                      I&apos;d like to receive drop notifications and offers from Work SpliXtech
                      . via email consent to the privacy policy
                    </span>
                  </div>
                  

                  <div className="flex justify-center ">
                  <Button label="Read more"  />
                </div>

                </form>
              </div>
            </div>
          </div>

        
    </main>
  );
};

export default Contact;
