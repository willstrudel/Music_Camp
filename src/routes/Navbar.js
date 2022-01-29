import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <>
        <nav className="flex justify-between items-center h-16 bg-red-200 text-black relative shadow-xl font-Jost font-bold" role="navigation">
            <Link to="/" className='pl-8 text-lg sm:text-2xl'>Hillharmonic ®</Link>
            <section className="px-6 cursor-pointer md:hidden">    
                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="text-black hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Menu
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <nav id="dropdown" className="hidden z-50 w-44 text-base list-none border-2 bg-white rounded">
                    <ul aria-labelledby="dropdownButton">
                        <li>
                        <Link to="/" className="block py-2 px-4 text-sm text-black hover:bg-blue-400">Home</Link>
                        </li>
                        <li>
                        <Link to="/about" className="block py-2 px-4 text-sm text-black hover:bg-blue-400">About</Link>
                        </li>
                        <li>
                        <Link to="/contact" className="block py-2 px-4 text-sm text-black hover:bg-blue-400">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <div className="pr-8 md:block hidden text-lg">
                <Link className="hover:bg-blue-200 rounded-md p-4" to="/">Home</Link>
                <Link className="hover:bg-blue-200 rounded-md p-4" to="/about">About</Link>
                <Link className="hover:bg-blue-200 rounded-md p-4" to="/contact">Contact</Link>
            </div>
        </nav>
    </>
  )
};

export default Navbar;

