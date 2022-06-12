import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#000000] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/b44891ec-caef-420c-a7e7-73d5d848d26d" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-white-600 text-white'>Contact</p>
                    <p className='text-white py-4'>Submit the form below or send me an Email - dieson.powikani@gmail.com </p>
                </div>
                <input className='bg-[#ffffff] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ffffff] p-2' name="message"  rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact