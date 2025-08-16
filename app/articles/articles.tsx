import Image from 'next/image';

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

interface Article {
  id: string | number;
  title: string;
  summary: string;
  image: string;
}

interface AssignedArticle extends Article, GridSlot {}

const articles: Article[] = [
  {
    id: 1,
    title: "My Personal Goals",
    summary: "things i want to get done with.",
    image: "/images/healthcare-ai.png",
  },
  {
    id: 2,
    title: "Crazy Things I Did",
    summary: "what a crazy life.",
    image: "/images/soccer-champ.png",
  },
  {
    id: 3,
    title: "Journey of Superflights",
    summary: "when ideas take flight.",
    image: "/images/climate-summit.png",
  },
  {
    id: 4,
    title: "Sci-Fi Dreams",
    summary: "a futuristic city is what i envision for every city. indeed shall all cities be futuristic.",
    image: "/images/scifi-movie.png",
  },
  
];


export default function BentoGrid() {
  const assignedArticles: AssignedArticle[] = 
    articles.map((article, index) => ({
      ...article,
      ...gridSlots[index % gridSlots.length],
  }));




   return (
       <div className="w-2/3 mt-5">
          <h1 className='font-black text-2xl mb-5 text-center '>articles</h1>
        
         {articles.length === 0 ? (
           <p className="text-center text-gray-600">No articles available.</p>
         ) : (
   
           <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-5">
             {assignedArticles.slice(0, articles.length).map((article) => (
               <div
                 key={article.id}
                 className={`rounded-xl border border-black p-4 shadow-sm hover:shadow-md transition-shadow ${article.colSpan} ${article.rowSpan}`}
               >
                 <Image
                   src={article.image}
                   alt={article.title}
                   width={400}
                   height={200}
                   className="w-full h-auto object-cover rounded-md mb-2"
                 />
                 <h3 className="text-lg font-semibold truncate">{article.title}</h3>
                 <p className="text-sm text-gray-600 ">{article.summary}</p>
               </div>

             ))}
           </div>
         )}
       </div>
     );
}