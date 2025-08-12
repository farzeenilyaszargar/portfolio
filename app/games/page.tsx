import Link from 'next/link';
import Footer from './../../components/footer';
import Header from './../../components/header';

export default function Home() {
  return (
    <div className='--font-mine flex flex-col items-center '>
      <Header />
      <div className='h-155 w-3/4 flex justify-center items-center  mt-5 bg-[url("/cp-bg.jpg")] bg-contain bg-no-repeat bg-center'>
        <div className=' w-2/5 flex flex-col pt-5 pb-5 rounded justify-center items-center text-center border absolute top-54 h-65'>
          <h1 className='font-black text-2xl mb-2  p-2 rounded-2xl'>games</h1>
          <Link href="/games/snake" className='w-full text-md bg-white hover:font-bold hover:border rounded-2xl p-2'>snake eater</Link>
          <Link href="/games/flappy" className='w-full text-md bg-white hover:font-bold  hover:border rounded-2xl p-2'>flappy bird</Link>
          <Link href="/games/pong" className='w-full text-md bg-white hover:font-bold  hover:border rounded-2xl p-2'>ping pong</Link>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}
