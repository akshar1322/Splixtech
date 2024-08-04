"use client";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import contentList from '@/data/InfiniteToolsTextScroll.js';

const InfiniteToolsTextScroll = () => {
    const [content, setContent] = useState<{ type: string; content: string; }[]>([]);

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        // Fetch content from data file
        setContent(contentList);

        if (!sliderRef.current || !contentRef.current) return;

        // Setup GSAP timeline
        tl.current = gsap.timeline({
            repeat: +1,
            defaults: { ease: 'none', duration: 15 },
        });

        tl.current.fromTo(contentRef.current, { x: '0%' }, { x: '-100%' });

        // Slow scroll on hover
        const handleMouseEnter = () => {
            tl.current?.timeScale(0.5); // Slow down to half speed on hover
        };

        const handleMouseLeave = () => {
            tl.current?.timeScale(1); // Resume normal speed
        };

        sliderRef.current.addEventListener('mouseenter', handleMouseEnter);
        sliderRef.current.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup event listeners on unmount
        return () => {
            sliderRef.current?.removeEventListener('mouseenter', handleMouseEnter);
            sliderRef.current?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="w-full font-neopixelregular glass-background-blue py-10">
            <h2 className="text-4xl mr-5 font-bold text-end mb-6">Coding Tools and Languages We Use</h2>
            <div ref={sliderRef} className="relative w-full h-20 justify-center  overflow-hidden">
                <div ref={contentRef} className="absolute w-full h-full flex">
                    {[...content, ...content].map((item, index) => (
                        <div key={index} className="flex-shrink-0 mx-20 flex items-center justify-center">
                            {item.type === 'text' && (
                                <span className="text-2xl font-semibold">
                                    {item.content}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteToolsTextScroll;
