import PropTypes from 'prop-types';
import React from 'react';
import CompanySignUpForm from '../../components/forms/authentications/CompanySignUpForm';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';

const layoutData = {
	title: 'For Companies',
	description: 'Let\'s help you turn your organization into a wellness center. Are you wondering how to get your team to deliver peak performance? You\'ve landed on the right page.',
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
