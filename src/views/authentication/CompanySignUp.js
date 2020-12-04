import React from 'react';
import PropTypes from 'prop-types';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';
import CompanySignUpForm from '../../components/forms/authentications/CompanySignUpForm';

const layoutData = {
	title: 'For Companies',
	description: 'Turn your organisation into a wellness center with our help. Are you asking:” How do I get my team performing to the best of their ability” You’ve landed on the right page.',
	buttonText: 'Switch to Individual',
	buttonLink: '/onboarding/individual',
};


const CompanySignUp = ({history}) => {
	return (
		<AuthLayout data={layoutData} >
			<CompanySignUpForm history={history} />
		</AuthLayout>
	);
};

CompanySignUp.propTypes = {
	history: PropTypes.object.isRequired
};

export default CompanySignUp;
