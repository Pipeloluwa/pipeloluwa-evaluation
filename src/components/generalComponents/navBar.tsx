import {  useState } from 'react'
import LogoComponent from './logoComponent'
import { Button, Drawer } from '@material-tailwind/react'
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { mobileEnable, mobileDisable } from '../../state_management/reducers/mobile_button';
    import { useDispatch } from 'react-redux';

const NavBar = () => {
    const dispacth= useDispatch();

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [drawerOverlay]= useState<boolean>(true);

    const openDrawer_ = () => {
        setOpenDrawer(true);
        dispacth(mobileEnable());
        // window.scroll= 
    }

    const openDrawerFunction = () =>{
        setOpenDrawer(false);
        dispacth(mobileDisable());
    }


    // useEffect( () => {
    //     if (largeScreenRef.current){
    //         alert(largeScreenRef.current!.style.);
    //         if (largeScreenRef.current!.style.visibility=== "visible"){
    //             alert("visible")
                
    //         }
    //     }

    // }, [window.innerWidth]);


    return (
        <>
            {
                openDrawer
                ?
                <Drawer 

                    open= {openDrawer} 
                    onClose={openDrawerFunction} 
                    placement='right'
                    size={400}
                    overlay={drawerOverlay}
                    
                    className=' lg:hidden visible fixed top-0 bottom-0 flex justify-start flex-col w-[50%] h-screen text-white bg-gradient-to-b from-[#525AA0] to-[#141735]'
                    placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}
                    >


                    <div className='fixed right-0 flex justify-end items-end'>
                        <IoCloseSharp onClick={ () => {openDrawerFunction()}} className="h-20 cursor-pointer text-white size-[50px] mr-8"/>
                    </div>

                        
                    
                    <ul className='flex flex-col gap-y-8 w-full h-full items-start px-6'>
                      

                        <div className='mt-14 mb-14 flex flex-col items-start w-full h-full justify-between gap-y-12'>
                            
                            <ul className='flex flex-col gap-y-8 py-4'>
                                <li className=' cursor-pointer'>
                                    Find Work
                                </li>

                                <li className='cursor-pointer'>
                                    Find Talent
                                </li>

                                <li className='cursor-pointer'>
                                    Articles
                                </li>

                                <li className='cursor-pointer'>
                                    About Us
                                </li>

                                <li className='cursor-pointer'>
                                    Contact Us
                                </li>
                            </ul>


                            <div className='flex sm:flex-row flex-col sm:gap-y-0 gap-y-4 w-full justify-between gap-x-4 items-center'>
                                <Button className='capitalize bg-transparent shadow-none text-[14px] font-medium' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                                    Log In
                                </Button>

                                <Button 
                                    placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}
                                    className='capitalize p-0 flex items-center justify-center text-[14px] font-medium text-[#202229] bg-white w-[102px] h-[43px] rounded-[16px]'
                                    >

                                    Join Now
                                </Button>

                            </div>

                        </div>
                    </ul>
                </Drawer>

                
                : ""
            }


        
       
            <div className='sticky top-0 z-50 lg:px-[70px] md:px-[50px] px-[5px] w-full backdrop-blur py-[20px]'>
                {/* mt-[36px] */}
                <div className='flex w-full items-center justify-between h-[70px] md:px-[25px] px-[15px] rounded-[15px] text-[14px] text-white bg-[#525AA0] shadow-xl shadow-black/15'>
                    <div className='flex lg:w-auto w-full'>
                        <LogoComponent />
                    </div>

                    <div className='lg:hidden flex w-full justify-end'>
                            {
                                !openDrawer 
                                ? <TiThMenu onClick={() => {openDrawer_()}} className="cursor-pointer text-white size-[45px]"/>
                                : ""
                            }
                    </div>



                    
                    <ul className='lg:flex hidden gap-x-4 items-center justify-center px-4'>
                        <li className='cursor-pointer'>
                            Find Work
                        </li>

                        <li className='cursor-pointer'>
                            Find Talent
                        </li>

                        <li className='cursor-pointer'>
                            Articles
                        </li>

                        <li className='cursor-pointer'>
                            About Us
                        </li>

                        <li className='cursor-pointer'>
                            Contact Us
                        </li>
                    </ul>


                    <div className='lg:flex hidden items-center gap-x-4'>
                        <Button className='capitalize bg-transparent shadow-none text-[14px] font-medium' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                            Log In
                        </Button>

                        <Button 
                            placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}
                            className='capitalize p-0 flex items-center justify-center text-[14px] font-medium text-[#202229] bg-white w-[102px] h-[43px] rounded-[16px]'
                            >

                            Join Now
                        </Button>

                    </div>
                </div>
            </div>
        </>  
    )
}

export default NavBar