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

interface NewsArticle {
  id: string | number;
  title: string;
  summary: string;
  image: string;
  link?:string;
  skills?:string[];
}

interface AssignedArticle extends NewsArticle, GridSlot {}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "AI Revolutionizes Healthcare Diagnostics",
    summary: "New AI tools enhance early disease detection with unprecedented accuracy.",
    image: "/images/healthcare-ai.png",
    link: "https://example.com/project-three",
    skills:['JS', "Lol"],

  },
  {
    id: 2,
    title: "Soccer Team Wins Global Championship",
    summary: "A thrilling match ends with a historic victory for the underdog team.",
    image: "/images/soccer-champ.png",
  },
  {
    id: 3,
    title: "Climate Summit Yields New Policies",
    summary: "World leaders agree on ambitious carbon reduction targets.",
    image: "/images/climate-summit.png",
  },
  {
    id: 4,
    title: "Sci-Fi Blockbuster Breaks Records",
    summary: "A futuristic film captivates audiences, topping box office charts.",
    image: "/images/scifi-movie.png",
  },
  {
    id: 5,
    title: "Exoplanet Discovery Sparks Excitement",
    summary: "Astronomers find a potentially habitable planet in a nearby star system.",
    image: "/images/exoplanet-discovery.png",
  },
  {
    id: 6,
    title: "Tech Giant Unveils Smart Home Device",
    summary: "A new gadget promises seamless integration for smart homes.",
    image: "/images/smart-home.png",
  },
  {
    id: 7,
    title: "Art Festival Showcases Global Talent",
    summary: "Emerging artists display innovative works at annual event.",
    image: "/images/art-festival.png",
  },
  {
    id: 8,
    title: "Renewable Energy Surpasses Coal",
    summary: "Solar and wind energy overtake coal in global energy production.",
    image: "/images/renewable-energy.png",
  },
  {
    id: 9,
    title: "New VR Game Redefines Gaming",
    summary: "Immersive virtual reality game sets new standards in interactivity.",
    image: "/images/vr-game.png",
  },
  {
    id: 10,
    title: "Breakthrough in Quantum Computing",
    summary: "Scientists achieve a major milestone in quantum processing power.",
    image: "/images/quantum-computing.png",
  },
  {
    id: 11,
    title: "Wildlife Conservation Efforts Succeed",
    summary: "Endangered species show signs of recovery due to new initiatives.",
    image: "/images/wildlife-conservation.png",
  },
  {
    id: 12,
    title: "Fashion Week Highlights Sustainable Designs",
    summary: "Designers showcase eco-friendly collections at global event.",
    image: "/images/fashion-week.png",
  },
  {
    id: 13,
    title: "Space Tourism Takes Off",
    summary: "Commercial space flights become accessible to civilians.",
    image: "/images/space-tourism.png",
  },
  {
    id: 14,
    title: "AI-Powered Robots Enter Workforce",
    summary: "Robots assist in manufacturing with advanced AI capabilities.",
    image: "/images/ai-robots.png",
  },

];


// Bento Grid Component
export default function BentoGrid() {
  const assignedArticles: AssignedArticle[] = 
    newsArticles.map((article, index) => ({
      ...article,
      ...gridSlots[index % gridSlots.length],
  }));




   return (
       <div className="w-2/3 mt-5">
         {newsArticles.length === 0 ? (
           <p className="text-center text-gray-600">No articles available.</p>
         ) : (
   
           <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-5">
             {assignedArticles.slice(0, 20).map((article) => (
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