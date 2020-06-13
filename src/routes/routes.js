import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Health from '../views/wellness/individual/Health';


const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/wellness/individual/health" component={Health} />

		</Switch>
	</Router>
);

export default Routes;