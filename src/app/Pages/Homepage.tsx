"use client"

import React, { useState, useRef } from "react";
import SearchBar from "../Components/Homepage/SearchBar";
import SearchFilter from "../Components/Homepage/SearchFilter";
import CardList from "../Components/Homepage/CardList";

const Homepage = () => {

  return (
    <div className='flex flex-col mx-[5%] lg:mx-[10%] xl:mx-[15%] my-8'>
      <SearchBar />
      <SearchFilter />
      <CardList />
    </div>
  )
}

export default Homepage