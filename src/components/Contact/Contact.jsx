import React from 'react';

const Contact = () => {
    return (
        <section class="text-gray-600 body-font  dark:bg-[#121212]" name='contact'>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="title-font text-lg font-bold mb-4 text-indigo-500">Contact With Me</h1>
                    <p class="lg:w-2/3 mx-auto text-gray-900 sm:text-5xl text-4xl dark:text-gray-200">Have an Project in Mind?</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="">
                                <label for="name" class="leading-7 text-sm text-gray-600 dark:text-gray-200">Name</label>
                                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white dark:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="">
                                <label for="email" class="leading-7 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white dark:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full mt-3">
                            <div class="">
                                <label for="message" class="leading-7 text-sm text-gray-600 dark:text-gray-200">Tell Me About Our Project</label>
                                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white dark:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full mt-5">
                            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none shadow-lg shadow-blue-500/50 hover:bg-indigo-600 rounded text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;