import Footer from './../../components/footer';
import Header from './../../components/header';
import Articles from './articles';


export default function Home() {
  return (
    <div className='--font-mine flex flex-col items-center'>
      <Header />
      <Articles />
      <Footer />
    </div>
    
  );
}
