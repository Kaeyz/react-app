import React from 'react';
// import PropTypes from 'prop-types'
import Frame from '../../assets/Frame.svg';
import CommonAuthFlowPage from '../../components/forms/authentications/CommonAuthFlowPages';


function PasswordResetLink() {
	return (
		<CommonAuthFlowPage
			img={Frame}
			title={'Reset Link Sent!'}
			detail={'A reset link has been sent to tyu***@mail.com'}
			buttonText={'SEND AGAIN'}
			link={''}
		/>

	);
}

// PasswordResetLink.propTypes = {

// }

export default PasswordResetLink;
