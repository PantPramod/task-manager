import React, { useState } from 'react';
import { MdOutlineLock, MdOutlinePersonOutline } from 'react-icons/md';
import {  useNavigate } from 'react-router-dom';
import axios from '../Helper/axios';

const Login = () => {
     const navigate=   useNavigate()
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async () => {
        try {
            const res = await axios.post('login', {
                name,
                password
            })
            if(res.status===200){
                localStorage.setItem('userInfo', JSON.stringify(res.data))
                navigate('/main', {replace:true})
            }
            console.log("res", res)
        }
        catch (err) {
            console.log("err", err)
        }
    }

    return (
        <div className='login flex justify-center'>
            <div className='bg-white w-[500px] my-4 rounded-[14px] p-10'>
                <h1 className='text-center text-[40px] font-bold mb-10'>Login</h1>
                <div className='ml-5'>Username</div>
                <div className='flex border-b-2 mb-10 items-center p-[7px]'>
                    <MdOutlinePersonOutline size={25} className="mx-2"/>
                    <input
                        autoComplete='off'
                        className='outline-none w-[100%] p-4'
                        type="text"
                        placeholder='Type Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='ml-5'>Password</div>
                <div className='flex border-b-2 mb-10 items-center p-[7px]'>
                    <MdOutlineLock  size={25} className="mx-2" />
                    <input
                        autoComplete='off'
                        className='outline-none w-[100%] p-4'
                        type="password"
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={loginHandler} className="login-btn w-[100%] p-3 rounded-[20px] text-white">Login</button>
                 <p
                 onClick={()=>navigate('/register')} 
                 className= 'text-center  mt-4  text-blue-600 font-semibold cursor-pointer '
                 >Create an Account</p> 
            </div>
        </div>
    )
}

export default Login
