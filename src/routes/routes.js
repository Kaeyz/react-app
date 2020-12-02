import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import Team from '../views/Team';
import IndividualSignUp from '../views/authentication/IndividualSignUp';
import CompanySignUp from '../views/authentication/CompanySignUp';
import Login from '../views/authentication/Login';
import Blog from '../views/blogParent';
import BlogPostDetail from '../views/blogParent/BlogPostDetail';
import Dashboard from '../views/dashboard/Dashboard';
import DashboardAssessment from '../views/dashboard/assessment';
import AccountSettings from '../views/dashboard/settings/AccountSettings';
import PasswordSettings from '../views/dashboard/settings/PasswordSettings';
import HelpSettings from '../views/dashboard/settings/HelpSettings';
import AdminLogin from '../views/authentication/AdminLogin';
import ForgotPassword from '../views/authentication/ForgotPassword';
import ResetPassword from '../views/authentication/ResetPassword';
import PasswordResetLink from '../views/authentication/PasswordResetLink';
import AccountSuccess from '../views/authentication/AccountSuccess';
import PasswordResetSuccessful from '../views/authentication/PasswordResetSuccessful';
import MailConfirmation from '../views/authentication/MailConfirmation';
import HealthRiskAssessment from '../views/dashboard/assessment/HealthRiskAssessment';
import General from '../views/dashboard/assessment/hra_questionnaire/General';
import Covid from '../views/dashboard/assessment/hra_questionnaire/Covid';
import BloodPressure from '../views/dashboard/assessment/hra_questionnaire/BloodPressure';
import Smoking from '../views/dashboard/assessment/hra_questionnaire/Smoking';
import Travel from '../views/dashboard/assessment/hra_questionnaire/Travel';
import Sleep from '../views/dashboard/assessment/hra_questionnaire/Sleep';
import Stress from '../views/dashboard/assessment/hra_questionnaire/Stress';
import Food from '../views/dashboard/assessment/hra_questionnaire/Food';
import Mental from '../views/dashboard/assessment/hra_questionnaire/Mental';
import Gender from '../views/dashboard/assessment/hra_questionnaire/Gender';
import Activity from '../views/dashboard/assessment/hra_questionnaire/Activity';
import HealthReview from '../views/dashboard/assessment/hra_questionnaire/HealthReview';
import Reports from '../views/reports/Reports';
import HealthReport from '../views/reports/HealthReport';
import HraCompleted from '../views/dashboard/assessment/hra_questionnaire/HraCompleted';
import Exercise from '../views/exercise';
import Meals from '../views/meals';
import ProgrammeDetails from '../views/exercise/ProgrammeDetails';
import Employees from '../views/employees';
import PendingInvites from '../views/employees/PendingInvites';
import Suspended from '../views/employees/Suspended';
import CompanyRewards from '../views/rewards/CompanyRewards';
import IndividualReward from '../views/rewards/IndividualReward';
import Leaderboard from '../views/rewards/Leaderboard';
import Page404 from '../views/Page404';
import Companies from '../views/companies';
import Appointments from '../views/appointments';
import Company from '../views/companies/Company';
import PendingCompanies from '../views/companies/Pending';
import NotActivated from './../views/NotActivated';
import SuspendedPage from './../views/Suspended';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/team" component={Team} />

			{/* Auth routes */}
			<PrivateRoute isAuth={false} exact path="/login" component={Login} />
			<PrivateRoute isAuth={false} exact path="/admin_login" component={AdminLogin} />
			<PrivateRoute isAuth={false} exact path="/onboarding/individual" component={IndividualSignUp} />
			<PrivateRoute isAuth={false} exact path="/onboarding/company" component={CompanySignUp} />
			<PrivateRoute isAuth={false} exact path="/onboarding/employee/:token" component={ResetPassword} />
			<PrivateRoute isAuth={true} exact path="/onboarding/mail_confirmed" component={MailConfirmation} />
			<PrivateRoute isAuth={false} exact path="/forgot_password" component={ForgotPassword} />
			<PrivateRoute isAuth={false} exact path="/reset_link_sent" component={PasswordResetLink} />
			<PrivateRoute isAuth={false} exact path="/reset_password" component={ResetPassword} />
			<PrivateRoute exact path="/reset_success" component={PasswordResetSuccessful} />
			<PrivateRoute exact path="/onboarding/account_success" component={AccountSuccess} />

			<PrivateRoute exact path="/settings/account" component={AccountSettings} />
			<PrivateRoute exact path="/settings/password" component={PasswordSettings} />
			<PrivateRoute exact path="/settings/help" component={HelpSettings} />

			{/* dashboard route */}
			<PrivateRoute exact path="/dashboard" component={Dashboard} />

			{/* company route */}
			<PrivateRoute isActivated={true} exact path="/employees" component={Employees} />
			<PrivateRoute isActivated={true} exact path="/employees/pending" component={PendingInvites} />
			<PrivateRoute isActivated={true} exact path="/employees/suspended" component={Suspended} />

			{/* admin route */}
			<PrivateRoute exact path="/companies" component={Companies} />
			<PrivateRoute exact path="/companies/pending" component={PendingCompanies} />
			<PrivateRoute exact path="/companies/:companyId" component={Company} />

			{/* assessment route */}
			<PrivateRoute isActivated={true} exact path="/assessment" component={DashboardAssessment} />
			<PrivateRoute isActivated={true} exact path="/assessment/health" component={HealthRiskAssessment}/>
			<PrivateRoute isActivated={true} exact path="/assessment/health/start" component={General} />
			<PrivateRoute isActivated={true} exact path="/assessment/health/general" component={General} />

			<PrivateRoute isActivated={true} exact path="/assessment/health/covid" component={Covid}/>
			<PrivateRoute isActivated={true} exact path="/assessment/health/blood_pressure" component={BloodPressure}/>
			<PrivateRoute isActivated={true} exact path="/assessment/health/smoking" component={Smoking}/>
			<PrivateRoute isActivated={true} exact path="/assessment/health/travel" component={Travel}/>
			<PrivateRoute isActivated={true} exact path="/assessment/health/sleep" component={Sleep}/>
			<PrivateRoute isActivated={true} exact path="/assessment/health/food"  component={Food} />
			<PrivateRoute isActivated={true} exact path="/assessment/health/mental" component={Mental} />
			<PrivateRoute isActivated={true} exact path="/assessment/health/activity" component={Activity} />
			<PrivateRoute isActivated={true} exact path="/assessment/health/gender" component={Gender} />
			<PrivateRoute isActivated={true} exact path="/assessment/health/stress" component={Stress} />
			<PrivateRoute isActivated={true} exact path="/assessment/health/review" component={HealthReview} />

			<PrivateRoute isActivated={true} exact path="/assessment/health/questionnaire_completed" component={HraCompleted} />

			{/* Report route */}
			<PrivateRoute isActivated={true} exact path="/reports" component={Reports} />
			<PrivateRoute isActivated={true} exact path="/reports/:reportId" component={HealthReport} />

			{/* Exercise route */}
			<PrivateRoute exact path="/exercise" component={Exercise} />
			<PrivateRoute exact path="/exercise/:exerciseId" component={ProgrammeDetails} />

			{/* meal route */}
			<PrivateRoute isActivated={true} exact path="/meals"  component={Meals} />

			{/* appointments */}
			<PrivateRoute isActivated={true} exact path="/appointments"  component={Appointments} />

			{/* reward */}
			<PrivateRoute isActivated={true} exact path="/rewards" component={CompanyRewards} />
			<PrivateRoute isActivated={true} exact path="/rewards/leaderboard" component={Leaderboard} />
			<PrivateRoute isActivated={true} exact path="/rewards/individual" component={IndividualReward} />

			{/* Blog route */}
			<Route exact path="/blog" component={Blog} />
			<Route exact path="/blog/:blogId" component={BlogPostDetail} />

			<Route path="/not_activated" component={NotActivated} />
			<Route path="/account_suspended" component={SuspendedPage} />
			<Route path="*" component={Page404} />
		</Switch>
	</Router>
);

export default Routes;