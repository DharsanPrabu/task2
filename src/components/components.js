import {Button} from '@radix-ui/themes'
import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai"
import {FaUsers} from "react-icons/fa"
import {GoOrganization} from "react-icons/go"
import {MdVerifiedUser} from "react-icons/md"
import {RiArrowDropDownLine} from "react-icons/ri"
import {AiFillLock} from "react-icons/ai"
import {HiOutlinePuzzle} from "react-icons/hi"
import {TbSunHigh} from "react-icons/tb"
import {TbFidgetSpinner} from "react-icons/tb"
import {FaKey} from "react-icons/fa"
import {TiAttachmentOutline} from "react-icons/ti"
import {GrBundle} from "react-icons/gr"
import {FiSettings} from "react-icons/fi"
import {RxSlash} from "react-icons/rx"
import {CgArrowsScrollV} from "react-icons/cg" 
import {HiOutlineCube} from "react-icons/hi"




function Components(props){

    const navigate = useNavigate()

    const [showButton, setShowButton] = useState(false)
    const [showsButton, setShowsButton] = useState(false)

    return(
        <div className=''>
            <div className='flex py-8 px-10'>
                <img src="/clerk.svg" alt='' width="30px" height="30px" />
                <p className='pl-6 pt-1 text-gray-400'> / </p>
                <div className='pl-4 rounded-lg'>
                <img src="/qw.png" alt='' width="35px" height="30px" />
                </div>
                <p className='text-xm pl-4 pt-1'>Product Fusion Dev</p>
                <p className='pt-2'><CgArrowsScrollV/></p>
                <p className='pl-4 pt-1 text-gray-400'> / </p>
                <p className='pl-2 pt-2 text-gray-400'><HiOutlineCube/></p>
                <p className='pl-2 pt-1  '>Task - 02</p>
                <p className='pl-6 pt-1 text-gray-400'> / </p>
                <p className='pl-4 pt-1  '>Development</p>
                <p className='pt-2'><CgArrowsScrollV/></p>

                 
            </div>
            <hr/>
            <div className='flex'>
                <div className="h-screen p-12 border-r" style={{width: "350px"}}>
                    <ul>
                        <li className="hover:bg-gray-200 rounded-md text-gray-400 font-family: ui-sans-serif, system-ui flex mb-4 cursor-pointer font-medium text-base bg-text-gray-400 hover:text-black px-5 hover:bg-gray">
                            <AiOutlineHome className='mt-1 mr-2' />
                            <p className=''>Home</p> 
                        </li>
                        <li className="hover:bg-gray-200 rounded-md flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black px-5 " onClick={() => navigate("/")}>
                            <FaUsers className='mt-1 mr-2'/>
                         <p>Users</p>
                        </li>
                        <li className="hover:bg-gray-200 rounded-md  flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black px-5 " onClick={() => navigate("/")}>
                            <GoOrganization className='mt-1 mr-2'/>
                        <p>Organizations</p>
                        </li>
                
                        <li className=' my-5 text-xs flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5'>
                            Configure</li>
                        <li className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" onClick={() => {setShowButton(!showButton)}}>
                          <MdVerifiedUser className='mt-1 mr-2'/>
                           <p>User&authentication</p><RiArrowDropDownLine className='mt-1 text-xl' />
                        </li>
                        {showButton === true ? 
                            <div className="  mb-4 cursor-pointer font-medium  text-gray-400 hover:text-black px-5">
                                <p className=" text-xs flex mb-4 cursor-pointer text-gray-400 hover:text-black px-5"onClick={() => navigate("/authentication")}>Email, Phone, User Name</p>
                                <p className=" text-xs  flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black px-5">Social connections</p>
                                <p className=" text-xs flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black px-5">Web3</p>
                                <p className=" text-xs  flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black px-5">Enterprices connections</p>
                                <p className=" text-xs  flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black px-5">Multi factor </p>
                                <p className=" text-xs  flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black px-5">Restrictions</p>
                            </div>
                        :
                            null
                        }
                    </ul>
                    <li className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" >
                    <GoOrganization className='mt-1 mr-2'/>
                        <p>Organizations settings</p>
                        </li>
                       <li className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" >
                            <AiFillLock className='mt-1 mr-2'/>
                        <p>Session</p>
                        </li>
                        <li className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5"onClick={() => {setShowButton(!showsButton)}} >
                        <svg width="15" height="15" className='mt-1 mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20" fill="currentColor" aria-hidden="true" focusable="false" class="chakra-icon css-1xeurns"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>                    
                        <p>Customization</p><RiArrowDropDownLine/>
                        </li>
                        {showsButton === true ? 
                            <div className="  mb-4 cursor-pointer font-medium  text-gray-400 hover:text-black px-5">
                                <p className=" text-xs flex mb-4 cursor-pointer text-gray-400 hover:text-black px-5">Branding</p>
                                <p className=" text-xs  flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black px-5">Hosted Pages </p>
                                    <p className=" text-xs flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black px-5">Avatar</p>
                                    <p className=" text-xs  flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black px-5">Emails</p>
                                    <p className=" text-xs  flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black px-5">SMS </p>
                                   
                            </div>
                        :
                            null
                        }
                        <li className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" >
                        <HiOutlinePuzzle className='mt-1 mr-2'/>
                         <p>integration</p>
                        </li>
                        <li className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" >
                        <TbSunHigh className='mt-1 mr-2'/>
                        <p>JWT Templates</p>
                        </li>
                        <li className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" >
                        <TbFidgetSpinner className='mt-1 mr-2'/>                     
                       <p>Webhooks</p>
                        </li>
                        
                    <div className='developers'>
                    <p className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" >

                        <p className='my-5 text-xs'>Developers</p></p>
                        <li className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" >
                        <FaKey className='mt-1 mr-2'/>                      
                        <p>API Keys</p>
                        </li>
                        <li className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" >
                        <TiAttachmentOutline className='mt-1 mr-2'/>                      
                        <p>Path</p>
                        </li>
                      
                    </div>

                    <div className='developers'>
                    <p className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" >

                        <p  className='my-5 text-xs'>Application</p></p>
                        <li className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" >
                        <GrBundle className='mt-1 mr-2'/>                      
                        <p>Plan & Billing</p>
                        </li>
                        <li className="flex mb-4 cursor-pointer font-medium text-gray-400 hover:text-black  px-5" >
                        <FiSettings className='mt-1 mr-2'/>                      
                        <p>Settings</p>
                        </li>
                      
                         
                    </div>
                </div>
                
                <div style={{height:'100vh',width:'100vw'}}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Components

 