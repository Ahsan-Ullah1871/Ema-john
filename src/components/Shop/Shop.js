import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	addToDatabaseCart,
	getDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cartsummary/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://protected-fjord-17093.herokuapp.com/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

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

	const cartHandler = (product) => {
		const addededKey = product.key;
		const sameProduct = cart.find((pd) => pd.key === addededKey);
		let count = 1;
		let newCart;

		if (sameProduct) {
			count = sameProduct.quantity + 1;
			sameProduct.quantity = count;
			const otherProducts = cart.filter(
				(pd) => pd.key !== addededKey
			);
			newCart = [...otherProducts, sameProduct];
			console.log(newCart);
		} else {
			product.quantity = count;
			newCart = [...cart, product];
		}

		setCart(newCart);

		addToDatabaseCart(product.key, count);
	};

	return (
		<div className="productsContainer">
			<div className="productContainer">
				{products.map((product) => (
					<Product
						key={product.key}
						showAddToCart={true}
						productData={product}
						cartHandler={cartHandler}
					></Product>
				))}
			</div>
			<div className="cartSummary">
				<Cart cart={cart}>
					<Link to="/review">
						<button className="cartButton">
							Review Order
						</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Shop;
