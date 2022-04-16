import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-white'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hallo&#9995;&#127998; I'm Dieson, nice to meet you. Please take a look aroud.</p>
                </div>
                <div>
                    <p>
                        I am passionate about building great software that improves and help lives of those around me. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About