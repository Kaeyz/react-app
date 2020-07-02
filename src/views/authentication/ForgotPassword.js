import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import CommonAuthPaperPage from '../../components/forms/authentications/CommonAuthPaperPage';
import Frame from '../../assets/Frame.svg';
import ForgotPasswordForm from '../../components/forms/authentications/ForgotPasswordForm';

const Wrapper = styled.div`
  hr {
    border: 1px solid #f0f1f3;
  }
`;
function ForgotPassword() {
	return (
		<Wrapper>
			{' '}
			<CommonAuthPaperPage
				img={Frame}
				alt={'frame'}
				title={'Forgot your password?'}
				detail={'Enter email address associated with your account.'}
				buttonText={'SEND RESET LINK'}
			>
				<ForgotPasswordForm />
			</CommonAuthPaperPage>
		</Wrapper>
	);
}

// ForgotPassword.propTypes = {

// }

export default ForgotPassword;
