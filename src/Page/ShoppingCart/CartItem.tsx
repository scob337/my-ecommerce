import React from 'react';

interface CartItemProps {
    title: string;
    price: number;
    quantity: number;
    image: string;
}

const CartItem: React.FC<CartItemProps> = ({ title, price, quantity, image }) => {
    const total = price * quantity;

    return (
        <tr className="border-b py-2">
            <td className="flex items-center gap-4 py-2">
                <img src={image} alt={title} className="w-12 h-12 rounded" />
                <div>
                    <p className="font-medium w-[250px]">{title}</p>
                    <p className="text-yellow-500">★★★★★</p>
                </div>
            </td>
            <td className="text-center">${price.toFixed(2)}</td>
            <td className="text-center">
                <div className="flex items-center justify-center">
                    <button className="w-[30px] h-[30px] bg-black text-white rounded-full flex justify-center items-center p-2 text-[24px] font-bold hover:scale-110 transition-all">-</button>
                    <span className="px-2">{quantity}</span>
                    <button className="w-[30px] h-[30px] bg-black text-white rounded-full flex justify-center items-center p-2 text-[24px] font-bold hover:scale-110 transition-all">+</button>
                </div>
            </td>
            <td className="text-center">${total.toFixed(2)}</td>
        </tr>
    );
};

export default CartItem;
