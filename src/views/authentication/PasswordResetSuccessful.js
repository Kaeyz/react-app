import React from 'react';
// import PropTypes from 'prop-types'
import Frame from '../../assets/Frame.svg';
import CommonAuthFlowPage from '../../components/forms/authentications/CommonAuthFlowPages';



function PasswordResetSuccessful() {
	return (
		<CommonAuthFlowPage
			img={Frame}
			title={'Reset Successful!'}
			detail={'Proceed to Dashboard'}
			buttonText={'Dashboard'}
			link={'/dashboard'}
		/>

	);
}

// PasswordResetSuccessful.propTypes = {

// }

export default PasswordResetSuccessful;
