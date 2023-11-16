import React from "react";

const Homepage = () => {
  return (
    <div className='flex flex-col mx-[5%] lg:mx-[10%] xl:mx-[15%] my-8'>
      <div className='flex flex-col items-center md:flex-row md:justify-between'>
        <span className="text-black font-bold text-[35px] text-center m-2">Search Rooms to Share</span>
        <input className='bg-white text-black border-2 border-solid border-light-border rounded m-2 p-2 w-[230px] xs:w-[250px]' type='text' name="myInput" placeholder='Search Rooms by Location' />
      </div>
    </div>
  )
}

export default Homepage