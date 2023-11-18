import React from 'react'
import house_img from '../../Assets/house_img.png'
import Image from 'next/image'

const CardItem = () => {
    return (
        <div className='flex flex-col basis-auto border-0 rounded-xl'>
            <Image src={house_img} alt="Image" className='border-0 rounded-t-xl object-fit w-full h-full' />
            <div className='flex flex-col p-7 bg-[#ECEEFF] rounded-b-xl'>
                <div className='flex items-baseline'>
                    <span className='text-blue font-bold text-[35px]'>$300</span>
                    <span className='text-[#8A8DBA]'>/month</span>
                </div>
                <span className='text-black font-bold text-[45px]'>Subang Jaya</span>
                <span className='text-[#8A8DBA]'>7, Jalan PJS 11/7, Bandar Sunway</span>
            </div>
        </div>
    )
}

export default CardItem