import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/LandingPage";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Landing} />
			</Switch>
		</Router>
	);
};

export default App;
