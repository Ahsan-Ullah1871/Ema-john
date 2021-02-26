import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
	const { name, img, price, seller, stock } = props.productData;
	return (
		<div className="product">
			<div className="productImage">
				<img src={img} alt="" />
			</div>
			<div className="productInfo">
				<h3 className="productName">{name} </h3>
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
				<button
					className="cartButton"
					onClick={() =>
						props.cartHandler(props.productData)
					}
				>
					<FontAwesomeIcon icon={faShoppingCart} /> add
					to cart
				</button>
			</div>
		</div>
	);
};

export default Product;
