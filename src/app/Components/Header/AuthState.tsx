import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";

const AuthState = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [showComponent, setShowComponent] = useState(false);

  const showSignOutButton = () => {
    const signoutButton = document.getElementById("signoutbutton");
    signoutButton?.classList.toggle("hidden");
  };

  console.log(session);

  const login = () => {
    router.push("/login");
  };

  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 700);
  }, []);

  return (
    <>
      {showComponent && (
        <div>
          {session ? (
            <button
              className="absolute right-0 top-2 mx-3 w-52 rounded-lg border-2 border-border-colour px-1 py-0.5 font-medium"
              onClick={showSignOutButton}
            >
              <div className="flex flex-row items-center">
                <div className="bg-black m-0.5">
                  <img
                    src={session?.user?.image}
                    alt=""
                    className="h-8 w-8 rounded-full"
                  />
                </div>
                {/* <AccountCircleIcon className="m-0.5 text-[35px]">
                  <img src={session?.user?.image} alt=""></img>
                  <Image src={session?.user?.image} alt="img"></Image>
                </AccountCircleIcon> */}
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
        </div>
      )}
    </>
  );
};

export default AuthState;
