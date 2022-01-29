import React from 'react';
import Countdown from '../components/Countdown';


const home = () => {
  return (
    <>
      <main className='relative grid justify-center'>
        <section className="grid grid-col justify-center items-center relative">
            <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl items-center justify-center font-Satisfy pt-10 sm:pt-16 md:pt-18 lg:pt-24 z-20'>“Hillharmonic® in the Rockies”</h1>
        </section>
        <section className='grid grid-col justify-center items-center relative'>
            <h3 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl justify-center pt-4 pb-4 sm:pt-10 font-Jost font-bold z-20'>Chamber Music Weekend</h3>
        </section>
        <section className='grid grid-col justify-center items-center relative'>
            <img className='p-0 sm:p-8 md:p-12 lg:p-20 shadow-xl' src={process.env.PUBLIC_URL + '../images/goldenbell2.jpg'} alt='GoldenBellLodge'></img>
        </section>
        <section>
          <div className="justify-center items-center relative">
            <Countdown />
          </div>
        </section>
      </main>
    </>
  )
};
export default home;