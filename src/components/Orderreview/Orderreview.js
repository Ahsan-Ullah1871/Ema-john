import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Orderreview.css";
import Cart from "../Cartsummary/Cart";
import Reviewproduct from "./Reviewproduct";

const Orderreview = () => {
	let store = JSON.parse(localStorage.getItem("product"));

	const [cart, setCart] = useState(store);

	const removeHandler = (product) => {
		let filter = store.filter((pd) => pd.key != product.key);
		setCart(filter);
		localStorage.setItem("product", JSON.stringify(filter));

		let getChild = document.getElementById(product.key);
		getChild.innerHTML = "";
		console.log(getChild);
	};

	return (
		<div className="orderReviewSection">
			<div id="ordersProduct" className="ordersProduct">
				{console.log(cart)}{" "}
				{cart.map((product) => (
					<Reviewproduct
						productData={product}
						removeHandler={removeHandler}
					>
						<Link exact to="/orderreview">
							Order Review
						</Link>
					</Reviewproduct>
				))}
			</div>
			<div className="OrderCartSummary">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Orderreview;
