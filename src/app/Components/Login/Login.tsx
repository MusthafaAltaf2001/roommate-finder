"use client";

import React from "react";
import GoogleIcon from "../../Assets/google_icon.svg";
import Image from "next/image";
import LoginRegisterSvg from "../../Assets/login_register_img.svg";

const Login = () => {
  const openRegister = () => {
    const openRegister = document.getElementById("register");
    openRegister.classList.toggle("hidden");
  };

  return (
    <div className="flex h-fit min-h-screen w-screen flex-col lg:flex-row items-center justify-around bg-white">
      <div className="m-8 hidden xs:block justify-start items-center">
        <LoginRegisterSvg className="w-fit h-[250px] sm:h-[350px] md:h-[450px] xl:h-[800px]"/>
      </div>
      <div className="flex h-fit flex-col items-center justify-center md:h-3/4">
        <div className="mx-2 mt-6 flex w-[280px] flex-col">
          <label className="pl-3">Email</label>
          <input
            className="h-10 rounded-md border-2  border-border-colour bg-off-white pl-3"
            type="email"
            name="myInput"
            placeholder="Email or Username"
          />
        </div>
        <div className="mx-2 mt-6 flex w-[280px] flex-col">
          <label className="pl-3">Password</label>
          <input
            className="h-10 rounded-md border-2 border-border-colour bg-off-white pl-3"
            type="password"
            name="myInput"
            placeholder="Enter password"
          />
        </div>
        <div className="my-3 flex items-center justify-center">
          <button className="mx-3 mt-6 w-[280px] rounded-lg bg-purple py-2 font-bold text-white">
            Login
          </button>
        </div>
        <div className="my-2 flex items-center justify-center pb-4">
          <button className="font-bold text-purple">Forgot Password?</button>
        </div>
        <div className="flex items-center justify-center border-t-2 border-border-colour py-8">
          <button className="flex w-[280px] flex-row items-center justify-center rounded-lg border-2 border-border-colour py-2 font-semibold shadow-2xl">
            <GoogleIcon
              className="mr-2 h-8 w-8 pr-1"
            />
            Continue with Google
          </button>
        </div>
        <div className="mb-2 mt-2">
          <span className="font-bold text-dark-blue">
            You don't have an account?
          </span>
          <button
            className="font-bold text-purple"
            onClick={() => {
              openRegister();
            }}
          >
            &nbsp;Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
