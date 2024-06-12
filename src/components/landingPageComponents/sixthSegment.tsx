import { useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import {visibleComponent } from '../../animation_variants';


import FirstSixthSegment from './sixthSegmentSubComponents/firstSixthSegment'

import ThirdSixthSegment from './sixthSegmentSubComponents/thirdSixthSegment'
import FourthSixthSegment from './sixthSegmentSubComponents/fourthSixthSegment'
import SecondSixthSegment from './sixthSegmentSubComponents/secondSixthSegment';


const SixthSegment = () => {
    const scrollRef= useRef<HTMLDivElement>(null);
    
    let mouseX:number= 0;
    let mouseY:number= 0;



    useEffect(() => {
        const scrollMove = (event: WheelEvent) => {
          
          if (scrollRef.current){
            
            const x= window.scrollX + mouseX;
            const y= window.scrollY + mouseY;

            const elementUnderCursor= document.elementsFromPoint(x, y)[0];
        
            if (elementUnderCursor.id === "sixthSegmentScroll") {
  
                const {deltaX, deltaY} = event;
                scrollRef.current!.scrollLeft+= deltaX;
                scrollRef.current!.scrollTop+= deltaY;
                // console.log("sixthSegmentScroll");
                
            }     
            
          }
         
    
        }


        const mouseMove= (event: MouseEvent) => {
            mouseX= event.clientX;
            mouseY= event.clientY;

        }


        window.addEventListener("wheel", scrollMove);
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener('wheel', scrollMove);
          window.removeEventListener("mousemove", mouseMove);
      }
      }, [window.innerHeight, window.innerWidth ]);




    
  return (
    <motion.div 
    initial= "offscreen"
    whileInView= "onscreen"
    variants={visibleComponent}
        id= "sixthSegmentScroll"
        
        className='-skew-y-3 w-full lg:px-0 px-6 md:pb-[187px] bg-gradient-to-b from-transparent to-[#EDEFFF]'>

                <motion.div 
                    id= "sixthSegmentScroll"
                    ref={scrollRef}
                    
                    className='skew-y-3 overflow-hidden lg:py-4 grid grid-flow-col h-full w-full items-center'>
                
                    <FirstSixthSegment />

                    <SecondSixthSegment />

                    <ThirdSixthSegment /> 

                    <FourthSixthSegment />          


                </motion.div>

    </motion.div>
  )
}

export default SixthSegment