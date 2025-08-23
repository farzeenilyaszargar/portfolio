import Footer from "@/components/footer";
import Header from "@/components/header";
import { projects, type ProjProps } from "@/components/projectsList";
import Link from "next/link";
import Image from "next/image";

const leftItems = projects.filter((_, index) => index % 2 === 0);
const rightItems = projects.filter((_, index) => index % 2 !== 0);



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





export default function ProjectPage() {
  return (
    <div className="">
      <Header />
      <div className="w-screen flex flex-col justify-center items-center mt-10">
        <h1 className="font-black text-2xl mb-10">projects</h1>
        <div className="w-2/3 grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex flex-col gap-5">
            {
              leftItems.map((proj: ProjProps) => (
                <Link key={proj.id} href={`/projects/${proj.id}`} className="border rounded-2xl overflow-hidden">
                  <div className="relative ">
                    <Image src={proj.img} alt={proj.title} width={200} height={100} className="min-w-full" />
                    <div className="absolute bottom-0 left-0 w-full h-10 "></div>
                  </div>
                  <p className="font-bold text-xl text-center m-1">{proj.title}</p>
                  <p className="text-zinc-400 pl-5 pr-5 mb-2 text-justify">{proj.description}</p>
                  <div className="flex flex-row w-full justify-center items-center flex-wrap">
                    {
                      proj.skills.map((skill) => (
                        <p key={skill} className={`border rounded-xl pl-2 pr-2 bg-white ml-2 mr-2 mb-2 ${getRandomTailwindColor()}`}>{skill}</p>

                      ))
                    }
                  </div>
                </Link>
              ))
            }
          </div>
          <div className="flex flex-col gap-5">
            {
              rightItems.map((proj: ProjProps) => (
                <Link key={proj.id} href={`/projects/${proj.id}`} className="border rounded-2xl overflow-hidden">
                  <div className="relative ">
                    <Image src={proj.img} alt={proj.title} width={200} height={100} className="min-w-full " unoptimized/>
                    <div className="absolute bottom-0 left-0 w-full h-10"></div>
                  </div>
                  <p className="font-bold text-xl text-center m-1">{proj.title}</p>
                  <p className="text-zinc-400 pl-5 pr-5 mb-2 text-justify">{proj.description}</p>
                  <div className="flex flex-row w-full justify-center items-center flex-wrap">
                    {
                      proj.skills.map((skill) => (
                        <p key={skill} className={`border rounded-xl pl-2 pr-2 bg-white ml-2 mr-2 mb-2 ${getRandomTailwindColor()}`}>{skill}</p>

                      ))
                    }
                  </div>
                </Link>
              ))
            }

          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
}