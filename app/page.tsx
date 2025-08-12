import Projects from './../components/projects';
import Experience from './../components/experience';
import Skills from './../components/skills';
import Footer from './../components/footer';
import Main from './../components/main';
import Header from './../components/header';

export default function Home() {
  return (
    <div className='--font-mine flex flex-col items-center justify-center ml-20 mr-20'>
      <Header />
      <Main />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
    
  );
}
