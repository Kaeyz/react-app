import React from 'react';
import PropTypes from 'prop-types';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';
import LoginForm from '../../components/forms/authentications/LoginForm';


const Login = ({history}) => {
	return (
		<AuthLayout sidebar={false} >
			<LoginForm history={history} />
		</AuthLayout>
	);
};

Login.propTypes = {
	history: PropTypes.object.isRequired,
};

export default Login;
