const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function onBoardCompanyValidator(data) {
	const errors = {};

	data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
	data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.companyName = !isEmpty(data.companyName) ? data.companyName : '';
	data.jobTitle = !isEmpty(data.jobTitle) ? data.jobTitle : '';
	data.size = !isEmpty(data.size) ? data.size : '';

	// first name validation
	if (validator.isEmpty(data.firstName)) {
		errors.firstName = 'FirstName field is required';
	}

	//  last name validation
	if (validator.isEmpty(data.lastName)) {
		errors.lastName = 'Last Name field is required';
	}

	// email validation
	if (!validator.isEmail(data.organizationEmail)) {
		errors.organizationEmail = 'Email is invalid';
	}

	if (validator.isEmpty(data.organizationEmail)) {
		errors.organizationEmail = 'Email field is required';
	}

	if (validator.isEmpty(data.organizationName)) {
		errors.organizationName = 'Company name is required';
	}

	if (validator.isEmpty(data.jobTitle)) {
		errors.jobTitle = 'Job title is required';
	}

	if (validator.isEmpty(data.organizationSize)) {
		errors.organizationSize = 'Size is required';
	}


	return {
		errors,
		isValid: isEmpty(errors)
	};
};