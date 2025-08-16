
import Link from 'next/link';
import Image from "next/image";
import LinkIcon from './../public/link.png';
import { projects, type ProjProps } from "./projectsList";
import ProjectsDisp from "./projectsDisp";


const tailwindColors: string[] = [
    'text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500',
    'text-purple-500', 'text-indigo-500', 'text-pink-500', 'text-teal-500'
];

const getRandomTailwindColor = (): string => {
    const colorName: string = tailwindColors[Math.floor(Math.random() * 8)]
    return colorName;
};


const cards = projects.map((project: ProjProps, index) => (

                        <Link href={project.webAvail ? `${project.linkWeb}` : `/projects/${project.id}`} key={index} className={`border border-black rounded-xl p-1 flex flex-col items-center h-100 justify-around min-w-full text-center`}>
                            <h2 className="font-black p-1 text-xl ml-3 mr-3 mt-1">{project.title}</h2>
                            
                            <Image src={project.img} alt={project.title} width={300} height={150} className="object-cover object-center aspect-[2/1] w-full m-1 p-1 rounded-2xl
                                                                                                            
                            " />
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


export default function Projects() {
    return (
        <div className="lg:w-2/3 mt-7 flex flex-col items-center">
            <h1 className="text-xl font-bold mb-3 w-full">Projects</h1>

            {/* <div className="w-full grid  md:grid-cols-2 xs:grid-cols-1 gap-5 ">

                {cards}
            </div> */}


            <ProjectsDisp 
                moveMs={1000}
                itemWidth={260}
                itemHeight={420}
                gap={24}
                shiftPx={16}
                pauseMs={1000}>
                {cards}
            </ProjectsDisp>

            
            <Link href={'/projects'} className='border p-2 mt-10 rounded-2xl bg-white text-center w-1/2 flex flex-row justify-center items-center mb-10 hover:invert'>
                <Image src={LinkIcon} alt={'lol'} width={15} height={15} className='mr-1 w-4 h-4 ' />
                Check Out All My Projects!
            
            </Link>
        </div>



    );
};