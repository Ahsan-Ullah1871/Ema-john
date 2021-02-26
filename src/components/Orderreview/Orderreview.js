import React, { useState } from "react";
import "./Orderreview.css";
import Cart from "../Cartsummary/Cart";
import Reviewproduct from "./Reviewproduct";

const Orderreview = () => {
	let store = JSON.parse(localStorage.getItem("product"));

	const removeHandler = (product) => {
		let filter = store.filter((pd) => pd.key != product.key);

		localStorage.setItem("product", JSON.stringify(filter));
		console.log(JSON.parse(localStorage.getItem("product")));
	};

	return (
		<div className="orderReviewSection">
			<div className="ordersProduct">
				{store.map((product) => (
					<Reviewproduct
						productData={product}
						removeHandler={removeHandler}
					></Reviewproduct>
				))}
			</div>
			<div className="OrderCartSummary">
				<Cart cart={store}></Cart>
			</div>
		</div>
	);
};

export default Orderreview;
