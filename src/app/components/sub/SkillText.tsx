'use client'

import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

const SkillText = () => {
   return (
     <div className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8 px] px-[7 px] border border-[#7042f88b] opacity-[0.9]'>
        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
        <h1 className='Welcome-text text-[13px] '>
            Think Better with React.js 19 
        </h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Making Websites with Modern Technologies
        </motion.div>
     </div>
   )
 }
 
 export default SkillText
 