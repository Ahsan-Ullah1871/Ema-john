import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cartsummary/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const first10Data = fakeData.slice(0, 10);

	const [products, setproduct] = useState(first10Data);

	const [cart, setCart] = useState([]);

	const cartHandler = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		localStorage.setItem("product", JSON.stringify(newCart));
		console.log(JSON.parse(localStorage.getItem("product")));
	};

	return (
		<div className="productsContainer">
			<div className="productContainer">
				{products.map((product) => (
					<Product
						productData={product}
						cartHandler={cartHandler}
					></Product>
				))}
			</div>
			<div className="cartSummary">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
