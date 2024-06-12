import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import { useRef, useState } from 'react'
import { motion,  useInView } from 'framer-motion'
import { animateVart2, animateVart3, animateVart4, animateVartLeft, animateVartRight, visibleComponent } from '../../animation_variants';

const FirstSegment = () => {
    const [inputPlaceholder, setInputPlaceholder] = useState<boolean>(true);
    const [activeTab, setActiveTab] = useState<string>("it");

    const ref= useRef(null);
    const inView = useInView(ref, {amount:0.5, once:true});

  return (
    <motion.div 
    initial= "offscreen"
    whileInView= "onscreen"
    variants={visibleComponent}

    className='page-margin flex flex-col md:pt-[90px] pt-[10px]'>
        
        <div className='flex flex-col md:w-[671px] sm:w-[571px] sm:mx-auto mx-8 items-center justify-center text-center md:text-[54px] sm:text-[37px] text-[25px] font-bold'>
            <div ref={ref} className='flex leading-normal sm:leading-3 w-full items-center justify-center'>
                <motion.h1
                initial= "offscreen"
                variants={animateVartLeft}
                animate= {inView ? "onscreen" : "offscreen"}
                transition= {{
                    type: "spring",
                    bounce: 0.5,
                    duration: inView ? 3 : 0
                }}
                >
                    Finding the right fit
                </motion.h1> 

                <motion.div 
                    initial= "offscreen"
                    variants={animateVart2}
                    animate= {inView ? "onscreen" : "offscreen"}
                    transition= {{
                        type: "spring",
                        bounce: 0.5,
                        duration: inView ? 3 : 0
                    }}
                    className='flex items-center mx-2'
                    >

                    <img loading= 'lazy' alt='gif' src='/gif/gifImage.gif' className='sm:h-[43px] h-[23px] rounded-full'/>
                </motion.div>

                <motion.h1
                initial= "offscreen"
                variants={animateVartRight}
                animate= {inView ? "onscreen" : "offscreen"}
                transition= {{
                    type: "spring",
                    bounce: 0.5,
                    duration: inView ? 3 : 0
                }}
                >

                    has
                </motion.h1>
            </div>

             <motion.h1
             initial= "offscreen"
             variants={animateVart3}
             animate= {inView ? "onscreen" : "offscreen"}
             transition= {{
                 type: "spring",
                 bounce: 0.5,
                 duration: inView ? 3 : 0
             }}
             >

                never been easier.
            </motion.h1>
        </div>



        <motion.p 
            initial= "offscreen"
            variants={animateVart3}
            animate= {inView ? "onscreen" : "offscreen"}
            transition= {{
                type: "spring",
                bounce: 0.5,
                duration: inView ? 3 : 0
            }}
            className='opacity-[80%] md:py-[11px] my-[10px] flex md:w-[582px] sm:w-[500px] sm:mx-auto mx-8 sm:text-[22px] text-[18px] text-center'>
            
            With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.
        </motion.p>


        <motion.div 
            initial= "offscreen"
            variants={animateVart3}
            animate= {inView ? "onscreen" : "offscreen"}
            transition= {{
                type: "spring",
                bounce: 0.5,
                duration: inView ? 3 : 0
            }}
            className='flex relative items-center lg:w-[582px] md:w-[680px] sm:w-[520px] sm:mx-auto mx-8 md:mt-[40px] mt-[50px]'>
            <input onBlur={() => {setInputPlaceholder(true);}} onClick={() => {setInputPlaceholder(false);}} autoFocus type='text' className={`z-10 bg-transparent absolute w-full h-[74px] border rounded-[15px] px-[27px] ${inputPlaceholder ? "pl-[177px]" : "px-[27px]"} `} />
            
            {
                inputPlaceholder 
                ? 
                    <div  className='absolute px-[27px] font-bold text-[#202229]'>
                        Looking for <span className='opacity-50 cursor-pointer'>design</span>
                    </div>
                
                :   ""
            }
           

            <button className='z-20 flex items-center justify-center absolute right-0 size-[74px] rounded-[15px] bg-[#FFBE2E]'>
                <img loading= 'lazy' alt='vector' src='/images/vectors/vector1.webp' className='h-[15px]'/>
            </button>
        
        </motion.div>


        <div className='md:mt-[80px] mt-[15px] md:scale-100 scale-[80%] mx-auto flex flex-col gap-y-4 p-4 items-center justify-center lg:w-[920px] md:w-[680px] sm:w-[620px] font-semibold bg-[#F8F8F8]'>

            <Tabs value={"it"} className= "flex flex-col w-full items-center justify-center">
                <motion.div
                initial= "offscreen"
                variants={animateVart4}
                animate= {inView ? "onscreen" : "offscreen"}
                transition= {{
                    type: "spring",
                    bounce: 0.5,
                    duration: inView ? 3 : 0
                }}
                >

                    <TabsHeader 
                        indicatorProps={{
                            className: "bg-[#C7F4C2] rounded-[15px]"
                        }}
                        className='w-[384px] p-0 h-[45px] bg-[#D2D2D2] rounded-[15px]'
                        placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}
                        >

                        <Tab key={"it"} value={"it"} onClick={() => {setActiveTab("it")}} className={`p-2 h-[44px] ${activeTab==="it" ? "font-semibold" : ""}`} placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                            IT & Development
                        </Tab>

                        <Tab key={"design"} value={"design"} onClick={() => {setActiveTab("design")}} className={`p-2 h-[44px] ${activeTab==="design" ? "font-semibold" : ""}`} placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                            Design and Creative
                        </Tab>
                    </TabsHeader>  
                </motion.div>
                


                <TabsBody className='flex w-full' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                    <TabPanel key={"it"} value={"it"} className='flex w-full'>
                        <div className='grid md:grid-cols-3 grid-cols-2 md:gap-y-0 gap-y-[50px] sm:text-[16px] text-sm w-full items-center justify-center text-[#959595]'>
                            <motion.ul 
                                initial= "offscreen"
                                variants={animateVart3}
                                animate= {inView ? "onscreen" : "offscreen"}
                                transition= {{
                                    type: "spring",
                                    bounce: 0.5,
                                    duration: inView ? 3 : 0
                                }}
                                className='flex flex-col mx-auto gap-y-[18px]'>
                                
                                <li>
                                    Python Developer
                                </li>

                                <li>
                                    Shopify Developer
                                </li>

                                <li className='text-[#202229]'>
                                    MERN Stack Developer
                                </li>

                                <li>
                                    Full Stack Developer
                                </li>
                            </motion.ul>

                            <motion.ul 
                                initial= "offscreen"
                                variants={animateVart3}
                                animate= {inView ? "onscreen" : "offscreen"}
                                transition= {{
                                    type: "spring",
                                    bounce: 0.5,
                                    duration: inView ? 3 : 0
                                }}
                                className='flex flex-col mx-auto gap-y-[18px]'>
                                
                                <li>
                                    Data Science
                                </li>

                                <li>
                                    Front End Developer
                                </li>

                                <li>
                                    Shopify Developer
                                </li>

                                <li>
                                    Python Developer
                                </li>
                            </motion.ul>

                            <motion.ul 
                                initial= "offscreen"
                                variants={animateVart3}
                                animate= {inView ? "onscreen" : "offscreen"}
                                transition= {{
                                    type: "spring",
                                    bounce: 0.5,
                                    duration: inView ? 3 : 0
                                }}
                                className='md:col-span-1 col-span-2 flex flex-col mx-auto gap-y-[18px]'>
                                
                                <li>
                                    Shopify  Developer
                                </li>

                                <li>
                                    Python Developer
                                </li>

                                <li>
                                    Full Stack Developer
                                </li>

                                <li className='text-[#202229]'>
                                    Explore More
                                </li>
                            </motion.ul>

                        </div>
                    </TabPanel>




                    <TabPanel key={"design"} value={"design"} >
                        <div className='grid md:grid-cols-3 grid-cols-2 md:gap-y-0 gap-y-[50px] sm:text-[16px] text-sm w-full items-center justify-center text-[#959595]'>
                            <ul className='flex flex-col-reverse mx-auto gap-y-[18px]'>
                                <li>
                                    Python Developer
                                </li>

                                <li>
                                    Shopify Developer
                                </li>

                                <li className='text-[#202229]'>
                                    MERN Stack Developer
                                </li>

                                <li>
                                    Full Stack Developer
                                </li>
                            </ul>

                            <ul className='flex flex-col-reverse mx-auto gap-y-[18px]'>
                                <li>
                                    Data Science
                                </li>

                                <li>
                                    Front End Developer
                                </li>

                                <li>
                                    Shopify Developer
                                </li>

                                <li>
                                    Python Developer
                                </li>
                            </ul>

                            <ul className='md:col-span-1 col-span-2 flex flex-col-reverse mx-auto gap-y-[18px]'>
                                <li>
                                    Shopify  Developer
                                </li>

                                <li>
                                    Python Developer
                                </li>

                                <li>
                                    Full Stack Developer
                                </li>

                                <li className='text-[#202229]'>
                                    Explore More
                                </li>
                            </ul>

                        </div>
                    </TabPanel>

                </TabsBody>

            </Tabs>

        
        </div>

    </motion.div>
  )
}

export default FirstSegment