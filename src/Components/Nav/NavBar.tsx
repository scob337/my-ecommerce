import { useState } from 'react';
import { IconNav, Links } from './LinksData';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <article className="max-w-screen-xl flex flex-col lg:flex-row items-center justify-between mx-auto p-4">
                    <article className="logo lg:w-[20vw] flex justify-between items-center w-full">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://preview.colorlib.com/theme/ashion/img/logo.png.webp" className="h-8" alt="Logo" />
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </article>

                    <article
                        className={`w-full h-fit overflow-hidden transition-[max-height] duration-500 ease-in-out 
                            ${isOpen ? 'absolute max-h-[500px] top-16 left-0 z-10 bg-white' : 'max-h-0'} 
                            lg:relative lg:max-h-none lg:flex lg:justify-between lg:items-center`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-white lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 dark:bg-gray-800 dark:border-gray-700">
                            {Links()}
                        </ul>
                        <article className="mt-4 lg:mt-0">{IconNav}</article>
                    </article>
                </article>
            </nav>
        </section>
    );
}
