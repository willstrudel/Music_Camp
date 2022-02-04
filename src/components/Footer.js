import React from 'react';

const Footer = () => {
  return (
  <div>
      <footer className="w-full bottom-0 fixed inset-x-0 xs:p-1 sm:p-2 flex justify-center bg-black">
        <p className="text-white xs:text-xs text-sm">Copyright © 2022 - Design by</p> 
        <a className="font-poiret flex text-white xs:text-xs text-sm ml-1 animate-pulse hover:text-blue-300" href="https://www.willstruder.com/" target="_blank" rel="noopener noreferrer">Will Struder</a> 
    </footer>
  </div>
    
    );
};

export default Footer;
