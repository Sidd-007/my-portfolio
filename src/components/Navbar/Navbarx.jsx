import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
} from 'react-icons/fa';
import { GiAbstract051 } from 'react-icons/gi'
import { Link } from 'react-scroll';
import useDarkMode from '../../hooks/useDarkMode';

const Navbar = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 dark:text-gray-200 dark:bg-[#121212] bg-white'>
            <div>
                <GiAbstract051 className='text-4xl ml-8 text-orange-600'/>
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <div className="form-switch  select-none w-11 focus-within:outline-blue flex flex-col justify-center ml-3  ">
                        <input type="checkbox" name="light-switch" id="light-switch-desktop" className="light-switch sr-only " checked={darkTheme} onChange={() => setDarkTheme(!darkTheme)} />
                        <label className="relative bg-teal-500 block overflow-hidden cursor-pointer h-6 rounded-full" htmlFor="light-switch-desktop">
                            <span className=" bg-gradient-to-t absolute block rounded-full h-5 w-5 top-2 left-2 right-1/2 transition-all duration-150 ease-out from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10 dark:left-5" aria-hidden="true"></span>
                            <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                                <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
                                    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                                    <circle cx="32" cy="12" r="3" />
                                    <circle fillOpacity=".4" cx="12" cy="12" r="6" />
                                    <circle fillOpacity=".88" cx="12" cy="12" r="3" />
                                </g>
                            </svg>
                            <span className="sr-only">Switch to light / dark version</span>
                        </label>
                    </div>
                </li>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen dark:text-gray-200 dark:bg-[#121212] bg-white flex flex-col justify-center items-center'
                }
            >
                <li>
                    <div className="form-switch relative select-none w-11 focus-within:outline-blue flex flex-col justify-center ml-3  ">
                        <input type="checkbox" name="light-switch" id="light-switch-desktop" className="light-switch sr-only " checked={darkTheme} onChange={() => setDarkTheme(!darkTheme)} />
                        <label className="relative bg-teal-500 block overflow-hidden cursor-pointer h-6 rounded-full" htmlFor="light-switch-desktop">
                            <span className=" bg-gradient-to-t absolute block rounded-full h-5 w-5 top-2 left-2 right-1/2 transition-all duration-150 ease-out from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10 dark:left-5" aria-hidden="true"></span>
                            <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                                <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
                                    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                                    <circle cx="32" cy="12" r="3" />
                                    <circle fillOpacity=".4" cx="12" cy="12" r="6" />
                                    <circle fillOpacity=".88" cx="12" cy="12" r="3" />
                                </g>
                            </svg>
                            <span className="sr-only">Switch to light / dark version</span>
                        </label>
                    </div>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
