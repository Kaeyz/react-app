import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* const PrivateRoute = ({ component: Component, auth, isAuth, ...rest }) => (
	<Route
		{...rest}
		render = {props =>
			auth.isAuthenticated === isAuth ? (
				<Component {...props} />
			) : (
				auth.isAuthenticated ?
					<Redirect to="/dashboard" /> :
					<Redirect to="/login" />
			)
		}
	/>
); */


const PrivateRoute = ({ component: Component, isActivated, user, isAuth, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			user.isAuthenticated === isAuth ? (
				isActivated === true ?
					user.adminVerified === false ? <Redirect to="/not_activated" />
						: user.suspended === true ? <Redirect to="/account_suspended" />
							: <Component {...props}/>
					: <Component {...props} />
			) : (
				user.isAuthenticated ?
					<Redirect to="/dashboard" /> :
					<Redirect to="/login" />
			)
		}
	/>
);

PrivateRoute.propTypes = {
	user: PropTypes.object.isRequired,
	component: PropTypes.any.isRequired,
	isAuth: PropTypes.bool.isRequired,
	isActivated: PropTypes.bool.isRequired,
};

PrivateRoute.defaultProps = {
	isAuth: true,
	isActivated: false,
	isSuspended: false,
};

const mapStateToProps = state => {
	const {
		isAuthenticated,
		user: { adminVerified, suspended }
	} = state.user;
	const user = { isAuthenticated, adminVerified, suspended };
	return { user };
};

export default connect(mapStateToProps)(PrivateRoute);
