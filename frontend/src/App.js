import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import EmailVerified from "./components/EmailVerified";
import Landing from "./components/LandingPage";
import MoreInfo from "./components/MoreInfo";
import Register from "./components/Register";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/moreinfo' component={MoreInfo} />
				<Route exact path='/verify/:streamingService/:email' component={EmailVerified} />
			</Switch>
		</Router>
	);
};

export default App;
