import { useState } from 'react';
import { motion } from 'framer-motion';

const  AnimatedButton = () => {
    const [motionVar, setMotionVar]= useState<number>(0);
    const [motionVar2, setMotionVar2]= useState<number>(74);


  return (
    <motion.div
        id= "sixthSegmentScroll" 
        onHoverStart={() => {
            setMotionVar2(250);
            setMotionVar(-70)
        }}
        onHoverEnd={() => {
            setMotionVar2(74);
            setMotionVar(0)
        }}

        className='hover:text-white relative flex w-[230px] items-center gap-x-[12px]'
        >

        <motion.div 
            id= "sixthSegmentScroll"
            animate={{width: motionVar2}}
            transition={{duration:0.5}}
            
            className='p-2 flex items-center justify-end size-[74px] bg-[#202229] rounded-[30px]'>
            
            <img loading= 'lazy' id= "sixthSegmentScroll" src="/images/vectors/vector-white.webp" alt="" className='z-10 sm:pr-4 pr-6 h-[15px]'/>
        </motion.div>

        <motion.h1 
            id= "sixthSegmentScroll"
            animate= {{x:motionVar}}
            transition={{duration:0.5}}
            className='pointer-events-none pr-[30px] absolute right-0 justify-end sm:text-[22px] text-sm font-medium'
            >

            Learn More
        </motion.h1>
    </motion.div>
  )
}

export default AnimatedButton;
