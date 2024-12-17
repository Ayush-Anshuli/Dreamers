import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const headeritems = [
        { path: '/', title: 'Start a search' },
        { path: '/post-job', title: 'Post A Job' },
        { path: '/my-job', title: 'My Jobs' },
        { path: '/about', title: 'About' }
    ];

    return (
        <>
            <div className="flex justify-between items-center px-4 py-3 bg-white shadow-md md:px-10">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link to={'/'} className="flex items-center">
                        <img src={logo} alt="Dreamers Logo" className="h-10" />
                        <h1 className=" text-lg  md:text-2xl ml-2 font-bold">Dreamers</h1>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center text-lg">
                    {headeritems.map(({ path, title }) => (
                        <li key={title} className="text-sm">
                            <NavLink 
                                to={path} 
                                className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

               

                {/* Hamburger Menu */}
                <button
                    className="block md:hidden text-gray-700 text-2xl focus:outline-none"
                    onClick={handleMenuToggle}
                >
                    {<RiMenu3Fill/>}
                        {/* <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        /> */}
                    
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col gap-4 px-6 py-4 text-lg">
                        {headeritems.map(({ path, title }) => (
                            <li key={title}>
                                <NavLink 
                                    to={path} 
                                    className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    
                </div>
            )}
        </>
    );
}

export default Header;