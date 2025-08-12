import Image from "next/image";

interface SkillProps {
    name: string;
    icon: string;
}

const skills1: SkillProps[] = [
    { name: "JavaScript", icon: "/icons/js.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "Next.js", icon: "/icons/next.png" },
    { name: "CSS", icon: "/icons/css-3.png" },
    { name: "HTML", icon: "/icons/html.png" },
    { name: "C/C++", icon: "/icons/c.png" },
    { name: "Python", icon: "/icons/python.png" },
    { name: "Rust", icon: "/icons/rust.png" },
    { name: "php", icon: "/icons/php.png" },
    { name: "Java", icon: "/icons/java.png" },
    { name: "MySQL", icon: "/icons/mysql.png" },
    { name: "Figma", icon: "/icons/figma.png" },
    { name: "AI Technologies", icon: "/icons/php.png" },
    { name: "TensorFlow", icon: "/icons/java.png" },
    { name: "Technologies", icon: "/icons/php.png" },
    { name: "sdsadas", icon: "/icons/java.png" },
];






export default function Skills()
{
    return (
        <div className="md:w-2/3 mt-5">
            <h1 className="text-xl font-bold mb-3">Skills</h1>
            <div className=" mt-3 flex flex-row flex-wrap justify-center overflow-hidden ">
            {
            
                skills1.map((skill) => (
                    <div key={skill.name} className="flex flex-row items-center w-fit min-w-fit ml-1 mr-1 border 
                                                    rounded-2xl mt-2 p-2 bg-white
                                                    hover:filter hover:invert 
                                                    ">
                        <Image src={skill.icon} alt={skill.name} width={20} height={20} className="w-5 h-5 mr-1" />
                        <p className="w-auto flex flex-row items-center">{skill.name}</p>
                    </div>
                    
                ))
            }

            </div>
        </div>

        
            
        
    );
}





