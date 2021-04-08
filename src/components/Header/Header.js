import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserLoginContext } from "../../App";

import logo from "../../images/logo.png";
import { initializeFramework, singOutHandle } from "../Login/LoginManegment";
import "./Header.css";

const Header = () => {
	const [userLogin, setUserLogin] = useContext(UserLoginContext);

	initializeFramework();
	const signOut = () => {
		singOutHandle().then((result) => setUserLogin(result));
	};
	return (
		<div className="header">
			<img src={logo} alt="" />
			<nav>
				<Link to="/shop">Shop</Link>
				<Link to="/review">Order Review</Link>
				<Link to="/inventory">Manage Inventory</Link>
				<button onClick={signOut}>Sign Out</button>
			</nav>
		</div>
	);
};

export default Header;
