import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import ResetPasswordForm from '../../components/forms/authentications/ResetPasswordForm';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';

const layoutData = {
	title: 'Reset your password',
	description: 'Create a new password',
};

function ResetPassword({ location, history, match }) {

	const token = match.params.token;
	const { resetToken } = queryString.parse(location.search);

	return (
		<AuthLayout data={layoutData} centered='alignCenter'>
			<ResetPasswordForm resetToken={token || resetToken} history={history} />
		</AuthLayout>
	);
}

ResetPassword.propTypes = {
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
};

export default ResetPassword;
