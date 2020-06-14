import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Health from '../views/wellness/individual/Health';
import Fitness from '../views/wellness/individual/Fitness';
import Nutrition from '../views/wellness/individual/Nutrition';
import Lifestyle from '../views/wellness/individual/Lifestyle';


const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/wellness/individual/health" component={Health} />
			<Route path="/wellness/individual/fitness" component={Fitness} />
			<Route path="/wellness/individual/nutrition" component={Nutrition} />
			<Route path="/wellness/individual/lifestyle" component={Lifestyle} />

		</Switch>
	</Router>
);

export default Routes;