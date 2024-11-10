import React from "react";

interface SellerInfoProps {
    sellerName: string;
    sellerImage: string;
}

const SellerInfo: React.FC<SellerInfoProps> = ({ sellerName, sellerImage }) => {
    return (
        <div className="flex items-start mt-8">
            <img
                src={sellerImage}
                className="w-12 h-12 rounded-full border-2 border-white"
                alt="Seller"
            />
            <div className="ml-3">
                <h4 className="text-sm font-semibold text-white">{sellerName}</h4>
            </div>
        </div>
    );
};

export default SellerInfo;
