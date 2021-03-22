import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const Productdetail = () => {
	const { key } = useParams();
	const product = fakeData.find((pd) => pd.key === key);
	console.log(product);
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
