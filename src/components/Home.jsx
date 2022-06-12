import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div name='home' className= 'w-full h-screen bg-[#000000]'>
       
       {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-white'>Hi &#9995;&#127998;, my Name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Dieson Powikani</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend / Blockchain Developer </h2>
            <p className='text-white py-4 max-w-[700px]'>Im a Front-End Developer specializing in building responsive front-end application. Currently, I'm also focused on building Dapps on the Ethereum and Solana Network </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>
                  View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
               </button>
            </div>
        </div>

    </div>
  )
}

export default Home