import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, isAuth, ...rest }) => (
	<Route
		{...rest}
		render = {props =>
			auth.isAuthenticated === isAuth ? (
				<Component {...props} />
			) : (
				auth.isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/login" />
			)
		}
	/>
);

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired,
	component: PropTypes.any.isRequired,
	isAuth: PropTypes.bool.isRequired
};

PrivateRoute.defaultProps = {
	isAuth: true,
};

const mapStateToProps = state => ({
	auth: state.user
});

export default connect(mapStateToProps)(PrivateRoute);
