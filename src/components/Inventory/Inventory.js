import React from "react";

const Inventory = () => {
	const handleAddProduct = () => {
		const productData = {};

		fetch("https://protected-fjord-17093.herokuapp.com/addProduct", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(productData),
		});
	};
	return (
		<div>
			<form action="">
				<p>
					<span>Name:</span>
					<input type="text" />
				</p>
				<p>
					<span>Price:</span>
					<input type="text" />
				</p>
				<p>
					<span>Quantity:</span>
					<input type="text" />
				</p>
				<p>
					<span>Picture</span>
					<input type="file" />
				</p>
				<button onClick={handleAddProduct}>
					Add product
				</button>
			</form>
		</div>
	);
};

export default Inventory;
