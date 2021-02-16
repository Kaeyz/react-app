const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function onBoardIndividualValidator(data) {
	const errors = {};

	data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
	data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.gender = !isEmpty(data.gender) ? data.gender : '';
	data.height = !isEmpty(data.height) ? data.height : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.password2 = !isEmpty(data.password2) ? data.password2 : '';
	data.activity = !isEmpty(data.activity) ? data.activity : '';
	data.weight = !isEmpty(data.weight) ? data.weight : '';
	data.dob = !isEmpty(data.dob) ? data.dob : '';

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

	if (validator.isEmpty(data.gender)) {
		errors.gender = 'Gender is required';
	}

	if (validator.isEmpty(data.height)) {
		errors.height = 'Height is required';
	}

	if (validator.isEmpty(data.weight)) {
		errors.weight = 'Weight is required';
	}

	if (validator.isEmpty(data.activity)) {
		errors.activity = 'Activity is required';
	}

	// https://stackoverflow.com/questions/14850553/javascript-regex-for-password-containing-at-least-8-characters-1-number-1-uppe
	// if (validator.matches(data.password, /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g)) {
	if (
		!validator.matches(
			data.password,
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$&()\\-`.+,/"\]*$]{8,}$/,
		)
	) {
		errors.password = 'Must include 1 uppercase  & 1 lowercase & 1 number';
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
		isValid: isEmpty(errors),
	};
};