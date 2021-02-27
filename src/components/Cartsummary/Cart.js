import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
	const cart = props.cart;

	const price = cart.reduce(
		(previous, current) => previous + current.price,
		0
	);

	const shippingCharge = (price) => {
		let charge = 0;
		// console.log(price);
		if (price > 30) {
			charge = 0;
		} else if (price > 15) {
			charge = 5;
		} else if (price < 15 && price !== 0) {
			charge = 3;
		}
		return charge;
	};

	const tax = (price) => Number(Math.round(price * 0.1));

	// console.log(cart);
	return (
		<div>
			<div className="Orderheader">
				<h1>Order Summary</h1>
				<h3>Items Ordered:{cart.length}</h3>
			</div>
			<div className="order-info">
				<div className="info">
					<p>Items:</p>
					<p>${price}</p>
				</div>
				<div className="info">
					<p>Shipping & Handing: </p>
					<p>${shippingCharge(price)}</p>
				</div>
				<div className="info">
					<p>Total before Tax:</p>
					<p>$ {price + shippingCharge(price)}</p>
				</div>
				<div className="info">
					<p>Tax:</p>
					<p>${tax(price)}</p>
				</div>
				<div className="info">
					<h3>Order Total:</h3>
					<h5>
						$
						{price +
							shippingCharge(price) +
							tax(price)}
					</h5>
				</div>

				<Link
					className="review-btn"
					exact
					to="/orderreview"
				>
					Order Review
				</Link>
			</div>
		</div>
	);
};

export default Cart;
