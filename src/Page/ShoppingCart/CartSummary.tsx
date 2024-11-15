// CartSummary.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

interface CartSummaryProps {
    total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
    return (
        <div className="w-full md:w-1/3 bg-gray-100 rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Cart Total</h3>

            <div className="flex justify-between py-2 border-t font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <button  className="bg-red-500 text-white w-full py-2 rounded mt-4">
                <NavLink to="/checkout">Proceed to Checkout</NavLink>
            </button>
        </div>
    );
};

export default CartSummary;
