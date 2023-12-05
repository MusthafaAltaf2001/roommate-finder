"use client";

import React, { useState, useRef } from "react";
import SearchBar from "../Components/Homepage/SearchBar";
import SearchFilter from "../Components/Homepage/SearchFilter";
import CardList from "../Components/Homepage/CardList";
import { signIn, signOut, useSession } from "next-auth/react";

const Homepage = () => {
  const { data: session } = useSession();

  return (
    <div className="mx-[5%] my-8 flex flex-col bg-off-white lg:mx-[10%] xl:mx-[15%]">
      <SearchBar />
      <SearchFilter />
      <CardList />
    </div>
  );
};

export default Homepage;
