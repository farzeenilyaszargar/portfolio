import Footer from "@/components/footer";
import Header from "@/components/header";
import Game from "@/components/game";

export default function Flappy()
{
    return(
        <div className="flex flex-col items-center">
            <Header/>
            <Game/>
            <Footer/>
        </div>
    );
}