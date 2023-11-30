"use client"

import React from 'react'
import google_icon from '../../Assets/google_icon.svg'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close';

const Register = () => {
    const closeRegister = () => {
        console.log('relkj')
    }

    return (
        <div className='flex flex-col border-2 bg-white border-border-colour max-w-[800px] rounded-lg'>
            <div className='flex justify-end m-3'>
                <button onClick={closeRegister}>
                    <CloseIcon />
                </button>
            </div>
            <div className='flex flex-col items-center h-screen md:h-3/4 justify-center'>
                <div className='flex flex-col mt-6 mx-2 w-[280px]'>
                    <label>Your name</label>
                    <input className='border-2 rounded-md border-border-colour h-10' type='text' name="myInput" placeholder='Enter first name' />
                </div>
                <div className='flex flex-col mt-6 mx-2 w-[280px]'>
                    <label>Email address</label>
                    <input className='border-2 rounded-md border-border-colour h-10' type='email' name="myInput" placeholder='Enter your email' />
                </div>
                <div className='flex flex-col mt-6 mx-2 w-[280px]'>
                    <label>Password</label>
                    <input className='border-2 rounded-md border-border-colour h-10' type='password' name="myInput" placeholder='Enter your password' />
                </div>
                <div className='flex flex-col mt-6 mx-2 w-[280px]'>
                    <label>Confirm Password</label>
                    <input className='border-2 rounded-md border-border-colour h-10' type='password' name="myInput" placeholder='Confirm your password' />
                </div>
                <div className='flex items-center justify-center my-3'>
                    <button className="text-white rounded-lg mt-6 py-2 font-bold mx-3 bg-purple w-[280px]">Sign up</button>
                </div>
                <div className='flex items-center justify-center my-2'>
                    <button className='text-purple font-bold'>Forgot Password?</button>
                </div>
                <div className='my-10 flex items-center justify-center'>
                    <button className='flex flex-row items-center justify-center w-[280px] shadow-2xl border-2 rounded-lg border-border-colour py-2 font-semibold'>
                        <Image className='w-6 h-6 pr-1 mr-2' src={google_icon} alt='image' />
                        Continue with Google
                    </button>
                </div>
                <div className='mt-10 mb-2'>
                    <span className='text-dark-blue font-bold'>You don't have an account?</span>
                    <button className='text-purple font-bold' onClick={closeRegister}>&nbsp;Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Register