import React from "react";

const ProductActions: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-4 mt-8">
            <button
                type="button"
                className="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold rounded"
            >
                Buy now
            </button>
            <button
                type="button"
                className="min-w-[200px] px-4 py-2.5 border border-yellow-300 bg-transparent text-yellow-300 text-sm font-semibold rounded"
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductActions;
