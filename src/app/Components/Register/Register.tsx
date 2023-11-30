"use client";

import React from "react";
import GoogleIcon from "../../Assets/google_icon.svg";
import LoginRegisterSvg from "../../Assets/login_register_img.svg";
import { useRouter } from 'next/navigation'

const Register = () => {
    const router = useRouter()

    const login = () => {
        router.push('login')
    }

  return (
    <div className="flex h-fit min-h-screen max-w-screen flex-col lg:flex-row items-center justify-around bg-white">
      <div className="m-8 hidden items-center justify-start xs:block">
        <LoginRegisterSvg className="h-[250px] w-fit sm:h-[350px] md:h-[350px] lg:h-[450px] xl:h-[700px]" />
      </div>
      <div className="flex h-screen flex-col items-center justify-center md:h-3/4">
        <div className="mx-2 mt-6 flex w-[280px] flex-col">
          <label className="pl-3">Your name</label>
          <input
            className="h-10 pl-3 rounded-md border-2 border-border-colour"
            type="text"
            name="myInput"
            placeholder="Enter first name"
          />
        </div>
        <div className="mx-2 mt-6 flex w-[280px] flex-col">
          <label className="pl-3">Email address</label>
          <input
            className="pl-3 h-10 rounded-md border-2 border-border-colour"
            type="email"
            name="myInput"
            placeholder="Enter your email"
          />
        </div>
        <div className="mx-2 mt-6 flex w-[280px] flex-col">
          <label className="pl-3">Password</label>
          <input
            className="pl-3 h-10 rounded-md border-2 border-border-colour"
            type="password"
            name="myInput"
            placeholder="Enter your password"
          />
        </div>
        <div className="mx-2 mt-6 flex w-[280px] flex-col">
          <label className="pl-3">Confirm Password</label>
          <input
            className="pl-3 h-10 rounded-md border-2 border-border-colour"
            type="password"
            name="myInput"
            placeholder="Confirm your password"
          />
        </div>
        <div className="my-3 flex items-center justify-center">
          <button className="mx-3 mt-6 w-[280px] rounded-lg bg-purple py-2 font-bold text-white">
            Sign up
          </button>
        </div>
        <div className="my-2 flex items-center justify-center pb-4">
          <button className="font-bold text-purple">Forgot Password?</button>
        </div>
        <div className="flex items-center justify-center border-t-2 border-border-colour py-8">
          <button className="flex w-[280px] flex-row items-center justify-center rounded-lg border-2 border-border-colour py-2 font-semibold shadow-2xl">
            <GoogleIcon className="mr-2 h-8 w-8 pr-1" />
            Continue with Google
          </button>
        </div>
        <div className="mb-2 mt-2">
          <span className="font-bold text-dark-blue">
            Already have an account?
          </span>
          <button className="font-bold text-purple" onClick={login}>&nbsp;Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
