import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='home' name='home' className='w-full h-screen text-center dark:bg-[#121212]'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-gray-200'>
                        LET'S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='py-4 text-gray-700 dark:text-gray-200 sm:text-7xl text-5xl'>
                        Hi, I'm <span className='text-[#5651e5]'> Siddhant</span>
                    </h1>
                    <h1 className='py-2 text-gray-700 dark:text-gray-200'>A Full Stack Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto dark:text-gray-200'>
                        I’m a front-end web developer specializing in building (and
                        occasionally designing) exceptional digital experiences. Currently,
                        I’m focused on building responsive front-end web applications.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 dark:bg-white  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn className='text-indigo-500' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 dark:bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 dark:bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail className='text-red-600'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
