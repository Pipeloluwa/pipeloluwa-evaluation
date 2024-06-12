import { motion } from 'framer-motion'
import { visibleComponent } from '../../animation_variants';

const ThirdSegment = () => {
  return (
    <motion.div 
    initial= "offscreen"
    whileInView= "onscreen"
    variants={visibleComponent}
        className='-mt-[160px] py-20 flex w-full overflow-hidden'>
        <div className='relative flex w-full bg-[#202229] -skew-y-3'>
            <img loading= 'lazy' alt="vector"  src="/images/vectors/arrow.webp" className='absolute right-0 h-[175px]'/>

            <div className='page-margin'>
                <div className='flex lg:flex-row flex-col w-full xl:justify-start justify-between xl:gap-x-[190px] lg:gap-x-[70px] skew-y-3 py-[177px]'>
                    
                    <div className='flex lg:flex-col md:flex-row flex-col lg:gap-x-0 gap-x-12 md:gap-y-[44px] gap-y-6'>
                        
                        <div className='flex flex-col lg:w-[379px] w-full font-bold text-white'>
                            <h1 className='lg:text-[54px] sm:text-[40px] text-[35px]'>How it worked</h1> 

                            <div className='-mt-3 flex items-center lg:text-[54px] text-[40px]'>
                                <h1 className='flex lg:items-start items-center'>
                                    for Jason

                                    <div className='mx-2 lg:hidden flex lg:size-[56px] size-[41px] overflow-hidden'>
                                        <img loading= 'lazy' alt='avatar' src='/images/avatars/avatar2.webp' className='h-full w-full rounded-full object-cover'/>
                                    </div>

                                    <h1 className='lg:hidden flex'>
                                        at
                                    </h1>
                                </h1>

                                <div className='lg:flex hidden mx-2 lg:size-[56px] overflow-hidden'>
                                    <img loading= 'lazy' alt='avatar' src='/images/avatars/avatar2.webp' className='h-full w-full rounded-full object-cover'/>
                                </div>

                                <h1 className='lg:flex hidden'>
                                    at
                                </h1>
                            </div>

                            <img loading= 'lazy' alt=""  src="/images/vectors/groove.webp" className='mt-2 lg:w-[192px] md:w-[172px] w-[152px]'/>
                        </div>


                        <div className='xl:w-[461px] lg:w-auto lg:mr-0 lg:pt-0 md:pt-4 text-justify lg:text-[22px] md:text-[18px] text-white/80 font-[400]'>
                            Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.


                            <div className='lg:hidden md:flex hidden gap-x-[16px] pt-2'>
                                <div className='flex items-center justify-center size-[49.79px] bg-white rounded-[20.19px]'>
                                    <img loading= 'lazy' alt="" src="/images/vectors/vector-purple.webp" className='h-[10.09px]'/>
                                </div>

                                <div className='flex items-center justify-center size-[49.79px] bg-white rounded-[20.19px]'>
                                    <img loading= 'lazy' alt="" src="/images/vectors/vector-purple.webp" className='rotate-180 h-[10.09px]'/>
                                </div>
                            </div>
                        </div>


                        <div className='lg:flex md:hidden flex gap-x-[16px]'>
                            <div className='flex items-center justify-center size-[49.79px] bg-white rounded-[20.19px]'>
                                <img loading= 'lazy' alt="" src="/images/vectors/vector-purple.webp" className='h-[10.09px]'/>
                            </div>

                            <div className='flex items-center justify-center size-[49.79px] bg-white rounded-[20.19px]'>
                                <img loading= 'lazy' alt="" src="/images/vectors/vector-purple.webp" className='rotate-180 h-[10.09px]'/>
                            </div>
                        </div>

                    </div>





                    <div className='mt-[81px] flex lg:flex-col  md:flex-row flex-col lg:gap-x-0 gap-x-12 md:gap-y-[44px] gap-y-6'>
                        
                        <div className='flex gap-x-[16.21px] items-center xl:w-[379px] lg:w-auto w-full font-semibold text-white'>
                            
                            <div className='flex items-center justify-center size-[98.79px] bg-[#AF7CFF] rounded-[40.05px]'>
                                <img loading= 'lazy' alt=""  src="/images/vectors/groove-white.webp" className='h-[21px]'/>
                            </div>

                            <div className='flex flex-col'>
                                <h1 className='md:text-[34px] text-[24px]'>Jason Makki</h1> 
                                
                                <h1 className='md:text-[16px] text-[12px] text-[#C6C4C4]/40'>
                                    Engineer at GROOVE
                                </h1> 

                                <h1 className='text-[16px] text-[#C6C4C4]/40'>
                                    San Francisco
                                </h1> 
                            </div>
                            

                        </div>


                        <p className='xl:max-w-[499px] w-full text-justify lg:text-[22px] md:text-[18px] text-white/80 font-[400]'>
                            Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.
                        </p>

                    </div>

                </div>
            </div>

        </div>
    </motion.div>
  )
}

export default ThirdSegment