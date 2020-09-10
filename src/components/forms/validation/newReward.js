const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function rewardInputValidator(data) {
	const errors = {};

	data.title = !isEmpty(data.title) ? data.title : '';
	data.description = !isEmpty(data.description) ? data.description : '';

	if (validator.isEmpty(data.title)) {
		errors.title = 'Title field is required';
	}

	if (validator.isEmpty(data.description)) {
		errors.description = 'Description field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};