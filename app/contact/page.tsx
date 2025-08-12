import Link from 'next/link';
import Image from 'next/image';
import githubIcon from './../../public/github.svg';
import linkedinIcon from './../../public/linkedin.svg';
import Header from './../../components/header';
import Footer from './../../components/footer';

export default function Home() {
  return (
    <div className='--font-mine flex flex-col items-center'>
      <Header />
      <div className='h-160 flex justify-center items-center '>
        <div className=' border border-black bg-white text-black flex flex-col p-5  rounded-2xl justify-center items-center hover:filter hover:invert'>
          <h1 className='font-black text-2xl mb-2'>contact me</h1>
          <div className='flex flex-row items-center gap-1 w-full '>
            <p className='w-1/5 text-right font-bold'>email:</p>
            <p className='w-4/5'>farzeenilyaszargar@gmail.com</p>
          </div>
          <div className='flex flex-row items-center gap-1 w-full'>
            <p className='w-1/5 text-right font-bold'>phone:</p>
            <p className='w-4/5'> (+91) 9818960083</p>
          </div>
          <div className='flex flex-row items-center gap-2 mt-2'>
            <Link href="https://www.github.com/farzenilyaszargar"><Image src={githubIcon} alt='github'></Image></Link>
            <Link href="/"><Image src={linkedinIcon} alt='linkedin'></Image></Link>
          </div>
        </div>
        

      </div>
      <Footer />


    </div>


  );
}
