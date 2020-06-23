import React from 'react';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';
import PropTypes from 'prop-types';
import IndividualSignUpForm from '../../components/forms/authentications/IndividualSignUpForm';

const layoutData = {
	title: 'For Individuals',
	description: 'Start benefiting from the wellness experience. For individuals looking a personalized way to improve their health.',
	buttonText: 'Switch to Company',
	buttonLink: '/onboarding/company',
};


const IndividualSignUp = ({history}) => {
	return (
		<AuthLayout data={layoutData}>
			<IndividualSignUpForm history={history} />
		</AuthLayout>
	);
};

IndividualSignUp.propTypes = {
	history: PropTypes.object.isRequired
};

export default IndividualSignUp;
