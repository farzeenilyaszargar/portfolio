'use client';

import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useState, useEffect } from 'react';


export default function Flappy() {
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const p1 = (event: KeyboardEvent) => {
            if (event.key === 'w') {
                setTranslateY((prev) => prev - 30); // Move up 10px
            }
            if (event.key === 's') {
                setTranslateY((prev) => prev + 30); // Move up 10px
            }
            
        };  

        document.addEventListener('keydown', p1);
        return () => {

        };
    }, []);


    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="h-160 flex flex-col justify-center items-center">
                <div className="h-100 w-200 border absolute overflow-hidden">
                    <div className={`absolute top-0 left-0 h-27 w-5 bg-black rounded-2xl transition ease-in`} 
                        style={{ transform: `translateY(${translateY}px)` }}>
                        
                    </div>
                    <div className="absolute top-0 right-0 h-27 w-5 bg-black rounded-2xl transition ease-in"
                        style={{ transform: `translateY(${translateY}px)` }}>
                    
                    </div>
                    <div className="absolute top-50 left-100 h-5 w-5 bg-black rounded-2xl"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}