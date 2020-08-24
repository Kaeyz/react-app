import React from 'react';
import PropTypes from 'prop-types';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';
import LoginForm from '../../components/forms/authentications/LoginForm';

const layoutData = {
	title: 'Welcome back to Choose Life',
	description: 'Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere.',
};


const Login = ({history}) => {
	return (
		<AuthLayout data={layoutData} >
			<LoginForm history={history} />
		</AuthLayout>
	);
};

Login.propTypes = {
	history: PropTypes.object.isRequired,
};

export default Login;
