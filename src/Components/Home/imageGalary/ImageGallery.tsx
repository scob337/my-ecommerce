// components/ImageGallery.tsx
import React from "react";
import { FaInstagram } from "react-icons/fa";

const images = [
    "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
];

const ImageGallery: React.FC = () => {
    return (
        <div className="grid grid-cols-3 gap-4 p-6 h-[60vh]">
            {images.map((src, index) => (
                <div key={index} className="overflow-hidden relative group h-full">
                    <img
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 "
                    />
                    <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-90 w-full h-full flex justify-center items-center text-white text-lg font-bold transition-opacity duration-500 opacity-0 group-hover:opacity-100 cursor-pointer  flex-col">
                        <FaInstagram size={29} />
                        <p>Follow us on Instagram</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
