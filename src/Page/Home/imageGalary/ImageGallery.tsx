// components/ImageGallery.tsx
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { images } from "./ImagesData";



const ImageGallery: React.FC = () => {
    return (
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 min-h-[60vh] ">
            {images.map((src, index) => (
                <article key={index} className="overflow-hidden relative group h-[300px]
                
                ">
                    <img
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 "
                        loading="lazy"
                    />
                    <article className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-90 w-full h-full flex justify-center items-center text-white text-lg font-bold transition-opacity duration-500 opacity-0 group-hover:opacity-100 cursor-pointer  flex-col">
                        <FaInstagram size={29} />
                        <p>Follow us on Instagram</p>
                    </article>
                </article>
            ))}
        </article>
    );
};

export default ImageGallery;
