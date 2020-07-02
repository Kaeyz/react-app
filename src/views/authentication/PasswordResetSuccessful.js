import React from 'react';
// import PropTypes from 'prop-types'
import Frame from '../../assets/Frame.svg';
import CommonAuthFlowPage from '../../components/forms/authentications/CommonAuthFlowPages';



function PasswordResetSuccessful() {
	return (
		<CommonAuthFlowPage
			img={Frame}
			title={'Reset Successful!'}
			detail={'Try signing in with your new password'}
			buttonText={'LOG IN'}
			link={'/login'}
		/>

	);
}

// PasswordResetSuccessful.propTypes = {

// }

export default PasswordResetSuccessful;
