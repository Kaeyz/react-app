import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Frame from '../../assets/Frame.svg';
import CommonAuthFlowPage from '../../components/forms/authentications/CommonAuthFlowPages';
import { resendResetPasswordMail } from '../../store/actions/userActions';


function PasswordResetLink({location, resendResetPasswordMail}) {
	return (
		<CommonAuthFlowPage
			img={Frame}
			title={'Reset Link Sent!'}
			detail={`A reset link has been sent to ${location.state.email}`}
			buttonText={'SEND AGAIN'}
			link={'/forgot_password'}
			onClick={() =>
				resendResetPasswordMail(location.state.email)
			}
		/>

	);
}

PasswordResetLink.propTypes = {
	location: PropTypes.object.isRequired,
	resendResetPasswordMail: PropTypes.func.isRequired
};

export default connect(null, { resendResetPasswordMail })(PasswordResetLink);
