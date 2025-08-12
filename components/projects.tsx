
import Link from 'next/link';
import Image from "next/image";
import LinkIcon from './../public/link.png';


interface ProjProps {
    title: string;
    description: string;
    link: string;
    img: string;
    skills: string[];
    users?: number;
}

const projects: ProjProps[] = [
    {
        title: "Coding Games in JS",
        description: "i made snake, flappy bird and ping pong game in JS. you can check it out on this website",
        link: "/games",
        img: "/imgs/",
        skills: ["JavaScript", "Next.js"]
    },
    {
        title: "Basic Music Player",
        description: "i made this music player to learn rust.",
        link: "https://example.com/project-two",
        img: "/imgs/music.png",
        skills: ["Rust"]

    },
    {
        title: "Security System Using Raspberry Pi",
        description: "integrating sensors, camera and microprocessor to make a functioning security system.",
        link: "https://example.com/project-three",
        img: "/imgs/",
        skills: ["Python"]

    },
    {
        title: "Lunoir Wear",
        description: "a marketplace for selling my tshirts.",
        link: "https://www.lunoirwear.com/",
        img: "/imgs/shirt.webp",
        skills: ["Next.js", "TailwindCSS", "TypeScript"],
        users: 98

    },
    {
        title: "NEXTPOST.",
        description: "an ai powered web app where you get constant updates and can rant anonymously.",
        link: "https://example.com/project-two",
        img: "/https://via.placeholder.com/150",
        skills: ["Next.js", "TailwindCSS"],
        users: 23698

    },
    {
        title: "Operate OS with AI",
        description: "just give it a voice command and it does the tasks for you.",
        link: "https://example.com/project-three",
        img: "/imgs/jarvis.png",
        skills: ["HTML", "CSS", "JavaScript"]

    }
]


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
        <div className="lg:w-2/3 mt-7">
            <h1 className="text-xl font-bold mb-3">Projects</h1>

                <div className="w-full grid  md:grid-cols-2 xs:grid-cols-1 gap-5 ">

                    {
                        projects.map((project: ProjProps, index) => (
                            <Link href={project.link} key={index} className={`border border-black rounded flex flex-col items-center justify-between min-w-full shadow-md `}>
                                <Image src={project.img} alt={project.title} width={300} height={150} className="min-w-full" />
                                <h2 className="font-bold p-1 text-shadow-md">{project.title}</h2>
                                <p className="m-4 text-gray-500">{project.description}</p>

                                <div className="flex flex-row min-w-full items-center justify-center flex-wrap  ">
                                    {

                                        project.skills.map((pSkills, index) => (

                                            <div key={index} className={`border rounded-2xl p-1 pl-2 pr-2 m-1 text-xs ${getRandomTailwindColor()}`}>{pSkills}</div>
                                        ))
                                    }
                                </div>
                                <div className="border text-white bg-black rounded-2xl m-2 p-1 min-w-2/3 flex flex-row 
                                                                    hover:filter hover:invert
                                                                    items-center justify-center mt-2 mb-4 h-10 
                                                                        ">
                                    <Image src={LinkIcon} alt={project.title} width={15} height={15} className='mr-1 w-4 h-4 filter invert' />
                                    <p>View Project</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>

            </div>
            


    );
};