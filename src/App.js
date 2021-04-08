import React, { createContext, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./components/Review/Review";
import Notfound from "./components/Notfound/Notfound";
import Inventory from "./components/Inventory/Inventory";
import Productdetail from "./components/Productdetail/Productdetail";
import Shipment from "./components/Shipment/Shipment";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserLoginContext = createContext();

function App() {
	const [userLogin, setUserLogin] = useState({});
	return (
		<UserLoginContext.Provider value={[userLogin, setUserLogin]}>
			<Router>
				<Header></Header>
				<h2>Email: {userLogin?.email} </h2>
				<Switch>
					<Route path="/shop">
						<Shop></Shop>
					</Route>
					<Route path="/review">
						<Review></Review>
					</Route>

					<PrivateRoute path="/inventory">
						<Inventory></Inventory>
					</PrivateRoute>
					<PrivateRoute path="/shipment">
						<Shipment></Shipment>
					</PrivateRoute>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route exact path="/">
						<Shop></Shop>
					</Route>
					<Route path="/product/:key">
						<Productdetail></Productdetail>
					</Route>
					<Route path="*">
						<Notfound></Notfound>
					</Route>
				</Switch>
			</Router>
		</UserLoginContext.Provider>
	);
}

export default App;
