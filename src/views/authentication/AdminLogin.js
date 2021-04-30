
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/Frame.svg';
import AdminLoginFrom from '../../components/forms/authentications/AdminLoginFrom';
import CommonAuthPaperPage from '../../components/forms/authentications/CommonAuthPaperPage';

const Wrapper = styled.div`

`;
function AdminLogin({history}) {
	return (
		<Wrapper>
			{' '}
			<CommonAuthPaperPage
				title={'Sign in to Choose Life'}
				detail={
					'Welcome to the Admin Portal'
				}
				img={logo}
			>
				<AdminLoginFrom history={history}/>

			</CommonAuthPaperPage>
		</Wrapper>
	);
}

AdminLogin.propTypes = {
	history: PropTypes.object.isRequired
};

export default AdminLogin;
