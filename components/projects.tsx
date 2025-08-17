
import Link from 'next/link';
import Image from "next/image";
import LinkIcon from '@/public/icons/link.png';
import { projects, type ProjProps } from "./projectsList";

const tailwindColors: string[] = [
    'text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500',
    'text-purple-500', 'text-indigo-500', 'text-pink-500', 'text-teal-500'
];

const getRandomTailwindColor = (): string => {
    const colorName: string = tailwindColors[Math.floor(Math.random() * 8)]
    return colorName;
};






export default function Projects() {
    

    return (
        <div className="lg:w-2/3 mt-7 flex flex-col items-center">
            <h1 className="text-xl font-bold mb-3 w-full">Projects</h1>

            {/*------------------------------------*/}



            <div className="w-full flex flex-row relative rounded-2xl overflow-hidden edge-fade">
                <div className='flex flex-row h-full marq gap-5 mr-5 mt-5 mb-5'>
                    {
                        projects.map((project: ProjProps, index) => (
                        <Link href={project.webAvail ? `${project.linkWeb}` : `/projects/${project.id}`} key={index} className={`border border-black rounded-xl p-1 flex flex-col items-center justify-around w-70  text-center`}>
                            <h2 className="font-black p-1 text-xl ml-3 mr-3 mt-1">{project.title}</h2>
                            <Image src={project.img} alt={project.title} width={300} height={150} className="object-cover object-center aspect-[2/1] w-full m-1 p-1 rounded-2xl" />
                            <p className="m-4 text-gray-500 text-center font-light">{project.description}</p>
                            <div className="flex flex-row min-w-full items-center justify-center flex-wrap  mb-5">
                                {
                                    project.skills.map((pSkills, index) => (
                                        <div key={index} className={`border rounded-2xl p-1 pl-2 pr-2 m-1 text-xs ${getRandomTailwindColor()}`}>{pSkills}</div>
                                    ))
                                }
                            </div>
                        </Link>
                        ))
                    }
                </div>
                 <div className='flex flex-row h-full  gap-5 marq mt-5 mb-5 mr-5'>
                    {
                        projects.map((project: ProjProps, index) => (
                        <Link href={project.webAvail ? `${project.linkWeb}` : `/projects/${project.id}`} key={index} className={`border border-black rounded-xl p-1 flex flex-col items-center justify-around w-70  text-center`}>
                            <h2 className="font-black p-1 text-xl ml-3 mr-3 mt-1">{project.title}</h2>
                            <Image src={project.img} alt={project.title} width={300} height={150} className="object-cover object-center aspect-[2/1] w-full m-1 p-1 rounded-2xl" />
                            <p className="m-4 text-gray-500 text-center font-light">{project.description}</p>
                            <div className="flex flex-row min-w-full items-center justify-center flex-wrap  mb-5">
                                {
                                    project.skills.map((pSkills, index) => (
                                        <div key={index} className={`border rounded-2xl p-1 pl-2 pr-2 m-1 text-xs ${getRandomTailwindColor()}`}>{pSkills}</div>
                                    ))
                                }
                            </div>
                        </Link>
                        ))
                    }
                </div>
                <div className='h-full w-full absolute opacity-10 bg-black z-5 top-0'>
                </div>
                <Link href={'/projects'} className='border border-white z-10 p-2 mt-10 rounded-2xl bg-black text-white text-center w-1/2 flex flex-row justify-center items-center mb-10 hover:invert absolute top-1/3 left-1/4'>
                    <Image src={LinkIcon} alt={'lol'} width={15} height={15} className='mr-1 w-4 h-4 ' />
                    Check Out All My Projects!

                </Link>
            </div>



            {/*------------------------------------*/}


            
        </div>



    );
};