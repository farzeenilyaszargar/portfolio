import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Flappy()
{
    return(
        <div className="flex flex-col items-center">
            <Header/>
            <div className="h-160 flex justify-center items-center">
                <h1>Coming Soon...</h1>
            </div>
            <Footer/>
        </div>
    );
}