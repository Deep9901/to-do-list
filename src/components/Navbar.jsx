import React from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className='flex justify-around bg-indigo-900 text-white py-2'>
            <div className="logo flex items-center">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <span className='font-bold text-xl mx-8'>TaskTrek</span>
            </div>
            <ul className="flex gap-8 mx-9">
                <li className='cursor-pointer transition duration-300 ease-in-out hover:text-blue-500'>Home</li>
                <li className='cursor-pointer transition duration-300 ease-in-out hover:text-blue-500'>Your Tasks</li>
            </ul>
        </nav>
    )
}

export default Navbar;
