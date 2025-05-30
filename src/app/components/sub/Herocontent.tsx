 "use client"  ;
 import {motion} from 'framer-motion'
 import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image';
 
 function HeroContent() {
   return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
        
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8 px] px-[7 px] border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className='Welcome-text text-[13px] '>Frontend Developer</h1>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5 )}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w--auto h-auto'>
                <span>
                    Providing
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
                    project Experience
                </span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px]'>
                I&apos;m <span className='font-xxl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6d43ef] to-[#ff41b1]'>Shaik Tajuddin</span> a frontend developer with a passion for creating beautiful and functional user interfaces.
                Checkout my projects, skills and let&apos;s work together! 
            </motion.p>

            <motion.a
            variants={slideInFromLeft(1)}
            className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
                Learn More!
            </motion.a> 
        </div>

        <motion.div
            variants={slideInFromRight(0.8)}
            className='w-full h-full flex justify-center items-center bg-purple'>
                <Image src="/mainIconsdark.svg" alt="Work Icons" width={650} height={650} />; 
        </motion.div> 

    </motion.div>
   )
 }
 
 export default HeroContent
 