import React, { useState, useEffect } from 'react';
import Sliders from '../../../assets/images/banner-1.jpg.webp';

interface Slides {
    title: string;
    description: string;
    buttonText: string;
}

const Slide: React.FC = () => {
    const slides: Slides[] = [
        {
            title: "The Project Jacket",
            description: "Discover the unique styles in the Chloe collection.",
            buttonText: "Shop Now",
        },
        {
            title: "New Season",
            description: "Get ready for the new season with our latest trends.",
            buttonText: "Explore",
        },
        {
            title: "Summer Collection",
            description: "Brighten up your wardrobe with our summer collection.",
            buttonText: "View Collection",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div
            className="relative w-full h-[500px] flex items-center justify-center bg-gray-100 overflow-hidden"
            style={{
                backgroundImage: `url(${Sliders})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="relative flex items-center justify-center w-[100%]
            lg:w-[50%]
            h-full overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                        width: `${slides.length * 100}%`,
                    }}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 text-center"
                        >
                            <p className="text-pink-600 uppercase text-lg">THE CHLOE COLLECTION</p>
                            <h1 className="font-cursive text-4xl md:text-5xl my-2">{slide.title}</h1>
                            <p className="text-gray-700 my-4 text-[16px] w-[90%]">{slide.description}</p>
                            <button className="text-black underline mt-4">{slide.buttonText}</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-6 flex justify-center w-full space-x-2">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${activeIndex === index ? 'bg-pink-600' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slide;
