import React from 'react';
import PropTypes from 'prop-types';
import AuthLayout from '../../components/layouts/appLayout/AuthLayout';
import CompanySignUpForm from '../../components/forms/authentications/CompanySignUpForm';

const layoutData = {
	title: 'For Companies',
	description: 'Start benefiting from the wellness experience. For companies looking on increasing productivity, and improving organization wellness.',
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
