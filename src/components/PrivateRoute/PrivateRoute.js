import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserLoginContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
	const [userLogin, setUserLogin] = useContext(UserLoginContext);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				userLogin.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
