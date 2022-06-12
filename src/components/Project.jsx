import React from 'react'
import Solanapay from '../assets/solanapay.jpg'

const Project = () => {
  return (
    <div name='work' className='w-full md:h-screen text-white bg-black'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white'>Project</p>
                <p className='py-6'>My recent Work&#128071;&#127999;</p>
            </div>

            <div style={{backgroundImage: `url(${Solanapay})`}}
             className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#272727] group container rounded-md justify-center items-center mx-auto content-div'>

                    {/* Hover Effect */}
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Project