import React from "react";
import axios from "axios";
// import useBearStore from "../../Store";

const Signout = () => {
  // const bears = useBearStore((state: any) => state.bears);

  // console.log(bears);

  const logout = () => {
    axios.get("http://localhost:3001/auth/logout");
  };

  return (
    <div>
      <button onClick={() => console.log("sign out")}>Sign Out</button>
    </div>
  );
};

export default Signout;
