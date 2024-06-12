import { motion, } from 'framer-motion'
import { visibleComponent } from '../../animation_variants';


export const FourthSegment = () => {
  return (
    <motion.div 
    initial= "offscreen"
    whileInView= "onscreen"
    variants={visibleComponent}
    className='w-full '>
        <div className='page-margin'>
            <ul className='flex flex-col gap-y-[30px] py-[177px]'>
                <li className='lg:w-[570px] w-full lg:text-[54px] sm:text-[40px] text-[35px] font-bold'>
                    How we ensure you’re in good hands.
                </li>


                <li className='flex lg:w-[646px] w-full text-justify text-[22px]'>
                    With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.
                </li>

                
                <li className='flex flex-col gap-y-[5px]'>
                    <div className='flex gap-x-[23px] items-center lg:w-[635px] w-full px-[20px] py-[11px] border rounded-[7px]'>
                        <div className='flex rounded-full justify-center items-center size-[57px] bg-[#ECECEC]'>
                            <img loading= 'lazy' alt="vector" src="/images/vectors/video-black.webp" className='h-[14.9px]'/>
                        </div>

                        <h1 className='text-16px font-semibold'>
                            Step 1: <span className='font-normal'>Resume Screening</span>
                        </h1>
                    </div>


                    <div className='flex flex-col text-[16px] lg:w-[635px] w-full gap-y-[16px] px-[20px] py-[11px] border rounded-[7px] shadow-xl shadow-black/7'>
                        <div className='flex items-center gap-x-[23px]'>
                            <div className='flex rounded-full justify-center items-center size-[57px] bg-[#8BA4FD]'>
                                <img loading= 'lazy' alt="vector" src="/images/vectors/video-white.webp" className='h-[14.9px]'/>
                            </div>

                            <h1 className='font-semibold'>
                                Step 2: <span className='font-normal'>Video Interview</span>
                            </h1>
                        </div>

                        <p className='flex lg:w-[531px] w-full text-justify'>
                            Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.
                        </p>
                    </div>


                    <div className='flex gap-x-[23px] items-center lg:w-[635px] w-full px-[20px] py-[11px] border rounded-[7px]'>
                        <div className='flex rounded-full justify-center items-center size-[57px] bg-[#ECECEC]'>
                            <img loading= 'lazy' alt="vector" src="/images/vectors/video-black.webp" className='h-[14.9px]'/>
                        </div>

                        <h1 className='text-16px font-semibold'>
                            Step 3: <span className='font-normal'>Technical Evaluation</span>
                        </h1>
                    </div>


                    <div className='flex gap-x-[23px] items-center lg:w-[635px] w-full px-[20px] py-[11px] border rounded-[7px]'>
                        <div className='flex rounded-full justify-center items-center size-[57px] bg-[#ECECEC]'>
                            <img loading= 'lazy' alt="vector" src="/images/vectors/video-black.webp" className='h-[14.9px]'/>
                        </div>

                        <h1 className='text-16px font-semibold'>
                            Step 4: <span className='font-normal'>Application Review</span>
                        </h1>
                    </div>


                    <div className='flex gap-x-[23px] items-center lg:w-[635px] w-full px-[20px] py-[11px] border rounded-[7px]'>
                        <div className='flex rounded-full justify-center items-center size-[57px] bg-[#ECECEC]'>
                            <img loading= 'lazy' alt="vector" src="/images/vectors/video-black.webp" className='h-[14.9px]'/>
                        </div>

                        <h1 className='text-16px font-semibold'>
                            Step 5: <span className='font-normal'>Lets get to work</span>
                        </h1>
                    </div>


                </li>
            </ul>

        </div>
    </motion.div>
        
  )
}
