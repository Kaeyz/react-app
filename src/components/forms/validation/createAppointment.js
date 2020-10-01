const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function createAppointmentValidator(data) {
	const errors = {};

	data.formTitle = !isEmpty(data.formTitle) ? data.formTitle : '';
	data.purpose = !isEmpty(data.purpose) ? data.purpose : '';
	data.date = !isEmpty(data.date) ? data.date : '';
	data.time = !isEmpty(data.time) ? data.time : '';
	data.professional = !isEmpty(data.professional) ? data.professional : '';
	data.description = !isEmpty(data.description) ? data.description : '';

	// first name validation
	if (validator.isEmpty(data.formTitle)) {
		errors.formTitle = 'Field is required';
	}

	//  last name validation
	if (validator.isEmpty(data.purpose)) {
		errors.purpose = 'Field is required';
	}


	if (data.type === 'PROFESSIONAL' && validator.isEmpty(data.professional)) {
		errors.professional = 'Field is required';
	}

	if (validator.isEmpty(data.description)) {
		errors.description = 'Field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};