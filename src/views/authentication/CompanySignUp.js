import React from 'react';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';

const layoutData = {
	title: 'For Companies',
	description: 'Start benefiting from the wellness experience. For companies looking on increasing productivity, and improving organization wellness.',
	buttonText: 'Switch to Individual',
	buttonLink: '/onboarding/individual',
};


const CompanySignUp = () => {
	return (
		<AuthLayout data={layoutData} >
      Company SignUp
		</AuthLayout>
	);
};

export default CompanySignUp;
