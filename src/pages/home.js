import React from 'react';
import Countdown from '../components/Countdown';
import { motion } from "framer-motion"


const home = () => {
  return (
    <>
      <main className='relative grid justify-center'>
        <motion.section className="grid justify-center items-center"
        initial={{ y: -350 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}>
          <section className="grid grid-col justify-center items-center relative">
              <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl items-center justify-center font-Satisfy pt-10 sm:pt-16 md:pt-18 lg:pt-24 z-20'>“Hillharmonic® in the Rockies”</h1>
          </section>
          <section className='grid grid-col justify-center items-center relative'>
              <h3 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl justify-center pt-4 pb-4 sm:pt-10 font-Jost font-bold z-20'>Chamber Music Weekend</h3>
          </section>
        </motion.section>
        <motion.section className="grid justify-center items-center"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: .5, duration: 1 }}>
          <section className='grid grid-col justify-center items-center relative'>
              <img className='p-0 sm:p-8 md:p-12 lg:p-20 shadow-xl' src={process.env.PUBLIC_URL + '../images/goldenbell2.jpg'} alt='GoldenBellLodge'></img>
          </section>
          </motion.section>
          <motion.section className="grid justify-center items-center"
         initial={{ y: 250 }}
         animate={{ y: 0 }}
         transition={{ delay: .5, type: 'tween', duration: 2, }}>
            <div className="justify-center items-center relative">
              <Countdown />
            </div>
          </motion.section>
        
      </main>
    </>
  )
};
export default home;