import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { config } from "../../../../url";

const Signout = () => {
  const router = useRouter();
  const BASE_URL = config.url.BASE_URL;

  const logout = () => {
    window.open(`${BASE_URL}/auth/logout`, "_self");
  };

  return (
    <div>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
};

export default Signout;
