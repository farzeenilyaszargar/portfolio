import Link from 'next/link';
import Image from 'next/image';

import LinkIcon from './../public/link.png';

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
        <div className="md:w-2/3 mt-5">
            <h1 className="text-xl font-bold mb-3">Experience</h1>
            <div className="">
                {exp.map((experience) => (
                    <div key={experience.name} className="mb-2 border border-black p-2 rounded flex flex-row justify-around items-center">
                        <div className='flex flex-row items-center'>
                            <Image src={experience.logo} alt={experience.name} width={40} height={40} className="w-12 h-12 flex items-center justify-center bg-black" />
                        </div>

                        <div className="w-3/5  ">
                            <p className='font-black'>{experience.name}<span className='text-xs font-light'> ({experience.time})</span></p>
                            <p className='text-xs font-bold text-gray-500'> {experience.role}</p>
                            <p className='ml-2 font-normal text-sm'>{experience.desc}</p>
                        </div>
                        <div className='md:w-27 w-15 h-10 text-nowrap'>
                            <Link href={experience.link} className="bg-white text-black p-1 rounded-2xl border border-black 
                                                                    flex flex-row items-center justify-center 
                                                                    hover:filter hover:invert overflow-hidden h-full">
                                <Image src={LinkIcon} alt={experience.name} width={15} height={15} className='mr-1  w-3 h-3'/>
                                <p className='hidden md:block'>Check Out</p>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}