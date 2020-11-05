/*eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import CommonAuthPaperPage from '../../components/forms/authentications/CommonAuthPaperPage';
import AdminLoginFrom from '../../components/forms/authentications/AdminLoginFrom';
import styled from 'styled-components';
import logo from '../../assets/Frame.svg'

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
