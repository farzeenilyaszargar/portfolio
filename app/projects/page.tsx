import Footer from "@/components/footer";
import Header from "@/components/header";
import { projects, type ProjProps } from "@/components/projectsList";
import Link from "next/link";
import Image from "next/image";

const leftItems = projects.filter((_, index) => index % 2 === 0);
const rightItems = projects.filter((_, index) => index % 2 !== 0);

export default function ProjectPage()
{
  return(
    <div className="">
        <Header/>
        <div className="w-screen flex flex-col justify-center items-center mt-10">
          <h1 className="font-bold text-2xl mb-10">projects</h1>
          <div className="w-2/3 grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              {
                leftItems.map((proj:ProjProps)=>(
                  <Link key={proj.id} href={`/projects/${proj.id}`} className="border rounded-2xl overflow-hidden">
                    <Image src={proj.img} alt={proj.title} width={200} height={100} className="min-w-full"/>
                    <p className="font-bold text-xl  m-1">{proj.title}</p>
                    <p className="text-zinc-400 m-1 mb-3">{proj.description}</p>
                  </Link>
                ))
              }
            </div>
            <div className="flex flex-col gap-5">
              {
                rightItems.map((proj:ProjProps)=>(
                  <Link key={proj.id} href={`/projects/${proj.id}`} className="border rounded-2xl overflow-hidden">
                    <Image src={proj.img} alt={proj.title} width={200} height={100} className="min-w-full"/>
                    <p className="font-bold text-xl  mt-1 mb-1">{proj.title}</p>
                    <p>{proj.description}</p>
                  </Link>
                ))
              }

            </div>
          
          </div>
        
        </div>
        <Footer/>
    </div>
  );
}