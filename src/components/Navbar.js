import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <>
        <nav className="flex justify-between items-center h-16 bg-red-200 text-black relative shadow-xl font-Jost font-bold" role="navigation">
            <Link to="/" className='pl-8 text-lg sm:text-2xl'>Hillharmonic ®</Link>
            <section className="px-6 cursor-pointer md:hidden">    
                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="text-black hover:bg-blue-400 focus:ring-2 focus:ring-blue-400 font-semibold rounded-lg text-sm px-3 py-3 text-center inline-flex items-center" type="button">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
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

