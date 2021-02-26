import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<img src={logo} alt="" />
			<nav>
				<Link exact to="/shop">
					Shop
				</Link>
				<Link exact to="/orderreview">
					Order Review
				</Link>
				<Link exact to="/manage">
					Manage Inventory
				</Link>
			</nav>
		</div>
	);
};

export default Header;
