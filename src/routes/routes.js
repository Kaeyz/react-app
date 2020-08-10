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
import AccountSettings from '../views/dashboard/settings/AccountSettings';
import PasswordSettings from '../views/dashboard/settings/PasswordSettings';
import HelpSettings from '../views/dashboard/settings/HelpSettings';
import AdminLogin from '../views/authentication/AdminLogin';
import ForgotPassword from '../views/authentication/ForgotPassword';
import ResetPassword from '../views/authentication/ResetPassword';
import PasswordResetLink from '../views/authentication/PasswordResetLink';
import CompanyRegistrationSuccess from '../views/authentication/CompanyRegistrationSuccess';
import PasswordResetSuccessful from '../views/authentication/PasswordResetSuccessful';
import HealthRiskAssessment from '../views/dashboard/assessment/HealthRiskAssessment';
import General from '../views/dashboard/assessment/hra_questionnaire/General';
import Covid from '../views/dashboard/assessment/hra_questionnaire/Covid';
import BloodPressure from '../views/dashboard/assessment/hra_questionnaire/BloodPressure';
import Smoking from '../views/dashboard/assessment/hra_questionnaire/Smoking';
import Travel from '../views/dashboard/assessment/hra_questionnaire/Travel';
import Sleep from '../views/dashboard/assessment/hra_questionnaire/Sleep';
import Food from '../views/dashboard/assessment/hra_questionnaire/Food';
import HealthReview from '../views/dashboard/assessment/hra_questionnaire/HealthReview';
import HealthReport from '../views/dashboard/assessment/hra_questionnaire/HealthReport';

import Page404 from '../views/Page404';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/wellness/individual/health" component={Health} />
			<Route exact path="/wellness/individual/fitness" component={Fitness} />
			<Route exact path="/wellness/individual/nutrition" component={Nutrition} />
			<Route exact path="/wellness/individual/lifestyle" component={Lifestyle} />


			{/* Auth routes */}
			<PrivateRoute isAuth={false} exact path="/login" component={Login} />
			<PrivateRoute isAuth={false} exact path="/admin_login" component={AdminLogin} />

			<PrivateRoute isAuth={false} exact path="/onboarding/individual" component={IndividualSignUp} />
			<PrivateRoute isAuth={false} exact path="/onboarding/company" component={CompanySignUp} />
			<PrivateRoute isAuth={false} exact path="/onboarding/success" component={CompanyRegistrationSuccess} />


			<PrivateRoute isAuth={false} exact path="/forgot_password" component={ForgotPassword} />
			<PrivateRoute isAuth={false} exact path="/reset_link_sent" component={PasswordResetLink} />
			<PrivateRoute isAuth={false} exact path="/reset" component={ResetPassword} />
			<PrivateRoute isAuth={false} exact path="/reset_success" component={PasswordResetSuccessful} />


			<Route exact path="/settings/account" component={AccountSettings} />
			<Route exact path="/settings/password" component={PasswordSettings} />
			<Route exact path="/settings/help" component={HelpSettings} />


			<PrivateRoute exact path="/dashboard" component={DashboardHome} />
			<PrivateRoute exact path="/dashboard_home2" component={DashboardHome2} />

			<PrivateRoute exact path="/assessments" component={DashboardAssessment} />
			<PrivateRoute exact path="/assessment/health/start" component={General}/>
			<Route exact path="/assessment/health/general" component={General} />

			<PrivateRoute exact path="/assessment/health/covid" component={Covid}/>
			<PrivateRoute exact path="/assessment/health/blood_pressure" component={BloodPressure}/>
			<PrivateRoute exact path="/assessment/health/smoking" component={Smoking}/>
			<PrivateRoute exact path="/assessment/health/travel" component={Travel}/>
			<PrivateRoute exact path="/assessment/health/sleep" component={Sleep}/>
			<PrivateRoute exact path="/assessment/health/food" component={Food} />

			
			<PrivateRoute exact path="/assessment/health/review" component={HealthReview} />
			<PrivateRoute exact path="/assessment/health/report" component={HealthReport} />
			<PrivateRoute exact path="/assessment/health" component={HealthRiskAssessment} />


			{/* Blog route */}
			<Route exact path="/blogPost" component={BlogPost} />
			<Route exact path="/blogPostDetails" component={BlogPostDetail} />

			<Route path="*" component={Page404} />
		</Switch>
	</Router>
);

export default Routes;