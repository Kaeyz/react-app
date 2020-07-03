import React from 'react';
import PropTypes from 'prop-types';
import CommonAuthPaperPage from '../../components/forms/authentications/CommonAuthPaperPage';
import AdminLoginFrom from '../../components/forms/authentications/AdminLoginFrom';
import styled from 'styled-components';

const Wrapper = styled.div`
	hr {
		border: 1px solid #f0f1f3;
	}
`;
function AdminLogin({history}) {
	return (
		<Wrapper>
			{' '}
			<CommonAuthPaperPage
				title={'Admin Portal'}
				detail={
					'Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere.'
				}
				buttonText={'SIGN UP'}
			>
				{/* <hr /> */}
				<AdminLoginFrom history={history}/>

			</CommonAuthPaperPage>
		</Wrapper>
	);
}

AdminLogin.propTypes = {
	history: PropTypes.object.isRequired
};

export default AdminLogin;
