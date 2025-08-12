import Link from 'next/link';
import Image from 'next/image';

import githubIcon from './../public/github.svg';
import instagramIcon from './../public/insta.svg';
import linkedinIcon from './../public/linkedin.svg';


export default function Main()
{
    return (
        <div className="rounded flex flex-col mt-7 md:w-2/3 p-2 ">
            <div className='flex flex-row justify-between items-top'>
                <div>
                    <h1 className='font-black text-3xl'>I'm a</h1>
                    {/*<Image src='/soft-dev.gif' alt='gif' width={400} height={300}></Image>*/}
                    <h1 className='font-black text-3xl'>Software Developer</h1>

                    <div className='flex flex-row items-center gap-1'>
                        <Image src='/location-pin.png' alt='location-pin' width={15} height={15}></Image>
                        <p>Delhi, India</p>
                    </div>
                     </div>
                <div className='flex flex-row'>
                    <Link href="/"><Image src={githubIcon} alt='github' className='w-10 h-10'></Image></Link>
                    <Link href="/"><Image src={instagramIcon} alt='instagram' className='w-10 h-10'></Image></Link>
                    <Link href="/"><Image src={linkedinIcon} alt='linkedin' className='w-10 h-10'></Image></Link>
                </div>
                
            </div>


        </div>
    );
}