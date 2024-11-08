import React from 'react';
import Countdown from './CountDown';

const CounterBanner: React.FC = () => {
    const targetDate = new Date("2024-12-31T00:00:00");

    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 gap-5 md:p-12 rounded-lg shadow-md">
            <div className="w-full md:w-1/2">
                <img
                    src="https://preview.colorlib.com/theme/ashion/img/discount.jpg"
                    alt="Offer Image"
                    className="w-full rounded-lg"
                />
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4">
                <h3 className="text-lg font-semibold text-gray-600">DISCOUNT</h3>
                <h1 className="text-4xl font-bold text-red-600 mt-2 summer">Summer 2024</h1>
                <p className="text-lg font-semibold mt-2">
                    SALE <span className="text-red-600">50%</span>
                </p>

                <Countdown targetDate={targetDate} />
                <button className="mt-6 px-6 py-3 relative overflow-hidden text-black font-bold rounded-full transition-all duration-500 hover:text-white group
                after:content-[''] after:absolute after:w-full after:h-1 after:bg-red-500 after:bottom-0 after:left-0 after:transition-all after:duration-500
                hover:after:h-full
">
                    <span className="relative z-10">Shop Now</span>
                </button>


            </div>
        </div>
    );
};

export default CounterBanner;
