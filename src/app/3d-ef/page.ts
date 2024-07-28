// pages/index.tsx
'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ThreeDScene from '../components/layouts/ThreeDScene';

const Home: React.FC = () => {
  const [text, setText] = useState('&lt;&gt;');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setText('&lt;spliXtech&gt;');
      } else {
        setText('&lt;&gt;');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>3D Effect with Scroll</title>
      </Head>
      <h1 dangerouslySetInnerHTML={{ __html: text }} />
      <ThreeDScene />
      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
