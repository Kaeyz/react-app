import React from 'react';
import PropTypes from 'prop-types';
import Frame from '../../assets/Frame.svg';
import CommonAuthFlowPage from '../../components/forms/authentications/CommonAuthFlowPages';


function PasswordResetLink({location}) {
	return (
		<CommonAuthFlowPage
			img={Frame}
			title={'Reset Link Sent!'}
			detail={`A reset link has been sent to ${location.state.email}`}
			buttonText={'SEND AGAIN'}
			link={'/forgot_password'}
		/>

	);
}

PasswordResetLink.propTypes = {
	location: PropTypes.object.isRequired
};

export default PasswordResetLink;
