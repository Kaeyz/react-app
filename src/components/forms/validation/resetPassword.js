const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function resetPasswordValidator(data) {
	const errors = {};

	data.password = !isEmpty(data.password) ? data.password : '';
	data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : '';

	if (!validator.matches(data.password, /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}/g)) {
		errors.password =
      'Must includes one uppercase and one number';
	}

	if (!validator.isLength(data.password, { min: 8 })) {
		errors.password = 'Password must be at least 8';
	}

	if (validator.isEmpty(data.password)) {
		errors.password = 'Password field is required';
	}

	if (data.password !== data.confirmPassword) {
		errors.confirmPassword = 'Password do not match';
	}

	if (validator.isEmpty(data.confirmPassword)) {
		errors.confirmPassword = 'Field cannot be blank';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};