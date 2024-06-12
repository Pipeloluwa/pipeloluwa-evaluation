import { useRef } from 'react'
import LogoComponent from './logoComponent'
import { motion, useInView } from 'framer-motion'
import { animateVart1, animateVart3, animateVart4, visibleComponent } from '../../animation_variants';


const FooterComponent = () => {
    const cardRef= useRef(null);
    const cardInView = useInView(cardRef, {amount:0.2, once:true});

    const divRef= useRef(null);
    const divInView = useInView(divRef, {amount:0.2, once:true});

    const divRef2= useRef(null);
    const divInView2 = useInView(divRef, {amount:0.4, once:true});


  return (
    <motion.div 
    initial= "offscreen"
    whileInView= "onscreen"
    variants={visibleComponent}
    className=' -mt-[100px] pt-[100px] pb-[9px] w-full bg-gradient-to-b from-[#0C0C0C] to-[#202229]'>
        <div ref={cardRef} className='flex flex-col'>
            <div className='page-padding -skew-y-3'>
                <motion.div 
                initial= "offscreen"
                variants={animateVart1}
                animate= {cardInView ? "onscreen" : "offscreen"}
                transition= {{
                    type: "spring",
                    bounce: 0.5,
                    duration: cardInView ? 3 : 0
                }}
                    className='-skew-y-3 flex flex-col gap-y-[35px] items-center justify-center h-[481px] w-full mt-[64px] bg-[#525AA0] shadow-xl shadow-blue-500'>
                    <h1 className='skew-y-3 lg:w-[683px] w-full lg:px-0 px-4 lg:leading-[64px] text-center text-white lg:text-[54px] sm:text-[40px] text-[35px] font-semibold'>
                        Need a job done, and done well? Get started
                    </h1>

                    <div className='skew-y-3 flex items-center justify-center size-[73.3px] bg-[#202229] rounded-[29.89px]'>
                        <img loading= 'lazy' alt="vector" src="/images/vectors/vector-white.webp" className='animate-bounce h-[14.95px] rotate-90'/>
                    </div>
                </motion.div> 
            </div>






            
            <div ref= {divRef}>
                <motion.div 
                initial= "offscreen"
                variants={animateVart3}
                animate= {divInView ? "onscreen" : "offscreen"}
                transition= {{
                    type: "spring",
                    bounce: 0.5,
                    duration: divInView ? 3 : 0
                }}
                className='page-padding flex lg:flex-row flex-col lg:gap-y-0 gap-y-16 w-full justify-between xl:gap-x-[91.68px] pt-[123px]'>
                    
                    <ul className='flex flex-col w-full'>
                        <li className='flex lg:pt-4'>
                            <LogoComponent />
                        </li>


                        <li className='w-[284px] pt-[28.69px] text-[14px] leading-[22px] text-white/80'>
                            We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.
                        </li>


                        <li className='pt-[49px] text-[14px] font-semibold text-white opacity-[40%]'>
                            LINKS AND REDIRECTS
                        </li>


                        <li className='pt-[16px] flex gap-x-[8px]'>
                            <button className='text-[#EDEFFF] text-[14.86px] w-[162.16px] h-[50px] bg-[#292B34] rounded-[20.27px]'>
                                Hire now
                            </button>

                            <button className='text-[#EDEFFF] text-[14.86px] w-[162.16px] h-[50px] bg-[#292B34] rounded-[20.27px]'>
                                Apply now
                            </button>
                        </li>

                    </ul>






                    <ul className='flex flex-col w-full'>
                        <li className='xl:leading-[64px] xl:w-[779px] xl:h-[128px] xl:text-[54px] lg:text-[45px] sm:text-[40px] text-[30px] font-semibold text-white'>
                            Connecting the right people to the right businesses.
                        </li>



                        <li className='flex w-full xl:gap-x-0 gap-x-2 justify-between xl:pt-[64px] pt-[20px]'>
                            <ul className='flex flex-col text-white'>
                                <li className='pb-[16px] font-semibold opacity-[40%] sm:text-[14px] text-[11px]'>
                                    PLATFORM
                                </li>


                                <ul className='relative flex flex-col gap-y-[16px] xl:text-[18px] text-sm'>
                                    <li>
                                        Find Work
                                    </li>

                                    <li className='absolute top-[30px] h-[1px] xl:w-[101.5px] w-full bg-gradient-to-r from-[#FFFFFF] to-[#202229]'/>

                                    <li>
                                        Find Talent
                                    </li>

                                    <li>
                                        Categories
                                    </li>

                                    <li>
                                        About Us
                                    </li>

                                </ul>
                            </ul>



                            <ul className='flex flex-col text-white'>
                                <li className='pb-[16px] font-semibold opacity-[40%] sm:text-[14px] text-[11px]'>
                                    CATEGORIES
                                </li>


                                <ul className='flex flex-col gap-y-[16px] xl:text-[18px] text-sm'>

                                    <li>
                                        Data Science
                                    </li>

                                    <li>
                                        IT & Networking
                                    </li>

                                    <li>
                                        Web & Mobile
                                    </li>

                                </ul>
                            </ul>



                            <ul className='flex flex-col text-white'>
                                <li className='pb-[16px] font-semibold opacity-[40%] sm:text-[14px] text-[11px]'>
                                    HELP
                                </li>


                                <ul className='flex flex-col gap-y-[16px] xl:text-[18px] text-sm'>
                        
                                    <li>
                                        FAQ’s
                                    </li>

                                    <li>
                                        Contact Us
                                    </li>

                                </ul>
                            </ul>



                            <ul className='flex flex-col text-white'>
                                <li className='pb-[16px] font-semibold opacity-[40%] sm:text-[14px] text-[11px]'>
                                    GET IN TOUCH @
                                </li>


                                <ul className='flex flex-col gap-y-[16px] xl:text-[18px] text-sm'>

                                    <li>
                                        Instagram
                                    </li>

                                    <li>
                                        LinkedIn
                                    </li>

                                    <li>
                                        Twitter
                                    </li>

                                </ul>
                            </ul>

                        </li>

                    </ul>

                </motion.div>
            </div>








            <div ref={divRef2}>
                <motion.div 
                initial= "offscreen"
                variants={animateVart4}
                animate= {divInView2 ? "onscreen" : "offscreen"}
                transition= {{
                    type: "spring",
                    bounce: 0.5,
                    duration: divInView2 ? 3 : 0
                }}
                className='lg:pt-[148px] pt-[100px] flex flex-col w-full'>
                    <div className='flex w-full h-[1px] bg-gradient-to-r from-[#FFFFFF4D]/[30%] to-[#2022295E]/[37%]' />

                    <div className='page-padding pt-[9px] flex sm:gap-y-0 gap-y-2 sm:flex-row flex-col w-full sm:text-[16px] text-sm text-white font-medium'>
                        <h1 className='flex w-full sm:justify-start justify-center'>
                            All rights reserved  by Zwilt
                        </h1>


                        <ul className=' flex w-full sm:justify-end justify-center opacity-[60%] gap-x-[34px] underline'>
                            <li>
                                Privacy Policy
                            </li>

                            <li>
                                Terms and Conditions
                            </li>

                        </ul>

                    </div>     

                </motion.div>
            </div>

        </div>
    </motion.div>
  )
}

export default FooterComponent