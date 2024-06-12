import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { animateVart3, animateVartLeft, animateVartRight, visibleComponent } from '../../animation_variants';

const SecondSegment = () => {
    const ref= useRef(null);
    const inView = useInView(ref, {amount:0, once:true});


  return (
    <motion.div 
    initial= "offscreen"
    whileInView= "onscreen"
    variants={visibleComponent}
        ref={ref} className='py-20 flex flex-col w-full mt-[78px] overflow-hidden'>

        <div className='flex flex-col w-full gap-y-2 -skew-y-3'>
            <motion.div 
                initial= "offscreen"
                variants={animateVartLeft}
                animate= {inView ? "onscreen" : "offscreen"}
                transition= {{
                    type: "spring",
                    bounce: 0.5,
                    duration: inView ? 5 : 0
                }}
                className='flex h-[15px] bg-gradient-to-r from-transparent via-[#5C62A6]'/>
            
            <motion.div 
                initial= "offscreen"
                variants={animateVartRight}
                animate= {inView ? "onscreen" : "offscreen"}
                transition= {{
                    type: "spring",
                    bounce: 0.5,
                    duration: inView ? 5 : 0
                }}
                className='flex h-[12px] bg-gradient-to-r from-transparent via-[#5C62A6]'/>
            
            <motion.div 
                initial= "offscreen"
                variants={animateVartLeft}
                animate= {inView ? "onscreen" : "offscreen"}
                transition= {{
                    type: "spring",
                    bounce: 0.5,
                    duration: inView ? 5 : 0
                }} 
                className='flex h-[9px] bg-gradient-to-r from-transparent via-[#5C62A6]'/>
            
            <motion.div 
                initial= "offscreen"
                variants={animateVartRight}
                animate= {inView ? "onscreen" : "offscreen"}
                transition= {{
                    type: "spring",
                    bounce: 0.5,
                    duration: inView ? 5 : 0
                }} 
                className='flex h-[6px] bg-gradient-to-r from-transparent via-[#5C62A6]'/>
            
            <motion.div 
                initial= "offscreen"
                variants={animateVartLeft}
                animate= {inView ? "onscreen" : "offscreen"}
                transition= {{
                    type: "spring",
                    bounce: 0.5,
                    duration: inView ? 5 : 0
                }} 
                className='flex h-[3px] bg-gradient-to-r from-transparent via-[#5C62A6]'/>
        </div>


        <div className='mt-4 -skew-y-3 bg-[#EDEFFF]'>
            
            <div className='page-margin lg:py-[177px] md:py-[100px] py-[70px] skew-y-3'>
                <div className=' flex flex-col items-center w-full'>
                    <motion.h1 
                        initial= "offscreen"
                        variants={animateVart3}
                        animate= {inView ? "onscreen" : "offscreen"}
                        transition= {{
                            type: "spring",
                            bounce: 0.5,
                            duration: inView ? 3 : 0
                        }}
                        className='flex max-w-[977px] lg:text-[54px] sm:text-[40px] text-[35px] md:text-center md:leading-normal leading-[45px] font-bold'>
                        Your one-stop marketplace for finding the talent your business needs.
                    </motion.h1>  




                    <div className='lg:mt-[90px] md:mt-[50px] mt-[40px] xl:gap-y-[30px] gap-y-[80px] flex flex-col w-full items-center justify-center'>                    
                        
                        <motion.div 
                        initial= "offscreen"
                        variants={animateVart3}
                        animate= {inView ? "onscreen" : "offscreen"}
                        transition= {{
                            type: "spring",
                            bounce: 0.5,
                            duration: inView ? 3 : 0
                        }}
                            className='flex xl:flex-row flex-col w-full justify-between items-center'>
                            <div className='gap-y-[20px] flex flex-col xl:w-[363px]'>
                                <h1 className='w-full text-[24px] font-medium'>
                                    Find Dev and IT professionals to scale your business.
                                </h1>

                                <div className=' xl:grid xl:grid-cols-2 gap-y-[8px] flex xl:flex-col xl:items-start items-center xl:justify-start justify-between w-full md:text-[16px] text-sm text-[#202229]'>
                                    <div className='flex md:flex-row flex-col md:items-start md:gap-y-0 gap-y-2 items-center gap-x-[8px]'>
                                        <img loading= 'lazy' alt='vector' src='/images/vectors/v1/vector2.webp' className='h-[21px] w-[16px]' />
                                        <h1>
                                            989 Skills
                                        </h1>
                                    </div>

                                    <div className='flex md:flex-row flex-col md:items-start md:gap-y-0 gap-y-2 items-center gap-x-[8px]'>
                                        <img loading= 'lazy' alt='vector' src='/images/vectors/v1/vector1.webp' className='size-[18px]' />
                                        <h1 className='md:text-end'>
                                            45 Sub-Categories
                                        </h1>
                                    </div>

                                    <div className='flex md:flex-row flex-col md:items-start md:gap-y-0 gap-y-2 items-center gap-x-[8px]'>
                                        <img loading= 'lazy' alt='vector' src='/images/vectors/v1/vector3.webp' className='h-[18px] w-[16px]' />
                                        <h1>
                                            1011 Profiles
                                        </h1>
                                    </div>
                                </div>
                            </div>  


                            <div className='flex flex-col md:items-start items-center xl:mt-0 mt-6 md:w-[730px] sm:w-[580px] w-full bg-white px-[28px] py-[18px] gap-y-[15px] rounded-[7px]'>
                                <h1 className='text-[16px] font-semibold'>
                                    IT & Development
                                </h1>

                                <ul className='md:flex md:gap-x-[20px] md:w-auto w-full grid grid-cols-3 md:gap-y-0 gap-y-8 md:items-start items-center text-center text-[14px] font-semibold'>
                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/v1/shopify.webp' className='h-[40px]'/>                              
                                        </div>


                                        <h1 className='w-[81px]'>
                                            Shopify Developer
                                        </h1>
                                    </li>

                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/v1/magento.webp' className='h-[40px]'/>                              
                                        </div>

                                        <h1 className='w-[81px]'>
                                            Magento Developer
                                        </h1>
                                    </li>

                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/v1/data.webp' className='h-[40px]'/>                              
                                        </div>

                                        <h1 className='w-[81px]'>
                                            Data Scientist
                                        </h1>
                                    </li>

                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/v1/webflow.webp' className='h-[40px]'/>                              
                                        </div>

                                        <h1 className='w-[81px]'>
                                            Webflow Developer
                                        </h1>
                                    </li>

                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/v1/dotnet.webp' className='h-[40px]'/>                              
                                        </div>

                                        <h1 className='w-[81px]'>
                                            Dot Net Developer
                                        </h1>
                                    </li>


                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/vector1.webp' className='h-[15px]'/>                              
                                        </div>

                                        <div className='md:hidden'>
                                           <br /> <br /> 
                                        </div>
                                                                                
                                    </li>
                                                                    
                                </ul>
                            </div>

                        </motion.div>





                        <div className='flex xl:flex-row flex-col w-full justify-between items-center'>
                            <motion.div 
                            initial= "offscreen"
                            variants={animateVart3}
                            animate= {inView ? "onscreen" : "offscreen"}
                            transition= {{
                                type: "spring",
                                bounce: 0.5,
                                duration: inView ? 3 : 0
                            }}
                            className='gap-y-[20px] flex flex-col xl:w-[363px]'>
                               
                                <h1 className='w-full text-[24px] font-medium'>
                                    Explore Creative individuals with a keen eye for detail.
                                </h1>

                                <div className=' xl:grid xl:grid-cols-2 gap-y-[8px] flex xl:flex-col xl:items-start items-center xl:justify-start justify-between w-full md:text-[16px] text-sm text-[#202229]'>
                                    <div className='flex md:flex-row flex-col md:items-start md:gap-y-0 gap-y-2 items-center gap-x-[8px]'>
                                        <img loading= 'lazy' alt='vector' src='/images/vectors/v1/vector2.webp' className='h-[21px] w-[16px]' />
                                        <h1>
                                            989 Skills
                                        </h1>
                                    </div>

                                    <div className='flex md:flex-row flex-col md:items-start md:gap-y-0 gap-y-2 items-center gap-x-[8px]'>
                                        <img loading= 'lazy' alt='vector' src='/images/vectors/v1/vector1.webp' className='size-[18px]' />
                                        <h1 className='md:text-end'>
                                            45 Sub-Categories
                                        </h1>
                                    </div>

                                    <div className='flex md:flex-row flex-col md:items-start md:gap-y-0 gap-y-2 items-center gap-x-[8px]'>
                                        <img loading= 'lazy' alt='vector' src='/images/vectors/v1/vector3.webp' className='h-[18px] w-[16px]' />
                                        <h1>
                                            1011 Profiles
                                        </h1>
                                    </div>
                                </div>
                            </motion.div>  


                            <motion.div 
                            initial= "offscreen"
                            variants={animateVart3}
                            animate= {inView ? "onscreen" : "offscreen"}
                            transition= {{
                                type: "spring",
                                bounce: 0.5,
                                duration: inView ? 3 : 0
                            }}
                            className='flex flex-col md:items-start items-center xl:mt-0 mt-6 md:w-[730px] sm:w-[580px] w-full bg-white px-[28px] py-[18px] gap-y-[15px] rounded-[7px]'>
                            
                                <h1 className='text-[16px] font-semibold'>
                                    Design & Creative
                                </h1>

                                <ul className='md:flex md:gap-x-[20px] md:w-auto w-full grid grid-cols-3 md:gap-y-0 gap-y-8 md:items-start items-center text-center text-[14px] font-semibold'>
                                    
                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/vector1.webp' className='h-[15px] rotate-180'/>                              
                                        </div>

                                        <div className='md:hidden'>
                                           <br /> <br /> 
                                        </div>
                                                                                
                                    </li>
                                    
                                    
                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/v2/figma.webp' className='h-[40px]'/>                              
                                        </div>


                                        <h1 className='w-[81px]'>
                                            UX Designer
                                        </h1>
                                    </li>

                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/v2/graphics.webp' className='h-[40px]'/>                              
                                        </div>

                                        <h1 className='w-[81px]'>
                                            Graphics Designer
                                        </h1>
                                    </li>

                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/v2/illustrator.webp' className='h-[40px]'/>                              
                                        </div>

                                        <h1 className='w-[81px]'>
                                            Illustration Artist
                                        </h1>
                                    </li>

                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/v2/unreal.webp' className='h-[40px]'/>                              
                                        </div>

                                        <h1 className='w-[81px]'>
                                            Unreal Engine
                                        </h1>
                                    </li>

                                    <li className='flex flex-col md:items-start items-center'>
                                        <div className='flex items-center justify-center size-[96px] rounded-full bg-[#F6F6F6]'>
                                            <img loading= 'lazy' alt='vector' src='/images/vectors/v2/cinema4d.webp' className='h-[40px]'/>                              
                                        </div>

                                        <h1 className='w-[81px]'>
                                            Cinema 4D
                                        </h1>
                                    </li>
                       
                                </ul>
                            </motion.div>

                        </div>




                       

                        <motion.div 
                        initial= "offscreen"
                        variants={animateVart3}
                        animate= {inView ? "onscreen" : "offscreen"}
                        transition= {{
                            type: "spring",
                            bounce: 0.5,
                            duration: inView ? 3 : 0
                        }}
                        className='flex xl:-mt-0 -mt-8 xl:w-full md:w-[730px] sm:w-[580px] w-full justify-between items-center sm:text-[22px]'>
                          
                            <div className='flex xl:w-[363px] w-full items-center gap-x-[12px]'>
                                <div className='flex items-center justify-center sm:size-[74px] size-[50px] bg-[#202229] sm:rounded-[30px] rounded-[20px]'>
                                    <img loading= 'lazy' alt="vector" src="/images/vectors/vector-white.webp" className='h-[15px]' />
                                </div>


                                <h1 className='font-semibold'>
                                    Explore More
                                </h1>
                            </div>


                            <div className='flex xl:justify-start w-full justify-end md:w-[730px] gap-x-1'>
                                <h1 className='font-semibold'>
                                    30 more 
                                </h1>
                                    to explore
                            </div>

                        </motion.div>
                    </div>
                </div>
             </div>
 
                
        </div>

      
    </motion.div>
  )
}

export default SecondSegment