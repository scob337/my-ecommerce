// ShoppingCart.tsx
import React from "react";
import CartItem from "./CartItem";
import CouponCode from "./CouponCode";
import CartSummary from "./CartSummary";
import { useSelector } from "react-redux";
import { RootState } from "../../RTK/store";
import { elData, getTotalPrice } from '../../RTK/ShopCardSlice'
const ShoppingCart: React.FC = () => {
	const ShopCard = useSelector((state: RootState) => state.ShopCard)
	const totalPrice = getTotalPrice(ShopCard);
	return (
		<div className="container mx-auto p-6 w-full">
			<h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

			<div className="flex flex-col gap-6 w-full">
				<div className="w-full flex flex-col">
					<div className="bg-white rounded-lg shadow-lg p-4">
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="font-bold border-b">
										<th className="text-left py-2">Product</th>
										<th className="text-center py-2">Price</th>
										<th className="text-center py-2">Quantity</th>
										<th className="text-center py-2">Total</th>
									</tr>
								</thead>
								<tbody>

									{ShopCard ? ShopCard.map((product: elData) => {
										return (
											<CartItem
												key={product.id}
												id={product.id}
												title={product.title}
												price={product.price}
												quantity={product.qty}
												image={product.img}
											/>
										);
									}) : null}
								</tbody>
							</table>
						</div>

						<div className="flex flex-col w-full mt-4">
							<div className="flex gap-4">
								<button className="px-4 py-2 bg-gray-200 rounded">
									Continue Shopping
								</button>
								<button className="px-4 py-2 bg-gray-800 text-white rounded">
									Update Cart
								</button>
							</div>

							<div className="flex flex-col md:flex-row justify-between w-full mt-4 gap-4">
								<CouponCode />
								<CartSummary total={totalPrice} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
