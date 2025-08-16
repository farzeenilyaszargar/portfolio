import Link from 'next/link';
import Footer from './../../components/footer';
import Header from './../../components/header';

export default function Home() {
  return (
    <div className='--font-mine flex flex-col items-center '>
      <Header />
      
      <Footer />
    </div>
    
  );
}
