import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";

const Productdetail = () => {
	const { key } = useParams();
	const [product, setProduct] = useState([]);
	useEffect(() => {
		fetch(
			`https://protected-fjord-17093.herokuapp.com/product/${key}`
		)
			.then((response) => response.json())
			.then((data) => setProduct(data));
	}, [key]);
	return (
		<div>
			<h2> {key}Detail Comming</h2>
			<Product
				showAddToCart={false}
				productData={product}
			></Product>
		</div>
	);
};

export default Productdetail;
