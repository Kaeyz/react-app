import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import ResetPasswordForm from '../../components/forms/authentications/ResetPasswordForm';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';

const layoutData = {
	title: 'Reset your password',
	description: 'Create a new password',
};

function ResetPassword({location, history}) {
	const {resetToken} = queryString.parse(location.search);
	return (
		<AuthLayout data={layoutData} centered='alignCenter'>
			<ResetPasswordForm resetToken={resetToken} history={history} />
		</AuthLayout>
	);
}

ResetPassword.propTypes = {
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default ResetPassword;
