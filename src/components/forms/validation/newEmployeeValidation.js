const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function onBoardEmployeeValidator(data) {
	const errors = {};

	data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
	data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
	data.email = !isEmpty(data.email) ? data.email : '';

	// first name validation
	if (validator.isEmpty(data.firstName)) {
		errors.firstName = 'First Name field is required';
	}

	//  last name validation
	if (validator.isEmpty(data.lastName)) {
		errors.lastName = 'Last Name field is required';
	}

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