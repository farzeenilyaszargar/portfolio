import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-background text-text">
      <Header/>
      <HeroSection/>
      <Experience/>

      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}
