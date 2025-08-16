import Footer from '../../components/footer';
import Header from '../../components/header';
import Articles from './articles_new';


export default function Home() {
  return (
    <div className='--font-mine flex flex-col items-center ml-20 mr-20'>
      <Header />
      <h1 className='font-black text-2xl mt-5'>projects</h1>

      <Articles />
      <Footer />
    </div>
    
  );
}
