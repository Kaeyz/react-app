import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import styled from 'styled-components';
import ResetPasswordForm from '../../components/forms/authentications/ResetPasswordForm';
import CommonAuthPaperPage from '../../components/forms/authentications/CommonAuthPaperPage';
import Frame from '../../assets/Frame.svg';


const Wrapper = styled.div`
	hr {
		border: 1px solid #f0f1f3;
	}
`;
function ResetPassword({location, history}) {
	const {resetToken} = queryString.parse(location.search);
	return (
		<Wrapper>
			<CommonAuthPaperPage
				img={Frame}
				alt={'frame'}
				title={'Enter new password'}
				buttonText={' CHANGE PASSWORD'}
			>
				<ResetPasswordForm resetToken={resetToken} history={history} />
			</CommonAuthPaperPage>
		</Wrapper>
	);
}

ResetPassword.propTypes = {
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default ResetPassword;
