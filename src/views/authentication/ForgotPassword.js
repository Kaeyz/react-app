import React from 'react';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';
import PropTypes from 'prop-types';
import ForgotPasswordForm from '../../components/forms/authentications/ForgotPasswordForm';

const layoutData = {
	title: 'Forgot your password?',
	description: 'Enter the email address you registered your account with and we’ll send you a reset link',
};


const ForgotPassword = ({history}) => {
	return (
		<AuthLayout data={layoutData} centered='alignCenter'>
			<ForgotPasswordForm history={history} />
		</AuthLayout>
	);
};

ForgotPassword.propTypes = {
	history: PropTypes.object.isRequired
};

export default ForgotPassword;
