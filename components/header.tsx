'use client';

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


interface HeaderProps {
    label: string,
    href: string;
};

const headerItems: HeaderProps[] = [
    { label: "portfolio", href: "/" },
    { label: "projects", href: "/projects" },
    { label: "contact", href: "/contact" }
];

function isRouteActive(href: string, path: string) {
    const norm = (s: string) => {
        const t = "/" + s.replace(/^\/+/, "");
        return t.length > 1 ? t.replace(/\/+$/, "") : "/";
    };

    const base = norm(href);
    const curr = norm(path);

    if (base === "/") return curr === "/";
    return curr === base || curr.startsWith(base + "/");
}


export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedMode = localStorage.getItem('darkMode');
        const isDark = storedMode === 'true';
        setDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prev => {
            const newMode = !prev;
            localStorage.setItem('darkMode', `${newMode}`);
            document.documentElement.classList.toggle('dark', newMode);
            return newMode;
        });
    };




    return (
        <div className="flex justify-around items-center h-12 mt-2 border-b border-border --font-mine w-2/3 ">
            <Link href={'/'} className="text-2xl font-bold line-clamp-1">Farzeen Ilyas Zargar</Link>
            {/*-------------------*/}
            {
                headerItems.map((item: HeaderProps) => {
                    const isActive = isRouteActive(item.href, pathname);
                    return (
                        <Link key={item.label} href={item.href} className={`hidden md:flex ${isActive ? 'font-black text-shadow-2xs' : 'font-light'}`}>{item.label}</Link>
                    )
                }
                )
            }
            {/*-------------------*/}


            <button onClick={toggleDarkMode}>
                {darkMode ? (
                    <Image src="/icons/sun.png" alt="sun" width={25} height={25} className="invert-[var(--my-invert)]"/>
                ) : (
                    <Image src="/icons/moon.png" alt="moon" width={25} height={25} className="invert-[var(--my-invert)]"/>
                )}
            </button>
            <Link href={'/resume.pdf'} className={`border  items-center p-1 pl-2 pr-3 pb-1 rounded-2xl  hidden md:flex hover:invert bg-background`}>
                <Image src={"/icons/download.png"} alt="download-icon" className={`w-4 h-4 mr-1 mt-0.5 invert-[var(--my-invert)]`} width={25} height={25} />
                resume

            </Link>




            {/*-------------------*/}


            <button className={`md:hidden flex items-center justify-center text-black text-4xl z-10 ${isOpen ? 'hidden' : ''}`} onClick={() => { setIsOpen(!isOpen) }}>
                <Image src={"/icons/menu.png"} alt="download-icon" className={`w-5 h-5 mr-1 mt-0.5 invert-[var(--my-invert)]`} width={25} height={25} />
            </button>
            <button className={`md:hidden flex  text-white text-4xl z-21 ${isOpen ? '' : 'hidden'}`} onClick={() => { setIsOpen(!isOpen) }}>
                <Image src={"/icons/cross.png"} alt="download-icon" className="w-7 h-7 mr-1 mt-0.5 invert" width={25} height={25} />
            </button>



            {/*-------------------*/}


            <div className={`md:hidden bg-black opacity-85 w-2/3 h-screen fixed text-white top-0 right-0 pt-20 z-20 items-center ${isOpen ? 'flex flex-col' : 'hidden'}`}>

                <Link href="/" className="block py-2 text-2xl">portfolio</Link>
                <Link href="/projects" className="block py-2 text-2xl">projects</Link>
                <Link href="/contact" className="block py-2 text-2xl">contact</Link>
                <Link href="/resume.pdf" className="block py-2 text-2xl">resume</Link>


            </div>

        </div>
    );

}