import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen dark:bg-[#121212] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-600 dark:text-gray-200'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-gray-600 dark:text-gray-200'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. <span className='text-indigo-500'>I'm Siddhant Meshram</span>, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, expedita! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis tempora, deleniti minus earum alias doloribus?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
