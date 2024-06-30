import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from "../imgs/logo.svg"
// import AuthModal from '../../../../AuthModal';
const AuthRight = () => {
  return (
    <div className='xl:w-[49%]'>
     
        <div className='md:ml-16 vsm:flex vsm:flex-col vsm:justify-center'>
        <img className='md:hidden w-16 vsm:mb-1' src={logo} alt="logo" />
        <p className='md:text-[70px] font-mono font-bold md:mt-20 vsm:text-[40px]  text-slate-200'>Happening now</p>
          <div className='w-80 '>
            
            <p className='md:text-3xl vsm:lg font-mono md:p-4 font-bold md:mt-10  text-slate-200'>Join today.</p>
            <button className='h-10 bg-white text-black rounded-3xl flex justify-center items-center gap-1 w-80 mt-5'><FcGoogle size="20px" /><span>Sign up with Google</span></button>
            <button className='h-10 bg-white text-black rounded-3xl flex justify-center items-center gap-1 w-80 my-2 '><FaApple size="20px" /><span>Sign up with Apple</span></button>
            <p className='text-white divider px-4'>or</p>
            <button className='h-10 text-white bg-blue-500 rounded-3xl flex justify-center items-center gap-1 w-80 my-2 '>Create account</button>
            <p className=" text-[0.7rem] text-slate-500">By signing up, you agree to the <Link className='text-blue-400  hover:decoration-sky-500 hover:underline' to='/'>Terms of Service</Link> and <Link className='text-blue-400 hover:decoration-sky-500 hover:underline' to="/">Privacy Policy</Link>, including <Link className='text-blue-400  hover:decoration-sky-500 hover:underline' to="/">Cookie Use</Link>.</p>
            <p className='mt-16 pb-3 font-bold text-lg'>Already have an account?</p>
            <button className='h-10 text-blue-500 bg-black border-[1px] border-slate-700 rounded-3xl flex justify-center items-center gap-1 w-80 my-2 font-bold font-mono hover:bg-slate-900 '>Sign in</button>
          </div>
            
        </div>

    </div>
  )
}

export default AuthRight