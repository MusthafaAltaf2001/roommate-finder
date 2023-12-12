"use client";

import React, { useState, useRef } from "react";
import SearchBar from "../Components/Homepage/SearchBar";
import SearchFilter from "../Components/Homepage/SearchFilter";
import CardList from "../Components/Homepage/CardList";

const Homepage = () => {
  console.log(process.env.NODE_ENV);
  console.log("test");

  return (
    <div className="mx-[5%] my-8 flex flex-col bg-off-white lg:mx-[10%] xl:mx-[15%]">
      <SearchBar />
      <SearchFilter />
      <CardList />
    </div>
  );
};

export default Homepage;
