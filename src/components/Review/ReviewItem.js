import React from "react";
import "../Product/Product.css";

const ReviewItem = (props) => {
	const { img, name, seller, price, stock, quantity, key } = props.product;
	const styles = {
		borderBottom: "2px solid gray",
		margin: "10px 50px",
		paddingBottom: "20px",
	};
	return (
		<div style={styles}>
			<div className="productImage">
				<img src={img} alt="" />
			</div>
			<div className="productInfo">
				<h3 className="productName">{name}</h3>
				<p>
					<small>by: {seller}</small>
				</p>
				<p>
					<small>$ {price}</small>
				</p>
				<p>
					<small>
						only {stock} left in stock - order
						soon
					</small>
				</p>
				<p>
					<small>Quantity: {quantity}</small>
				</p>
				<button
					className="cartButton"
					onClick={() => props.removeHandler(key)}
				>
					Remove
				</button>
			</div>{" "}
		</div>
	);
};

export default ReviewItem;
