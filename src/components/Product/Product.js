import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Product = (props) => {
	const { name, img, price, seller, stock, key } = props.productData;
	return (
		<div className="product">
			<div className="productImage">
				<img src={img} alt="" />
			</div>
			<div className="productInfo">
				<h3 className="productName">
					<Link to={"/product/" + key}>{name}</Link>{" "}
				</h3>
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
				{props.showAddToCart === true && (
					<button
						className="cartButton"
						onClick={() =>
							props.cartHandler(
								props.productData
							)
						}
					>
						<FontAwesomeIcon
							icon={faShoppingCart}
						/>{" "}
						add to cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Product;
