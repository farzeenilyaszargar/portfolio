'use client';

import Link from "next/link";
import Image from "next/image";
import downloadIcon from "../public/download.png"; 


import { usePathname } from "next/navigation";
import { useState } from "react";



interface HeaderProps {
    label:string, 
    href:string; 
};

const headerItems: HeaderProps[] = [    
    { label: "portfolio", href: "/" },
    { label: "projects", href: "/projects" },
    { label: "games", href: "/games" },
    { label: "contact", href: "/contact" }
];

function isRouteActive(href: string, path: string) {
  // normalize: ensure leading slash, strip trailing slash (except for "/")
  const norm = (s: string) => {
    const t = "/" + s.replace(/^\/+/, "");
    return t.length > 1 ? t.replace(/\/+$/, "") : "/";
  };

  const base = norm(href);
  const curr = norm(path);

  if (base === "/") return curr === "/";                            // root is only active on "/"
  return curr === base || curr.startsWith(base + "/");              // allow any subpath
}


export default function Header() 
{
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-around items-center h-12 mt-2 border-b border-black --font-mine w-full">
            <Link href={'/'} className="text-2xl font-black line-clamp-1">Farzeen Ilyas Zargar</Link>
            {
                headerItems.map((item:HeaderProps) => {
                    const isActive = isRouteActive(item.href, pathname) ;
                    return (
                        <Link key={item.label} href={item.href} className={`hidden md:flex ${isActive?'font-black text-shadow-2xs':''}`}>{item.label}</Link>
                    )}
                )
            }
            <button className="border border-black bg-white items-center p-1 pl-2 pr-2 rounded-2xl filter invert hover:filter-none hidden md:flex">
                <Image src={downloadIcon} alt="download-icon" className="w-5 h-5 mr-2"></Image>Resume
            </button>
            <button className={`md:hidden flex items-center justify-center text-black text-4xl z-10 ${isOpen?'hidden':''}`} onClick={()=>{setIsOpen(!isOpen)}}>
                ☰
            </button>
            <button className={`md:hidden flex items-center justify-center text-white text-4xl z-10 ${isOpen?'':'hidden'}`} onClick={()=>{setIsOpen(!isOpen)}}>
                x
            </button>
            <div className={`bg-black opacity-85 w-2/3 h-screen text-white absolute top-0 right-0 items-center pt-20 ${isOpen?'flex flex-col':'hidden'}`}>
                <a href="/" className="block py-2 text-2xl">portfolio</a>
                <a href="/articles" className="block py-2 text-2xl">articles</a>
                <a href="/games" className="block py-2 text-2xl">games</a>
                <a href="/contact" className="block py-2 text-2xl">contact</a>
                <a href="/resume" className="block py-2 text-2xl">resume</a>


            </div>
        </div>
    );

}