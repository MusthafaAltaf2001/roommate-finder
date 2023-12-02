"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { signIn, signOut, useSession } from "next-auth/react";
import Signout from "./Components/Header/Signout";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const router = useRouter();
  const { data: session } = useSession();

  // useEffect(() => {
  //   if (session) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // }, []);

  console.log(session);

  const navBarToggle = () => {
    setIsOpen(!isOpen);
    // navRef.current.classList.toggle("hidden")
  };

  const scrollToHome = () => {
    const element = document.getElementById("home");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("footer");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const login = () => {
    router.push("/login");
  };

  const showSignOutButton = () => {
    const signoutButton = document.getElementById("signoutbutton");
    signoutButton?.classList.toggle("hidden");
  };

  const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-dark-blue transition ease transform duration-300 z-200`;

  return (
    <header id="header" className="sticky top-0 z-40">
      <div className="flex h-16 justify-end border-b-2 border-b-border-colour bg-white md:justify-center md:px-[150px] xl:px-[450px]">
        <div className="flex flex-row items-center justify-end md:justify-center">
          <div className="block max-md:hidden">
            <div className="flex items-center justify-center">
              <button onClick={scrollToHome} className="header-right-text">
                Home
              </button>
              <button onClick={scrollToAbout} className="header-right-text">
                About
              </button>
              <button onClick={scrollToProjects} className="header-right-text">
                Projects
              </button>
            </div>
          </div>
        </div>
      </div>
      {session ? (
        <button
          className="absolute right-0 top-2 mx-3 w-52 rounded-lg border-2 border-border-colour px-1 py-0.5 font-medium"
          onClick={showSignOutButton}
        >
          <div className="flex flex-row items-center">
            <AccountCircleIcon className="m-0.5 text-[35px]" />
            <span className="m-0.5">{session?.user?.name}</span>
            <KeyboardArrowDownIcon className="m-0.5" />
          </div>
        </button>
      ) : (
        <button
          onClick={login}
          className="absolute right-0 top-2 mx-3 rounded-lg border-2 border-border-colour px-4 py-2 font-bold text-purple"
        >
          Login
        </button>
      )}
      <div
        className="absolute right-0 top-14 mx-3 hidden rounded-lg border-2 border-border-colour bg-white px-4 py-2 font-medium"
        id="signoutbutton"
      >
        <Signout />
      </div>
      <div
        ref={navRef}
        className={`absolute left-0 top-0 bg-off-white duration-500 ease-in-out ${
          isOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="flex h-screen w-screen flex-col items-center justify-center pt-10">
          <span
            onClick={() => {
              navBarToggle();
              scrollToHome();
            }}
            className="header-drawer-text"
            href="/#"
          >
            Home
          </span>
          <span
            onClick={() => {
              navBarToggle();
              scrollToAbout();
            }}
            className="header-drawer-text"
          >
            About
          </span>
          <span
            onClick={() => {
              navBarToggle();
              scrollToProjects();
            }}
            className="header-drawer-text"
          >
            Projects
          </span>
          <span
            onClick={() => {
              navBarToggle();
              scrollToContact();
            }}
            className="header-drawer-text"
            href="/#"
          >
            Contact
          </span>
        </div>
      </div>
      <div className="z-200 absolute left-2 top-2 hidden max-md:block">
        <button
          className="group flex h-12 w-12 flex-col items-center justify-center rounded"
          onClick={navBarToggle}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "translate-y-1.5 rotate-45 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-translate-y-1.5 -rotate-45 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
