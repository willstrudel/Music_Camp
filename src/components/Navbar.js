import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
      <>
    <nav className="flex justify-between items-center h-16 bg-red-200 text-black relative shadow-xl font-Jost font-bold" role="navigation">
        <Link to="/" className='pl-8 text-lg sm:text-2xl'>Hillharmonic ®</Link>
        <div className="px-6 cursor-pointer md:hidden">
            <svg className="w-6 h-6" fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
        <div className="pr-8 md:block hidden text-lg">
            <Link className="hover:bg-blue-200 rounded-md p-4" to="/">Home</Link>
            <Link className="hover:bg-blue-200 rounded-md p-4" to="/menu">Menu</Link>
            <Link className="hover:bg-blue-200 rounded-md p-4" to="/about">About</Link>
            <Link className="hover:bg-blue-200 rounded-md p-4" to="/contact">Contact</Link>
        </div>
    </nav>
    </>
  )
};

export default Navbar;