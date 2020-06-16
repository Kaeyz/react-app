import React from 'react';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';

const layoutData = {
	title: 'For Individuals',
	description: 'Start benefiting from the wellness experience. For individuals looking a personalized way to improve their health.',
	buttonText: 'Switch to Company',
	buttonLink: '/onboarding/company',
};


const IndividualSignUp = () => {
	return (
		<AuthLayout data={layoutData}>
      Individual SignUp
		</AuthLayout>
	);
};

export default IndividualSignUp;
