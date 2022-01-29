import React from "react";

export default function About() {
  return (
    <main>
      <section className='pt-10 justify-center grid grid-col p-6 font-Jost font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
        <h1>ABOUT</h1>
      </section>
      <section className='pt-8 justify-center grid grid-col p-6 font-Jost font-bold'>
          <div className='border-2 p-4 border-stone-700 shadow-xl text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            <h3>What: Adult Music Camp</h3>
            <h3>When: 6/15/2023 - 6/18/2023</h3>
            <h3>Where: Golden Bell Camp & Conference Center</h3>
          </div>
        </section>
    </main>
  );
}