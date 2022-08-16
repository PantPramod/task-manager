import React, { useEffect, useState } from 'react'
import { FaClipboard } from 'react-icons/fa';
import { BsCardList } from 'react-icons/bs';
import { MdSpeakerGroup } from 'react-icons/md';
import {AiOutlineUser} from 'react-icons/ai';

const Header = () => {
  const [name, setName] = useState('');

  useEffect(()=>{
const getUserName=async()=>{
  const userInfo=localStorage.getItem("userInfo");
  const userData= await JSON.parse(userInfo ||"")
  setName(userData.name) 
}
getUserName();
},[])


  return (
    <div className=''>
         <nav className='lig text-white p-[10px] '>
            <ul className='max-w-[1000px] flex justify-evenly items-center ml-auto mr-auto'>
                <li className='flex items-center hover:text-yellow-100 transition-all cursor-pointer'><FaClipboard className='mr-[5px]'/>Board</li>
                <li className='flex items-center  hover:text-yellow-100 transition-all cursor-pointer'><BsCardList className='mr-[5px]'/>List</li>
                <li className='flex items-center  hover:text-yellow-100 transition-all cursor-pointer'><MdSpeakerGroup className='mr-[5px]'/>Group</li>
                <li className='border p-[10px] rounded flex items-center  hover:text-yellow-100 transition-all cursor-pointer'><AiOutlineUser className='mr-[5px]'/>{name}</li>
            </ul>

         </nav>
    </div>
  )
}

export default Header
