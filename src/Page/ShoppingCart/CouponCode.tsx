// CouponCode.tsx
import React from 'react';

const CouponCode: React.FC = () => {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Discount Codes</h3>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter your coupon code"
                    className="border rounded px-4 py-2 w-full"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded">Apply</button>
            </div>
        </div>
    );
};

export default CouponCode;
