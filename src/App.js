import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Route, Switch } from "react-router-dom";
import Orderreview from "./components/Orderreview/Orderreview";
function App() {
	return (
		<div>
			<Header></Header>

			<Switch>
				<Route exact path="/" component={Shop}></Route>
				<Route exact path="/shop" component={Shop}></Route>
				<Route
					exact
					path="/orderreview"
					component={Orderreview}
				></Route>
			</Switch>
		</div>
	);
}

export default App;
