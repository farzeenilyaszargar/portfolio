import Link from 'next/link';
import Image from 'next/image';

import LinkIcon from '@/public/icons/link.png';

interface ExpProps {
    name: string;
    desc: string;
    time: string;
    link: string;
    role: string;
    logo: string;
}

const exp: ExpProps[] = [
    {
        name: "Superflights",
        desc: "Cofounded out of college to make a site for people to share their flights and travel experiences. It is a OTA for travelers.",
        time: "2023-Present",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        role: "COO & Co-founder",
        logo: "/icons/SuperflightsLogo.jpeg"
    },
    {
        name: "Google",
        desc: "Worked on the flutter programming language. helping to make it better. important for mobile development.",
        time: "2022-2023",
        link: "https://reactjs.org/",
        role: "Frontend Development",
        logo: "/icons/GoogleLogo.jpeg"
    },
    {
        name: "Fizzy Co.",
        desc: "Selling Electronics. I started this company to sell electronics and gadgets online. It is a small business that I run.",
        time: "2025-Present", 
        link: "https://nextjs.org/",
        role: "Founder",
        logo: "/icons/FizzyLogo.png"
    }
];


export default function Experience() {
    return (
        <div className="w-2/3 mt-5">
            <h1 className="text-xl font-bold mb-3">Experience</h1>
            <div className="">
                {exp.map((experience) => (
                    <div key={experience.name} className="mb-2 border p-2 rounded-4xl flex flex-row justify-around items-center">
                        <Image src={experience.logo} alt={experience.name} width={40} height={40} className="w-12 h-12 flex items-center justify-center bg-black rounded-full mr-2 ml-2" />

                        <div className="pb-2 pt-1 w-3/4">
                            <p className='font-bold'>{experience.name}<span className='text-xs font-light'> ({experience.time})</span></p>
                            <p className='text-xs font-bold text-gray-500'> {experience.role}</p>
                            <p className=' font-normal text-sm hidden md:block text-zinc-500'>{experience.desc}</p>
                        </div>
                            <Link href={experience.link} className="bg-white text-black p-1 rounded-2xl border border-black 
                                                                    flex flex-row items-center justify-center m-1
                                                                    hover:filter hover:invert overflow-hidden  md:w-27 w-15 h-10 text-nowrap">
                                <Image src={LinkIcon} alt={experience.name} width={15} height={15} className='mr-1 w-3 h-3'/>
                                <p className='hidden md:block'>Check Out</p>
                            </Link>

                    </div>
                ))}
            </div>
        </div>
    );
}