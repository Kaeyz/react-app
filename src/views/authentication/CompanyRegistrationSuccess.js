import React from 'react';
// import PropTypes from 'prop-types'
import Header from '../../components/layouts/appLayout/header';
import Frame from '../../assets/Frame.svg';
import styled from 'styled-components';
import CommonAuthFlowPage from '../../components/forms/authentications/CommonAuthFlowPages';

const Wrapper = styled.div`

`;


function CompanyRegistrationSuccess() {
	return (
		<Wrapper>
			<Header />
			<CommonAuthFlowPage
				img={Frame}
				title={'Registration received.'}
				detail={
					'Your initial registration has been successfully completed! A ChooseLife representative will contact you to complete your registration and to begin onboarding your organization.'
				}
				buttonText={'Back to Home'}
				link={'/'}
			/>
		</Wrapper>
	);
}

// CompanyRegistrationSuccess.propTypes = {

// }

export default CompanyRegistrationSuccess;
