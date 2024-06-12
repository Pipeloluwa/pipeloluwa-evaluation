import { motion} from 'framer-motion'
import { visibleComponent } from '../../animation_variants';


export const FifthSegment = () => {
  return (
    <motion.div 
    initial= "offscreen"
    whileInView= "onscreen"
    variants={visibleComponent}
    className='w-full'>
        <div className='flex page-margin flex-col gap-y-[40px]  pb-[177px]'>
            <h1 className='text-center lg:text-[54px] sm:text-[40px] text-[35px] font-bold'>
                Start your journey today.
            </h1>




            <div className='flex flex-col gap-y-[30px]'>
                
                {/* ++++++++++++++++++++++++++ CARD 1 +++++++++++++++++++++++++++++++++ */}
                <div className='-skew-y-3 overflow-hidden flex lg:h-[367.5px] h-full bg-[#EDEFFF]'>
                   
                    <div className=' overflow-hidden flex lg:flex-row flex-col justify-between lg:items-start items-center w-full lg:h-full h-[750px] lg:gap-y-0 gap-y-6 lg:gap-x-4 py-[90px] md:px-[43px] px-4'>
                        
                        <div className='skew-y-3 flex lg:w-auto w-full items-start -ml-2'>
                            
                            <h1 className='opacity-[50%] bg-gradient-to-b from-[#A387D1] to-[#D1C4E2]/[46%] bg-clip-text leading-[0.75] text-transparent md:text-[112px] text-[80px] font-bold'>
                                1
                            </h1>

                            
                            <div className='md:-mt-[10px] ml-[19.16px] gap-y-[20px] flex flex-col'>
                                <h1 className='flex lg:max-w-[445px] w-full lg:text-[30px] text-[25px] font-semibold'>
                                    Find your next star performer.
                                </h1>


                                <p className='flex lg:max-w-[407px] w-full text-[16px] opacity-[80%]'>
                                    Explore the vast Zwilt marketplace to find the candidate that meets your needs.
                                </p>


                                <div className='flex lg:max-w-[363px] w-full items-center gap-x-[12px]'>
                                    <div className='flex items-center justify-center size-[49.79px] bg-[#202229] rounded-[20.19px]'>
                                        <img loading= 'lazy' alt="vector" src="/images/vectors/vector-white.webp" className='h-[15px]' />
                                    </div>


                                    <h1 className='text-[14.8px] font-medium'>
                                        Join Now
                                    </h1>
                                </div>

                            </div>

                        </div>




                        <div className='skew-y-3 flex lg:gap-x-[24.53px] gap-x-6 sm:justify-start justify-between lg:w-[466.06px] w-full h-full'>
                            
                            <div className='lg:-mt-[90px] mt-[65px] flex flex-col w-[50%] gap-y-[24.53px]'>
                                
                                <div className='flex flex-col  w-full h-[247.71px] rounded-[21.15px] bg-white/[65%]'>
                                    <div className='overflow-hidden h-[141.43px] bg-[#FFDACE] rounded-tr-[21.15px] rounded-tl-[21.15px] rounded-bl-[21.15px]'>
                                        <img loading= 'lazy' alt="avatar" src="images/avatars/avatar3.webp" className='flex w-full h-full object-cover' />
                                    </div>

                                    <div className='px-[24px] flex flex-col pb-[19.69px]'>
                                        <h1 className='text-[18px] pt-[12.59px]'>
                                            Ruby Developer
                                        </h1>

                                        <p className='text-[12px] lg:w-[143px] pt-[28px]'>
                                            Redwood City, California 7 years experience
                                        </p>
                                    </div>
                                </div>


                                <div className='flex flex-col  w-full h-[247.71px] rounded-[21.15px] bg-white/[65%]'>
                                    <div className='overflow-hidden h-[141.43px] bg-[#D8D2FF] rounded-tr-[21.15px] rounded-tl-[21.15px] rounded-bl-[21.15px]'>
                                        <img loading= 'lazy' alt="avatar" src="images/avatars/avatar6.webp" className='flex w-full h-full object-cover' />
                                    </div>

                                    <div className='px-[24px] flex flex-col pb-[19.69px]'>
                                        <h1 className='text-[18px] pt-[12.59px]'>
                                            Ruby Developer
                                        </h1>

                                        <p className='text-[12px] lg:w-[143px] pt-[28px]'>
                                            Redwood City, California 7 years experience
                                        </p>
                                    </div>
                                </div>

                            </div>






                            <div className='lg:-mt-[115px] mt-[45px] flex w-[50%] flex-col gap-y-[24.53px]'>
                                
                                <div className='flex flex-col  w-full h-[247.71px] rounded-[21.15px] bg-white/[65%] shadow-xl shadow-black/[5%]'>
                                    <div className='overflow-hidden h-[141.43px] bg-[#C8EFC4] rounded-tr-[21.15px] rounded-tl-[21.15px] rounded-bl-[21.15px]'>
                                        <img loading= 'lazy' alt="avatar" src="images/avatars/avatar5.webp" className='flex w-full h-full object-cover' />
                                    </div>

                                    <div className='px-[24px] flex flex-col pb-[19.69px]'>
                                        <h1 className='text-[18px] pt-[12.59px]'>
                                            System ops engineer
                                        </h1>

                                        <p className='text-[12px] lg:w-[143px] pt-[28px]'>
                                            Abu Dhabi, UAE 5 years experience
                                        </p>
                                    </div>
                                </div>


                                <div className='flex flex-col  w-full h-[247.71px] rounded-[21.15px] bg-white/[65%] shadow-xl shadow-black/[5%]'>
                                    <div className='overflow-hidden h-[141.43px] bg-[#FDDD8B] rounded-tr-[21.15px] rounded-tl-[21.15px] rounded-bl-[21.15px]'>
                                        <img loading= 'lazy' alt="avatar" src="images/avatars/avatar4.webp" className='flex w-full h-full object-cover' />
                                    </div>

                                    <div className='px-[24px] flex flex-col pb-[19.69px]'>
                                        <h1 className='text-[18px] pt-[12.59px]'>
                                            Ruby Developer
                                        </h1>

                                        <p className='text-[12px] lg:w-[143px] pt-[28px]'>
                                            Redwood City, California 7 years experience
                                        </p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>






                {/* +++++++++++++ CARD 2 ++++++++++++++++ */}
                <div className='-skew-y-3 overflow-hidden flex lg:h-[367.5px] h-full bg-[#FFF7E1]'>
                   
                   <div className=' overflow-hidden flex lg:flex-row flex-col justify-between lg:items-start items-center w-full lg:h-full h-[750px] lg:gap-y-0 gap-y-6 lg:gap-x-4 py-[90px] md:px-[43px] px-4'>
                       
                       <div className='skew-y-3 flex lg:w-auto w-full items-start -ml-2'>
                           
                            <h1 className='opacity-[50%] bg-gradient-to-b from-[76%] from-[#FFBE2E]/[76%] to-transparent bg-clip-text leading-[0.75] text-transparent md:text-[112px] text-[80px] font-bold'>
                                2
                            </h1>
                           
                           <div className='md:-mt-[10px] ml-[19.16px] gap-y-[20px] flex flex-col'>
                               <h1 className='flex lg:max-w-[445px] w-full xl:text-[34px] lg:text-[30px] text-[25px] font-semibold'>
                                    Evaluate to your heart’s content.
                               </h1>


                               <p className='flex lg:max-w-[407px] w-full text-[16px] opacity-[80%]'>
                                    Assess the candidate through work history, transparent tests and video interviews.
                               </p>


                               <div className='flex lg:max-w-[363px] w-full items-center gap-x-[12px]'>
                                   <div className='flex items-center justify-center size-[49.79px] bg-[#202229] rounded-[20.19px]'>
                                       <img loading= 'lazy' alt="vector" src="/images/vectors/vector-white.webp" className='h-[15px]' />
                                   </div>


                                   <h1 className='text-[14.8px] font-medium'>
                                       Browse More
                                   </h1>
                               </div>

                           </div>

                       </div>






                        <div className='skew-y-3 flex gap-x-[24.53px] lg:w-[466.06px] w-full h-full'>
                            
                            <div className='flex flex-col gap-y-[24.53px] w-[50%]'>
                                
                                <div className='lg:-mt-[90px] mt-[65px] flex flex-col w-full lg:h-[295px] py-[33.03px] rounded-[21.15px] bg-white/[65%] shadow-xl shadow-black/[5%]'>
                                    
                                    <div className='flex items-center gap-x-2 w-full lg:h-auto h-full md:px-[24.96px] px-2'>
                                        <div className='flex overflow-hidden sm:size-[76.13px] size-[40px] border-[3.2px] border-[#D8D2FF] rounded-full'>
                                            <img loading= 'lazy' alt="avatar" src="images/avatars/avatar7.webp" className='flex w-full h-full object-cover' />
                                        </div>

                                        <div className='flex flex-col lg:w-auto w-[70%] gap-y-2'>
                                            <div className='bg-[#D8D2FF] lg:w-[66.05px] w-[70%] h-[10.08px] rounded-xl'/>

                                            <div className='bg-[#D8D2FF] lg:w-[85.08px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>

                                    </div>
                                    

                                    <div className='flex flex-col gap-y-[25.75px] pt-[27.99px]'>
                                        <div className='px-[24px] gap-y-2 flex flex-col'>
                                            <div className='bg-[#F6F6F6] lg:w-[152.25px] w-[80%] h-[8.96px] rounded-xl'/>

                                            <div className='bg-[#F6F6F6] lg:w-[171.28px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>

                                        <div className='px-[24px] gap-y-2 flex flex-col'>
                                            <div className='bg-[#F6F6F6] lg:w-[152.25px] w-[80%] h-[8.96px] rounded-xl'/>

                                            <div className='bg-[#F6F6F6] lg:w-[171.28px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>

                                        <div className='px-[24px] gap-y-2 flex flex-col'>
                                            <div className='bg-[#F6F6F6] lg:w-[152.25px] w-[80%] h-[8.96px] rounded-xl'/>

                                            <div className='bg-[#F6F6F6] lg:w-[171.28px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>
                                    </div>
                                
                                </div>


                                <div className='flex justify-end -mt-[45px]'>
                                    <div className='flex items-center justify-center size-[61.06px] bg-[#FFBE2E] rounded-full'>
                                        <img loading= 'lazy' alt="vector" src="/images/vectors/mark.webp" className='h-[16.84px]' />
                                    </div>
                                </div>

                            </div>






                            <div className='lg:-mt-[145px] mt-[15px] w-[50%] flex flex-col gap-y-[24.53px]'>
                                
                                <div className='flex flex-col w-full h-[295px] py-[33.03px] rounded-[21.15px] bg-white/[65%] shadow-xl shadow-black/[5%]'>
                                    
                                    <div className='flex items-center gap-x-2 w-full lg:h-auto h-full md:px-[24.96px] px-2'>
                                        <div className='flex overflow-hidden sm:size-[76.13px] size-[40px] border-[3.2px] border-[#C8EFC4] rounded-full'>
                                            <img loading= 'lazy' alt="avatar" src="images/avatars/avatar8.webp" className='flex w-full h-full object-cover' />
                                        </div>

                                        <div className='flex flex-col lg:w-auto w-[70%] gap-y-2'>
                                            <div className='bg-[#C8EFC4] lg:w-[66.05px] w-[70%] h-[10.08px] rounded-xl'/>

                                            <div className='bg-[#C8EFC4] lg:w-[85.08px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>

                                    </div>
                                    

                                    <div className='flex flex-col gap-y-[25.75px] pt-[27.99px]'>
                                        <div className='px-[24px] gap-y-2 flex flex-col'>
                                            <div className='bg-[#F6F6F6] lg:w-[152.25px] w-[80%] h-[8.96px] rounded-xl'/>

                                            <div className='bg-[#F6F6F6] lg:w-[171.28px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>

                                        <div className='px-[24px] gap-y-2 flex flex-col'>
                                            <div className='bg-[#F6F6F6] lg:w-[152.25px] w-[80%] h-[8.96px] rounded-xl'/>

                                            <div className='bg-[#F6F6F6] lg:w-[171.28px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>

                                        <div className='px-[24px] gap-y-2 flex flex-col'>
                                            <div className='bg-[#F6F6F6] lg:w-[152.25px] w-[80%] h-[8.96px] rounded-xl'/>

                                            <div className='bg-[#F6F6F6] lg:w-[171.28px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>
                                    </div>
                                
                                </div>





                                <div className='flex flex-col w-full h-[295px] py-[33.03px] rounded-[21.15px] bg-white/[65%] shadow-xl shadow-black/[5%]'>
                                    
                                    <div className='flex items-center gap-x-2 w-full lg:h-auto h-full md:px-[24.96px] px-2'>
                                        <div className='flex overflow-hidden sm:size-[76.13px] size-[40px] border-[3.2px] border-[#FDDD8B] rounded-full'>
                                            <img loading= 'lazy' alt="avatar" src="images/avatars/avatar6.webp" className='flex w-full h-full object-cover' />
                                        </div>

                                        <div className='flex flex-col lg:w-auto w-[70%] gap-y-2'>
                                            <div className='bg-[#FDDD8B] lg:w-[66.05px] w-[70%] h-[10.08px] rounded-xl'/>

                                            <div className='bg-[#FDDD8B] lg:w-[85.08px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>

                                    </div>
                                    

                                    <div className='flex flex-col gap-y-[25.75px] pt-[27.99px]'>
                                        <div className='px-[24px] gap-y-2 flex flex-col'>
                                            <div className='bg-[#F6F6F6] lg:w-[152.25px] w-[80%] h-[8.96px] rounded-xl'/>

                                            <div className='bg-[#F6F6F6] lg:w-[171.28px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>

                                        <div className='px-[24px] gap-y-2 flex flex-col'>
                                            <div className='bg-[#F6F6F6] lg:w-[152.25px] w-[80%] h-[8.96px] rounded-xl'/>

                                            <div className='bg-[#F6F6F6] lg:w-[171.28px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>

                                        <div className='px-[24px] gap-y-2 flex flex-col'>
                                            <div className='bg-[#F6F6F6] lg:w-[152.25px] w-[80%] h-[8.96px] rounded-xl'/>

                                            <div className='bg-[#F6F6F6] lg:w-[171.28px] w-[100%] h-[8.96px] rounded-xl'/>
                                        </div>
                                    </div>
                                
                                </div>

                            </div>
                            


                        </div>

                   </div>
                </div>







                {/* ++++++++++++++++++++++++++++++ CARD 3 ++++++++++++++++++++++ */}
                <div className='-skew-y-3 overflow-hidden flex lg:h-[367.5px] h-full bg-[#F3F3F3]'>
                    
                    <div className=' overflow-hidden flex lg:flex-row flex-col justify-between items-center w-full lg:h-full h-[750px] lg:gap-x-4 px-[43px]'>
                        
                        <div className='skew-y-3 flex lg:w-auto w-full items-start py-[90px] -ml-2'>
                           
                           <div className='opacity-[50%] bg-clip-text bg-gradient-to-b from-[76%] from-black/[80%] to-black/[16%] h-[83px]'>
                               
                           </div>
                            <h1 className=' opacity-[50%] bg-clip-text bg-gradient-to-b from-[76%] from-black/[80%] to-black/[16%] leading-[0.75] text-transparent md:text-[112px] text-[80px] font-bold'>
                                3
                            </h1>

                           
                           <div className='md:-mt-[10px] ml-[19.16px] gap-y-[20px] flex flex-col'>
                               <h1 className='flex lg:max-w-[445px] w-full lg:text-[30px] text-[25px] font-semibold'>
                                    Start building your team.
                               </h1>


                               <p className='flex text-justify lg:max-w-[407px] w-full text-[16px] opacity-[80%]'>
                                    Onboard your candidate right away and start creating the next big thing.
                               </p>


                               <div className='flex lg:max-w-[363px] w-full items-center gap-x-[12px]'>
                                   <div className='flex items-center justify-center size-[49.79px] bg-[#202229] rounded-[20.19px]'>
                                       <img loading= 'lazy' alt="vector" src="/images/vectors/vector-white.webp" className='h-[15px]' />
                                   </div>


                                   <h1 className='text-[14.8px] font-medium'>
                                       Join Now
                                   </h1>
                               </div>

                           </div>

                        </div>




                        <div className='skew-y-3 flex flex-col gap-y-[35px] lg:w-[468px] w-full h-full'>
                            <div className='flex w-full justify-between gap-x-2'>
                                
                                <div className='md:px-[24.96px] px-2 py-4 gap-y-[15.95px] flex flex-col w-[56%] h-[240px] rounded-[21px] bg-[#D8D2FF] shadow-xl shadow-black/[5%]'>
                                    
                                    <div className='flex items-center gap-x-2 w-full'>
                                        <div className='overflow-hidden size-[76.13px] border-[3.2px] border-[#FDDD8B] rounded-full'>
                                            <img loading= 'lazy' alt="avatar" src="images/avatars/avatar9.webp" className='flex w-full h-full object-cover' />
                                        </div>

                                        <h1 className='flex flex-col text-[22px] w-[70px] font-semibold'>
                                            Allison Parker
                                        </h1>

                                    </div>


                                    <h1 className='text-[18px]'>
                                        Ruby Developer
                                    </h1>

                                    <p className='lg:w-[179px] sm:w-[65%] w-full text-[12px]'>
                                        Redwood City, California 7 years experience
                                    </p>
                                    
                                    <h1 className='font-semibold lg:text-[20px] md:17px text-[#1E1515]'>
                                        LEELAR
                                    </h1>
      
                                
                                </div>





                                <div className='overflow-hidden relative flex flex-col w-[38%] h-[240px] rounded-[21px] bg-[#D8D2FF] shadow-xl shadow-black/[5%]'>
                                     
                                     <div className='-ml-[160px] object-cover flex h-full'>
                                            <img loading= 'lazy' alt="avatar" src="images/avatars/avatar10.webp" className=' flex w-full h-full object-cover' />
                                     </div>


                                    <div className='absolute bg-[#A285D04D]/[30%] object-cover h-full w-full'/>

                                    <h1 className='absolute flex h-full w-full items-center justify-center font-bold lg:text-[36px] md:text-[30px] text-[24px] text-white'>
                                        LEELAR
                                    </h1>
                                
                                </div>


                                

                            </div>






                            <div>
                                <div className='-mt-2 flex sm:gap-x-[30px] h-[197px] w-full rounded-[21px] bg-[#C8EFC4] shadow-xl shadow-black/[5%]'>
                                    <div className='sm:scale-100 scale-[70%] sm:-mt-0 -mt-8 ml-6 flex h-full justify-center items-start w-[137.66px] text-[90px] text-[#20A67D] font-bold'>
                                        10
                                        <span className='flex -mt-2 text-[100px]'>X</span>
                                    </div>
                            
                                    <h1 className='leading-none mt-8 flex sm:w-[47%] w-full sm:text-[34px] text-[20px] text-[#20A67D] font-semibold'>
                                        Start building your team.
                                    </h1>
                                </div>
                            </div>
                            


                        </div>
                    </div>
                </div>

            </div>

        </div>

    </motion.div>
  )
}
