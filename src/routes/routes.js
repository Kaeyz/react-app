import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Health from '../views/wellness/individual/Health';
import Fitness from '../views/wellness/individual/Fitness';
import Nutrition from '../views/wellness/individual/Nutrition';
import Lifestyle from '../views/wellness/individual/Lifestyle';
import IndividualSignUp from '../views/authentication/IndividualSignUp';
import CompanySignUp from '../views/authentication/CompanySignUp';
import Login from '../views/authentication/Login';


const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/login" component={Login} />
			<Route path="/wellness/individual/health" component={Health} />
			<Route path="/wellness/individual/fitness" component={Fitness} />
			<Route path="/wellness/individual/nutrition" component={Nutrition} />
			<Route path="/wellness/individual/lifestyle" component={Lifestyle} />
			<Route path="/onboarding/individual" component={IndividualSignUp} />
			<Route path="/onboarding/company" component={CompanySignUp} />

		</Switch>
	</Router>
);

export default Routes;