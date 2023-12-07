import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/navigation";

const AuthState = ({ user }: { user: any }) => {
  const session = null;
  const router = useRouter();
  const [showComponent, setShowComponent] = useState(false);

  const showSignOutButton = () => {
    const signoutButton = document.getElementById("signoutbutton");
    signoutButton?.classList.toggle("hidden");
  };

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
          {user ? (
            <button
              className="absolute right-0 top-2 mx-3 w-fit rounded-lg border-2 border-border-colour px-1 py-0.5 font-medium"
              onClick={showSignOutButton}
            >
              <div className="flex flex-row items-center">
                <div className="bg-black m-1">
                  <img
                    src={user?.photos[0].value}
                    alt=""
                    className="h-8 w-8 rounded-full"
                  />
                </div>
                <span className="m-1">{user.name.givenName}</span>
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
