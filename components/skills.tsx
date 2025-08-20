
import React from "react";
import { siJavascript, siReact, siNextdotjs, siTailwindcss, siC, siPython, siRust, siMysql, siFigma, siPandas, siSupabase, siGo, 
      siTypescript, siRaspberrypi, siGraphql, siGithub, siCss, siPostgresql, siTensorflow, siDocker, siFastapi } from "simple-icons/icons";

type IconDef = { title: string; path: string };

const ICONS: IconDef[] = [
  { title: "JavaScript", path: siJavascript.path },
  { title: "React", path: siReact.path },
  { title: "Next.js", path: siNextdotjs.path },
  { title: "Tailwind CSS", path: siTailwindcss.path },
  { title: "C", path: siC.path },
  { title: "Python", path: siPython.path },
  { title: "Rust", path: siRust.path },
  { title: "MySQL", path: siMysql.path },
  { title: "Figma", path: siFigma.path },
  { title: "pandas", path: siPandas.path },
  { title: "Supabase", path: siSupabase.path },
  { title: "MySQL", path: siGo.path },
  { title: "Figma", path: siTypescript.path },
  { title: "Raspberry Pi", path: siRaspberrypi.path },
  { title: "GraphQL", path: siGraphql.path },
  { title: "CSS", path: siCss.path },
  { title: "Github", path: siGithub.path },
  { title: "PostgresSQL", path: siPostgresql.path },
  { title: "TensorFlow", path: siTensorflow.path },
  { title: "Docker", path: siDocker.path },
  { title: "FastAPI", path: siFastapi.path },

];



function BrandIcon({
  title, path, size = 24, color, className = "",
}: { title: string; path: string; size?: number; color?: string; className?: string }) {
  return (
    <svg
      role="img"
      aria-label={title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={color ? { color } : undefined}   // ← only apply if provided
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path d={path} fill="currentColor" />   {/* color is driven by CSS/currentColor */}
    </svg>
  );
}





export default function Skills()
{


    return (
        <div className="w-2/3 mt-5">
            <h1 className="text-xl font-bold mb-3">Skills</h1>
            <div className=" mt-3 flex flex-row flex-wrap justify-center overflow-hidden  ">
            {
            
                ICONS.map((skill, id) => (
                    <div key={id} 
                    className={`flex flex-row items-center w-fit min-w-fit ml-1 mr-1 border 
                                rounded-2xl mt-2 p-2 bg-white transition-colors duration-200 hover:bg-black hover:text-white 
                                `}>
                        <BrandIcon  key={skill.title} {...skill} size={20} />
                        <p className="ml-2 text-sm">{skill.title}</p>
                  
                    </div>
                    
                ))
            }

            

            </div>
        </div>

        
            
        
    );
}





