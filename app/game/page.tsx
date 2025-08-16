import Footer from "@/components/footer";
import Header from "@/components/header";
import DinoGame from "./game";

export default function Game()
{
  return(
    <div className="--font-mine flex flex-col items-center ml-20 mr-20">
      <Header/>
      <div className="mt-40 mb-50">
        <DinoGame/>
      </div>
      <Footer/>
    </div>
  );
}