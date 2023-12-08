import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// import useBearStore from "../../Store";

const Signout = () => {
  // const bears = useBearStore((state: any) => state.bears);
  const router = useRouter();

  // console.log(bears);

  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };

  return (
    <div>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
};

export default Signout;
