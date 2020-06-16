import React from 'react';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';
import LoginForm from '../../components/forms/authentications/LoginForm';


const Login = () => {
	return (
		<AuthLayout sidebar={false} >
			<LoginForm />
		</AuthLayout>
	);
};

export default Login;
