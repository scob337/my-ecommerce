import React from "react";

interface ProductPricingProps {
    price: number;
    oldPrice: number;
}

const ProductPricing: React.FC<ProductPricingProps> = ({ price, oldPrice }) => {
    return (
        <div className="flex flex-wrap gap-4 mt-8">
            <p className="text-white text-4xl font-semibold">${price}</p>
            <p className="text-gray-400 text-base">
                <span className="text-white line-through">${oldPrice}</span>
                <span className="text-sm ml-1">Tax included</span>
            </p>
        </div>
    );
};

export default ProductPricing;
