const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function ForgotPassword(data) {
	const errors = {};

	data.email = !isEmpty(data.email) ? data.email : '';


	// email validation
	if (!validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}

	if (validator.isEmpty(data.email)) {
		errors.email = 'Email field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};