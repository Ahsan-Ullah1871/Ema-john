import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
	getDatabaseCart,
	processOrder,
	removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cartsummary/Cart";
import ReviewItem from "./ReviewItem";
import image from "../../images/giphy.gif";

const Review = () => {
	const [cart, setCart] = useState([]);
	useEffect(() => {
		const savedProduct = getDatabaseCart();
		const productKeys = Object.keys(savedProduct);

		fetch(
			"https://protected-fjord-17093.herokuapp.com/getProductByKeys",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(productKeys),
			}
		)
			.then((response) => response.json())
			.then((data) => setCart(data));
	}, []);
	const removeHandler = (key) => {
		const newCart = cart.filter((pd) => pd.key !== key);
		setCart(newCart);
		removeFromDatabaseCart(key);
	};

	const [placeOrder, setPlaceOrder] = useState(false);
	const history = useHistory();
	const ProceedOrder = () => {
		history.push("/shipment");
	};
	let Thanks;
	if (placeOrder) {
		Thanks = <img src={image} alt="" />;
	}
	return (
		<div className="productsContainer">
			<div className="productContainer">
				{cart.map((product) => (
					<ReviewItem
						product={product}
						removeHandler={removeHandler}
					></ReviewItem>
				))}
				{Thanks}
			</div>
			<div className="cartSummary">
				<Cart cart={cart}>
					<button
						className="cartButton"
						onClick={ProceedOrder}
					>
						Proceed Order
					</button>
				</Cart>
			</div>
		</div>
	);
};

export default Review;
