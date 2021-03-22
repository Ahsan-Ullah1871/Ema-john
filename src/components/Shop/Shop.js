import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import {
	addToDatabaseCart,
	getDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cartsummary/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const first10Data = fakeData.slice(0, 10);

	const [products, setproduct] = useState(first10Data);

	const [cart, setCart] = useState([]);

	useEffect(() => {
		const savedProduct = getDatabaseCart();
		const productKeys = Object.keys(savedProduct);

		const cartProducts = productKeys.map((key) => {
			const product = fakeData.find((pd) => pd.key === key);
			product.quantity = savedProduct[key];
			return product;
		});
		setCart(cartProducts);
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
