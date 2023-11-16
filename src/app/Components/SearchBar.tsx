import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex flex-col items-center md:flex-row md:justify-between'>
            <span className="text-black font-bold text-[35px] text-center m-2">Search Rooms to Share</span>
            <input className='bg-white text-black border-2 border-solid border-light-border rounded-md m-2 p-2 w-[230px] xs:w-[250px]' type='text' name="myInput" placeholder='Search Rooms by Location' />
        </div>
    )
}

export default SearchBar