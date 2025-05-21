"use client";
import { JSX } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = (): JSX.Element => {
  return (
    <>
      <div>
        <div className="w-full h-screen flex flex-col items-center justify-center select-none">

          <div className='flex items-center pb-5 ps-10'>
            <h1 className='text-2xl font-semibold'>TEAM</h1>
            <h1
              className='text-2xl font-semibold font-mono min-w-56 text-blue-800'
            >
              <span>&nbsp;</span>
              <Typewriter
                words={['DIGITAL BUSINESS', 'DEVELOPMENT', 'PEJUANG']}
                loop={0}
                cursor
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </div>

          <ol className='list-decimal list-inside'>
            <li className='text-xl font-semibold text-black'>RIDHO ZAHRAN PRATAMA (22.11.4872)</li>
            <li className='text-xl font-semibold text-black'>LINNDA PRAWIDYA  NUR&apos;AINI (22.11.4853)</li>
            <li className='text-xl font-semibold text-black'>LINGGAR ELANG PRATAMA (22.11.4849)</li>
          </ol>
        </div>
      </div>
    </>
  );
}
export default Home;