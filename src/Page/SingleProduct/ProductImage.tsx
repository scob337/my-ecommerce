import React from "react";

interface ProductImageProps {
    image: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ image }) => {
    return (
        <div className="bg-gray-800 px-4 py-12 rounded-xl">
            <img
                src={image}
                alt="Product"
                className="w-9/12 rounded object-cover mx-auto"
            />
        </div>
    );
};

export default ProductImage;
