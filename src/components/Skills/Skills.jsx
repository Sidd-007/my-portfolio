import React from 'react';

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/node.png';
import FireBase from '../../assets/firebase.png';
import Tailwind from '../../assets/tailwind.png';
import Mongo from '../../assets/mongo.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen dark:bg-[#121212] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-gray-800 dark:text-gray-200'>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md'>
                        <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md'>
                        <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-md'>
                        <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                        <p className='my-4'>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;