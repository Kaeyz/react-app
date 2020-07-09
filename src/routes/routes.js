import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import About from '../views/About';
import Health from '../views/wellness/individual/Health';
import Fitness from '../views/wellness/individual/Fitness';
import Nutrition from '../views/wellness/individual/Nutrition';
import Lifestyle from '../views/wellness/individual/Lifestyle';
import IndividualSignUp from '../views/authentication/IndividualSignUp';
import CompanySignUp from '../views/authentication/CompanySignUp';
import Login from '../views/authentication/Login';
import BlogPost from '../views/blogParent/BlogPost';
import BlogPostDetail from '../views/blogParent/BlogPostDetail';
import DashboardHome from '../views/dashboard/DashboardHome';
import DashboardHome2 from '../views/dashboard/DashboardHome2';
import DashboardAssessment from '../views/dashboard/assessment';
import AdminLogin from '../views/authentication/AdminLogin';
import ForgotPassword from '../views/authentication/ForgotPassword';
import ResetPassword from '../views/authentication/ResetPassword';
import PasswordResetLink from '../views/authentication/PasswordResetLink';
import CompanyRegistrationSuccess from '../views/authentication/CompanyRegistrationSuccess';
import PasswordResetSuccessful from '../views/authentication/PasswordResetSuccessful';
import HealthRiskAssessment from '../views/dashboard/assessment/HealthRiskAssessment';
import General from '../views/dashboard/assessment/hra_questionnaire/General';

import Page404 from '../views/Page404';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/wellness/individual/health" component={Health} />
			<Route path="/wellness/individual/fitness" component={Fitness} />
			<Route path="/wellness/individual/nutrition" component={Nutrition} />
			<Route path="/wellness/individual/lifestyle" component={Lifestyle} />


			{/* Auth routes */}
			<PrivateRoute isAuth={false} path="/login" component={Login} />
			<PrivateRoute isAuth={false} path="/admin_login" component={AdminLogin} />

			<PrivateRoute isAuth={false} path="/onboarding/individual" component={IndividualSignUp} />
			<PrivateRoute isAuth={false} path="/onboarding/company" component={CompanySignUp} />
			<PrivateRoute isAuth={false} path="/onboarding/success" component={CompanyRegistrationSuccess} />

			<PrivateRoute isAuth={false} path="/forgot_password" component={ForgotPassword} />
			<PrivateRoute isAuth={false} path="/reset_link_sent" component={PasswordResetLink} />
			<PrivateRoute isAuth={false} path="/reset" component={ResetPassword} />
			<PrivateRoute isAuth={false} path="/reset_success" component={PasswordResetSuccessful} />


			<PrivateRoute path="/dashboard" component={DashboardHome} />
			<PrivateRoute path="/dashboard_home2" component={DashboardHome2} />
			<PrivateRoute path="/assessments" component={DashboardAssessment} />
			<Route path="/assessment/health/general" component={General}/>
			<PrivateRoute path="/assessment/health" component={HealthRiskAssessment} />


			{/* Blog route */}
			<Route path="/blogPost" component={BlogPost} />
			<Route path="/blogPostDetails" component={BlogPostDetail} />

			<Route path="*" component={Page404} />
		</Switch>
	</Router>
);

export default Routes;