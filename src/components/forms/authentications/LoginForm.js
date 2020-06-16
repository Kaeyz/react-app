import React from 'react';
import AuthFormLayout from './AuthFormLayout';
//import PropTypes from 'prop-types'

function LoginForm() {
	return (
		<AuthFormLayout
			title="Log in to your Account"
			description="Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere."
			showFormAgreement={false}
		>
			LoginForm
		</AuthFormLayout>
	);
}

//LoginForm.propTypes = {}

export default LoginForm;

