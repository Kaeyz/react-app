import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import ResetPasswordForm from '../../components/forms/authentications/ResetPasswordForm';
import CommonAuthPaperPage from '../../components/forms/authentications/CommonAuthPaperPage';
import Frame from '../../assets/Frame.svg';


const Wrapper = styled.div`
	hr {
		border: 1px solid #f0f1f3;
	}
`;
function ResetPassword() {
	return (
		<Wrapper>
			<CommonAuthPaperPage
				img={Frame}
				alt={'frame'}
				title={'Enter new password'}
				buttonText={' CHANGE PASSWORD'}
			>
				<ResetPasswordForm />
			</CommonAuthPaperPage>
		</Wrapper>
	);
}

// ResetPassword.propTypes = {

// }

export default ResetPassword;
