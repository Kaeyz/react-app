const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function onBoardCompanyValidator(data) {
	const errors = {};

	data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
	data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.organizationName = !isEmpty(data.organizationName) ? data.organizationName : '';
	data.jobTitle = !isEmpty(data.jobTitle) ? data.jobTitle : '';
	data.size = !isEmpty(data.size) ? data.size : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.password2 = !isEmpty(data.password2) ? data.password2 : '';

	// first name validation
	if (validator.isEmpty(data.firstName)) {
		errors.firstName = 'First Name field is required';
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

	// email validation
	if (!validator.isEmail(data.representativeEmail)) {
		errors.representativeEmail = 'Email is invalid';
	}

	if (validator.isEmpty(data.representativeEmail)) {
		errors.representativeEmail = 'Email field is required';
	}

	if (validator.isEmpty(data.organizationName)) {
		errors.organizationName = 'Organization name is required';
	}

	if (validator.isEmpty(data.jobTitle)) {
		errors.jobTitle = 'Job title is required';
	}

	// https://stackoverflow.com/questions/14850553/javascript-regex-for-password-containing-at-least-8-characters-1-number-1-uppe
	// if (!validator.matches(data.password, /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g)) {
	if (
		!validator.matches(
			data.password,
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$&()\\-`.+,/"\]*$]{8,}$/,
		)
	) {
		errors.password = 'At least 1 uppercase, lowercase, number or special character';
	}

	if (!validator.isLength(data.password, { min: 8 })) {
		errors.password = 'Password must be at least 8';
	}

	if (validator.isEmpty(data.password)) {
		errors.password = 'Password field is required';
	}

	if (data.password !== data.password2) {
		errors.password2 = 'Password do not match';
	}

	if (validator.isEmpty(data.password2)) {
		errors.password2 = 'Field cannot be blank';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};