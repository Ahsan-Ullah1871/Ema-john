import React from "react";
import "./Reviewproduct.css";

const Reviewproduct = (props) => {
	const dataCatch = props.productData;
	const { name, img, seller, price, stock } = dataCatch;

	return (
		<div>
			<div className="FullProductData">
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
							only {stock} left in stock -
							order soon
						</small>
					</p>

					<button
						onClick={() =>
							props.removeHandler(
								props.productData
							)
						}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default Reviewproduct;
