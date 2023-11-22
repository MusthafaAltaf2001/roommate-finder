import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex flex-col items-center md:flex-row md:justify-between m-2'>
            <span className="text-black font-bold text-[35px] text-center m-2">Search Rooms to Share</span>
            <input className='bg-white text-black border-2 border-solid border-border-colour rounded-md m-2 p-2 w-full md:w-[250px]' type='text' name="myInput" placeholder='Search Rooms by Location' />
        </div>
    )
}

export default SearchBar