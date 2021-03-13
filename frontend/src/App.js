import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/LandingPage";
import Register from "./components/register/Register";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/register' component={Register} />
			</Switch>
		</Router>
	);
};

export default App;
