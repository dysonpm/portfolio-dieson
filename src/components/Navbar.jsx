import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin,} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'


export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000] text-white'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'200px'}} />
        </div>

        {/* Menü */}
            <ul className='hidden md:flex'>
                <li>
                <Link  to="home" smooth={true}  duration={500}>
                Home
               </Link>
                </li>
                <li>
                <Link  to="about" smooth={true}  duration={500}>
                About
               </Link>
               </li>
                <li>
                <Link  to="experience" smooth={true}  duration={500}>
                Experience
               </Link>
               </li>
                <li>
                <Link  to="skill" smooth={true}  duration={500}>
                Skills
               </Link>
               </li>
                <li>
                <Link  to="project" smooth={true}  duration={500}>
                Project
               </Link>
               </li>
                <li>
                <Link  to="contact" smooth={true}  duration={500}>
                Contact
               </Link>
               </li>
            </ul>

        {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 '>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

        {/* Mobiles Menü */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center ' }>
                <li onClick={handleClick} className='py-6 text-3xl'>
                <Link onClick={handleClick} to="home" smooth={true}  duration={500}>
                Home
               </Link></li>
                <li className='py-6 text-3xl'>
                     <Link  to="about" smooth={true}  duration={500}>
                About
               </Link>
                </li>
                <li className='py-6 text-3xl'>
                     <Link  to="experience" smooth={true}  duration={500}>
                Experience
               </Link>
                </li>
                <li className='py-6 text-3xl'>
                     <Link  to="skills" smooth={true}  duration={500}>
                Skills
               </Link>
                </li>
                <li className='py-6 text-3xl'>
                     <Link  to="project" smooth={true}  duration={500}>
                Project
               </Link>
                </li>
                <li className='py-6 text-3xl'>
                     <Link  to="contact" smooth={true}  duration={500}>
                Contact
               </Link>
                </li>
            </ul>

        {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a className='flex justify-between items-center w-full text-white'
                        href="https://www.linkedin.com/in/dieson-mbengi-powikani-28b1b6199/">
                           LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[black]'>
                        <a className='flex justify-between items-center w-full text-white'
                        href="https://github.com/dysonpm">
                           Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[red]'>
                        <a className='flex justify-between items-center w-full text-white'
                        href="dieson.powikani@gmail.com">
                           Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Navbar