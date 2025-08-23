import Footer from "@/components/footer";
import Header from "@/components/header";
import { projects } from "@/components/projectsList";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";



const tailwindColors: string[] = [
    "text-red-500",
    "text-blue-400",
    "text-green-600",
    "text-yellow-300",
    "text-purple-700",
    "text-pink-500",
    "text-indigo-400",
    "text-teal-600",
    "text-orange-500",
    "text-cyan-400",
    "text-lime-600",
    "text-emerald-500",
    "text-violet-600",
    "text-rose-400",
    "text-fuchsia-500",
    "text-sky-600",
    "text-amber-400",
    "text-stone-500",
    "text-gray-700",
    "text-zinc-600",
];

const getRandomTailwindColor = (): string => {
    const colorName: string = tailwindColors[Math.floor(Math.random() * tailwindColors.length)]
    return colorName;
};




export default async function ProjectPage({ params, }: { params: Promise<{ id: string }>; }) {
    const { id } = await params;
    const proj = projects.find((p) => p.id === id);
    if (!proj) return notFound();

    return (
        <div className='flex flex-col items-center justify-between min-h-screen m-0 p-0'>
            <Header />
            <div className="w-2/3 flex flex-col justify-center items-center  mt-10">
                <h1 className="font-black text-2xl mt-5">{proj.title}</h1>
                <p className="text-zinc-500 font-light mb-2">{proj.description}</p>
                {proj.linkWeb
                    ? <Link href={proj.linkWeb} className="border rounded-xl pl-2 pr-2 bg-white transition-all duration-100 ease-in hover:invert">Check Out Here!</Link>
                    : <></>}

                {
                    proj.users ?
                        <li className="border rounded-full mt-3 pl-2 pr-2 text-green-500">Users: {proj.users}</li>
                        :
                        <></>
                }
                <Image src={proj.img} alt={proj.title} width={200} height={100} className="w-3/4 rounded-lg mt-5 border border-black " unoptimized/>







                <div className="flex flex-row mt-5">

                    {
                        proj.skills.map((skill) => (
                            <p key={skill} className={`border rounded-xl pl-2 pr-2 bg-white ml-2 mr-2 ${getRandomTailwindColor()}`}>{skill}</p>

                        ))
                    }
                </div>

                <p className="w-9/10 mt-3 text-justify">{proj.fullInfo}</p>

                {
                    proj.features?.length ? (
                        <div className="mt-5 ">
                            <h1 className="text-2xl font-bold text-center">FEATURES</h1>
                            <ul className="list-disc ml-5 mt-3">
                                {proj.features.map((feature, index) => (
                                    <li key={index} className="text-zinc-500">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ) : <></>
                }



                

                {

                    proj.moreImgs?.map((img, index) => (
                        <Image key={index+1} src={img} alt={`${proj.title} image ${index + 1}`} width={200} height={100} className="w-3/4 rounded-lg mt-5 border border-black" />
                    ))




                }








            </div>
            <Footer />

        </div>
    );
}
