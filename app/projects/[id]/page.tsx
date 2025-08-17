import Footer from "@/components/footer";
import Header from "@/components/header";
import { projects, type ProjProps } from "@/components/projectsList";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


const tailwindColors: string[] = [
    'text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500',
    'text-purple-500', 'text-indigo-500', 'text-pink-500', 'text-teal-500'
];

const getRandomTailwindColor = (): string => {
    const colorName: string = tailwindColors[Math.floor(Math.random() * 8)]
    return colorName;
};




export default function Proj({ params }: { params: { id: string } }) {
    const proj = projects.find((it) => it.id === params.id);
    if (!proj) return notFound();
    return (
        <div className='--font-mine flex flex-col items-center justify-center ml-20 mr-20'>
            <Header />
            <div className="w-2/3 flex flex-col justify-center items-center  mt-10">
                <h1 className="font-black text-2xl mt-5">{proj.title}</h1>
                <p className="text-zinc-500 font-light mb-2">{proj.description}</p>
                {proj.linkWeb
                    ? <Link href={proj.linkWeb} className="border rounded-xl pl-2 pr-2 bg-white transition-all duration-100 ease-in hover:invert">Check Out Here!</Link>
                    : <></>}
                
                <Image src={proj.img} alt={proj.title} width={200} height={100} className="w-2/3 rounded-lg mt-5 edge-fade">

                </Image>

                
                <div className="flex flex-row mt-5">

                {
                    proj.skills.map((skill) => (
                                <p className={`border rounded-xl pl-2 pr-2 bg-white ml-2 mr-2 ${getRandomTailwindColor()}`}>{skill}</p>
               
                ))
                }
                </div>

                <p className="m-7">{proj.fullInfo}</p>


                

             




            </div>
            <Footer />

        </div>
    );
}