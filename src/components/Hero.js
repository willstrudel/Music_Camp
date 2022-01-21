import React from 'react';

const Hero = () => {
  return (
      <>
        <div className="bg-white h-screen flex flex-col justify-top items-center p-6">
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl justify-center font-Satisfy pt-10'>“Hillharmonic® in the Rockies”</h1>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl justify-center pt-4 sm:pt-10 font-Jost font-bold'>Chamber Music Weekend</h2>
            <img className='p-8 md:p-12 lg:p-20' src={process.env.PUBLIC_URL + '../images/goldenbell2.jpg'} alt='GoldenBellLodge'></img>
        </div>
      </>
  )
};

export default Hero;
