
import Image from "next/image";
import Link from "next/link";



export default function HeroSection()
{
    return(
        <div className="rounded flex flex-col mt-7 w-2/3 p-2 ">
            <div className='flex flex-row justify-between items-top'>
                <div>
                    <h1 className='font-normal text-3xl'>I&apos;m a</h1>
                    {/*<Image src='/soft-dev.gif' alt='gif' width={400} height={300}></Image>*/}
                    <h1 className='font-black text-3xl hover:border-b-2  transition-all duration-50'>Software Developer</h1>

                    <div className='flex flex-row items-center gap-1'>
                        <Image src='/icons/location-pin.png' alt='location-pin' width={15} height={15} className="hover:scale-110"></Image>
                        <p>Delhi, India</p>
                    </div>
                     </div>
                <div className='flex flex-row'>
                    <Link href="https://github.com/farzeenilyaszargar">
                        <Image src={'/icons/github.svg'} alt='github' className={`w-10 h-10  hover:scale-110  invert-[var(--my-invert)]`} width={25} height={25} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/farzeenilyaszargar/">
                        <Image src={'/icons/linkedin.svg'} alt='linkedin' className='w-10 h-10 hover:scale-110 invert-[var(--my-invert)]' width={25} height={25} />
                    </Link>
                </div>
                
            </div>


        </div>
    );
}