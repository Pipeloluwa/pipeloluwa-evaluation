import { motion} from 'framer-motion'
import {  visibleComponent } from '../../animation_variants';


const SeventhSegment = () => {
  return (
    <motion.div 
    initial= "offscreen"
    whileInView= "onscreen"
    variants={visibleComponent}
    className='-skew-y-3 w-full bg-[#F3F3F3] pb-[171.5px]'>
        <div className='skew-y-3 flex flex-col items-center justify-center w-full'>
            <h1 className='text-center lg:text-[54px] sm:text-[40px] text-[35px] font-bold py-[88px]'>
                Frequently asked questions
            </h1>




            <div className='flex flex-col w-full'>
                
                <ul className='flex flex-col w-full sm:text-[22px]'>
                    <li className='flex px-2 w-full border-t border-b border-[#D6D6D6]'>
                        <h1 className='py-[44px] flex justify-center w-[20%] font-semibold border-r border-[#D6D6D6] '>
                            General
                        </h1>

                        <p className='py-[44px] lg:ml-[20%] lg:w-[60%] opacity-[80%] lg:pl-[100px] pl-[20px]'>
                            I want to work part-time, is that possible
                        </p>
    
                    </li>

                    
                    <li className='flex flex-col w-full'>
                        <div className='flex px-2 w-full lg:pl-[40%]'>
                            <p className='flex w-full opacity-[80%] py-[44px] pl-[100px]'>
                                How long are the average projects?
                            </p>
                        </div>
                        

                        <div className='flex px-2 w-full bg-[#E8E8E8] border-[#D6D6D6] border-t border-b '>
                            <div className='flex items-center w-full justify-between font-semibold lg:pl-[40%] py-[44px] '>
                                <p className='flex pl-[100px]'>
                                    How does the payment works?
                                </p>

                                <img loading= 'lazy' alt="" src="/images/vectors/arrow-yellow.webp" className='h-[15.63px] lg:pr-[89.94px] pr-[20px]'/>
                            </div> 
                        </div>
                     

                        <div className='flex px-2 w-full lg:pl-[40%] '>
                            <p className='flex w-full opacity-[80%] py-[44px] pl-[100px]'>
                                How much can I earn?
                            </p>
                        </div>
                    </li>

                </ul>





                <ul className='flex flex-col w-full sm:text-[22px]'>
                    <li className='flex w-full border-[#D6D6D6] border-t border-b'>
                        <h1 className='pl-2 py-[44px] flex justify-center lg:w-[20%] w-[25%] font-semibold bg-[#E8E8E8] border-[#D6D6D6] border-r'>
                            General
                        </h1>

                        <h1 className='py-[44px] flex justify-center text-center lg:w-[20%] w-[25%] font-semibold border-[#D6D6D6] border-r'>
                            Joining Process
                        </h1>

                        <p className='pr-2 py-[44px] opacity-[80%] lg:pl-[100px] pl-[20px]'>
                            I want to work part-time, is that possible
                        </p>
    
                    </li>

                    
                    <li className='flex flex-col w-full'>
                        <div className='flex w-full pl-[40%]'>
                            <p className='flex w-full opacity-[80%] py-[44px] lg:pl-[100px] pl-[20px]'>
                                How long are the average projects?
                            </p>
                        </div>
                        

                        <div className='flex w-full pl-[40%]'>
                            <p className='flex w-full opacity-[80%] py-[44px] lg:pl-[100px] pl-[20px]'>
                                How long are the average projects?
                            </p>
                        </div>
                     

                        <div className='flex w-full pl-[40%] border-[#D6D6D6] border-t border-b'>
                            <p className='flex w-full opacity-[80%] py-[44px] lg:pl-[100px] pl-[20px]'>
                                How much can I earn?
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </motion.div>
  )
}

export default SeventhSegment