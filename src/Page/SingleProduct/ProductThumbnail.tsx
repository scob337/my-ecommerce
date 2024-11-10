import React from "react";

interface ProductThumbnailProps {
    images: string[];
}

const ProductThumbnail: React.FC<ProductThumbnailProps> = ({ images }) => {
    return (
        <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="w-[90px] h-20 flex items-center justify-center bg-gray-800 rounded-xl p-4 cursor-pointer"
                >
                    <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="w-full object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductThumbnail;
