import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import {visibleComponent } from '../../animation_variants';


import FirstSixthSegment from './sixthSegmentSubComponents/firstSixthSegment'

import ThirdSixthSegment from './sixthSegmentSubComponents/thirdSixthSegment'
import FourthSixthSegment from './sixthSegmentSubComponents/fourthSixthSegment'
import SecondSixthSegment from './sixthSegmentSubComponents/secondSixthSegment';


const SixthSegment = () => {
    const [emblaRef] = useEmblaCarousel({dragFree: true});
    



    
  return (
    <motion.div 
    initial= "offscreen"
    whileInView= "onscreen"
    variants={visibleComponent}
        id= "sixthSegmentScroll"
        
        className='-skew-y-3 w-full lg:px-0 px-6 md:pb-[187px] bg-gradient-to-b from-transparent to-[#EDEFFF]'>
            
            <div ref={emblaRef} id= "sixthSegmentScroll"   className='skew-y-3 overflow-hidden'>
                <motion.div 
                    id= "sixthSegmentScroll"
                    
                    className='lg:py-4 grid grid-flow-col h-full w-full items-center'>
                
                    <FirstSixthSegment />

                    <SecondSixthSegment />

                    <ThirdSixthSegment /> 

                    <FourthSixthSegment />          


                </motion.div>
            </div>

    </motion.div>
  )
}

export default SixthSegment