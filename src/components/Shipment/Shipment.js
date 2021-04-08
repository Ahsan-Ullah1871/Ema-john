import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserLoginContext } from "../../App";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";

const Shipment = () => {
	const { register, handleSubmit } = useForm();
	const [userLogin, setUserLogin] = useContext(UserLoginContext);

	const onSubmit = (data) => {
		const savedProduct = getDatabaseCart();
		const orderInfo = {
			...userLogin,
			products: savedProduct,
			shipmentInfo: data,
			orderTime: new Date(),
		};
		fetch("https://protected-fjord-17093.herokuapp.com/addOrder", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(orderInfo),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					processOrder();
					alert("Your Order is success");
				}
			});
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p>
					<span>Name</span>{" "}
					<input
						name="firstName"
						ref={register({
							required: true,
						})}
					/>
				</p>
				<p>
					<span>Address</span>
					<input
						name="Address"
						ref={register({
							required: true,
						})}
					/>
				</p>
				<p>
					<span>Number</span>
					<input
						name="mobile"
						type="number"
						ref={register({
							required: true,
						})}
					/>
				</p>

				<input type="submit" />
			</form>
		</div>
	);
};

export default Shipment;
