"use client"

import React, { useState, useRef } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SearchFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef()

    const navBarToggle = () => {
        setIsOpen(!isOpen)
        // navRef.current.classList.toggle("hidden")
    }

    const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-[#FFFFFF] transition ease transform duration-300 z-200`;

    return (
        <div>
            <div className="flex flex-col bg-white border-border-colour rounded-lg border-2 m-2 md:flex-row md:justify-between overflow-x-auto">
                <div className="flex flex-row items-center">
                    <TuneIcon className="homepage-search-filter-icon" />
                    <button className="homepage-search-filter-button">
                        Filter
                        <KeyboardArrowDownIcon className="text-dark-blue" />
                    </button>
                </div>
                <div className="flex flex-row items-center">
                    <ApartmentIcon className="homepage-search-filter-icon" />
                    <button className="homepage-search-filter-button">
                        Residential Type
                        <KeyboardArrowDownIcon className="text-dark-blue" />
                    </button>
                </div>
                <div className="md:hidden lg:flex flex flex-row items-center">
                    <CalendarMonthIcon className="homepage-search-filter-icon" />
                    <button className="homepage-search-filter-button">
                        Move in Date
                        <KeyboardArrowDownIcon className="text-dark-blue" />
                    </button>
                </div>
                <div className="md:hidden xl:flex flex flex-row items-center">
                    <AttachMoneyIcon className="homepage-search-filter-icon" />
                    <button className="homepage-search-filter-button">
                        Price
                        <KeyboardArrowDownIcon className="text-dark-blue" />
                    </button>
                </div>
                <button className="rounded-md bg-purple m-3 text-off-white text-2xl py-2 px-5 shadow-lg">
                    Search
                </button>

            </div>
            {/* <div className={`absolute left-0 top-0 bg-[#111827] ease-in-out duration-500 ${isOpen ? "translate-x-0 " : "-translate-x-full"}`}>
                <div className="flex flex-col items-center justify-center pt-10 h-screen w-screen">
                    <span className="header-drawer-text">Home</span>
                </div>
            </div> */}
            {/* <div className="z-200 absolute top-2 left-2 hidden max-md:block">
                <button
                    className="flex flex-col h-12 w-12 rounded justify-center items-center group"
                    onClick={navBarToggle}
                >
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                    <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                </button>
            </div> */}
        </div>
    )
}

export default SearchFilter