"use client";
import { useState } from "react";

import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/header';
import Footer from '@/components/footer';




export default function Home() {

  const [copiedEmail, setCopiedE] = useState(false);
  const [copiedPhone, setCopiedP] = useState(false);
  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText("farzeenilyaszargar@gmail.com");
      setCopiedE(true);
      setTimeout(() => setCopiedE(false), 1000);
    } catch {
    }
  }
  async function handleCopyPhone() {
    try {
      await navigator.clipboard.writeText("9818960083");
      setCopiedP(true);
      setTimeout(() => setCopiedP(false), 1000);
    } catch {
    }
  }

  return (
    <div className='h-screen flex flex-col justify-between'>
      <Header />
      <div className=' flex justify-center items-center '>

        <div className=' border border-black bg-white text-black flex flex-col p-5  rounded-2xl justify-center items-center'>
          <h1 className='font-black text-2xl mb-2'>contact me</h1>
          <div className='flex flex-row items-center w-fit  '>
            <p className=' text-right font-bold mr-1'>email:</p>
            <p className=' border-b border-transparent transition-all duration-300 ease-in-out hover:border-black'>farzeenilyaszargar@gmail.com</p>
            <div className="relative inline-block group">

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1  px-3 py-1.5 text-[10px] hover:scale-130"
                aria-live="polite"> {copiedEmail ? "✅" : "📋"}
              </button>
              {!copiedEmail && (


                <div
                  className="bottom-full mb-1 left-1/2 -translate-x-1/2
                      hidden group-hover:block absolute
                      bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap opacity-90
                      shadow-lg">
                  Copy
                </div>

              )}
              {copiedEmail && (
                <div
                  className={`bottom-full mb-1 left-1/2 -translate-x-1/2 absolute
                      bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap opacity-90
                      shadow-lg`}>
                  Copied
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-row items-center w-fit'>
            <p className='w-1/5 text-right font-bold mr-2'>phone:</p>

            <p className=' border-b border-transparent transition-all duration-300 ease-in-out hover:border-black'>  (<span className="text-xs">🇮🇳</span>+91) 9818960083</p>
            <div className="relative inline-block group">

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2  px-3 py-1.5 text-[10px] hover:scale-130"
                aria-live="polite"> {copiedPhone ? "✅" : "📋"}
              </button>
              {!copiedPhone && (


                <div
                  className="bottom-full mb-2 left-1/2 -translate-x-1/2
                      hidden group-hover:block absolute
                      bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap opacity-90
                      shadow-lg">
                  Copy
                </div>

              )}
              {copiedPhone && (
                <div
                  className={`bottom-full mb-2 left-1/2 -translate-x-1/2 absolute
                      bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap opacity-90
                      shadow-lg`}>
                  Copied
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-row items-center gap-3 mt-2'>
            <Link href="https://www.github.com/farzenilyaszargar" className="hover:scale-120"><Image src={'/icons/github.svg'} alt='github' width={30} height={30}></Image></Link>
            <Link href="https://www.linkedin.com/in/farzeenilyaszargar/" className="hover:scale-120"><Image src={'/icons/linkedin.svg'} alt='linkedin' width={30} height={30}></Image></Link>
          </div>
        </div>


      </div>
      <Footer />


    </div>


  );
}
