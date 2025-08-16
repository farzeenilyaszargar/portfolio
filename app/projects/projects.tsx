import Image from 'next/image';
import Link from 'next/link';
import { projects, type ProjProps } from "@/components/projectsList";


interface GridSlot {
  colSpan: string;
  rowSpan: string;
}

const gridSlots: GridSlot[] = [
  { colSpan: 'md:col-span-3', rowSpan: 'md:row-span-3' }, // Large card (featured)
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' }, // Small card
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-3' }, // Tall card
  { colSpan: 'md:col-span-3', rowSpan: 'md:row-span-2' }, // Wide card
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' }, // Large card (featured)
  { colSpan: 'md:col-span-3', rowSpan: 'md:row-span-3' }, // Small card
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-3' }, // Tall card
  { colSpan: 'md:col-span-3', rowSpan: 'md:row-span-2' }, // Wide card
];


interface AssignedArticle extends ProjProps, GridSlot { }




// Bento Grid Component
export default function BentoGrid() {
  const assignedArticles: AssignedArticle[] =
    projects.map((project, index) => ({
      ...project,
      ...gridSlots[index % gridSlots.length],
    }));




  return (
    <div className="w-2/3 mt-5">
      {projects.length === 0 ? (
        <p className="text-center text-gray-600">No projects available.</p>
      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-5 h-fit">
          {assignedArticles.slice(0, 20).map((projects) => (

            <div
              key={projects.id}
              className={`rounded-xl border border-black p-4  ${projects.colSpan} ${projects.rowSpan}`}
            >
              <Link href={`/projects/${projects.id}`} className='overflow-hidden flex flex-col justify-between '>

                <Image
                  src={projects.img}
                  alt={projects.title}
                  width={400}
                  height={200}
                  className="w-auto h-auto object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold truncate">{projects.title}</h3>
                <p className="text-sm text-gray-600 italic">→ {projects.description}</p>
                
              </Link>

            </div>

          ))
          }

        </div>

      )}
    </div>
  );
}