/* eslint-disable */

const { dateTimePickerDefaultProps } = require('@material-ui/pickers/constants/prop-types');
const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function rewardInputValidator(data) {
	const errors = {};

	data.title = !isEmpty(data.title) ? data.title : '';
	data.description = !isEmpty(data.description) ? data.description : '';
	data.startDate = !isEmpty(data.startDate)
    ? new Date().toString()
    : data.startDate.toString();
	data.endDate = !isEmpty(data.endDate)
    ? new Date().toString()
    : data.endDate.toString();

	if (validator.isEmpty(data.title)) {
		errors.title = 'Title field is required';
	}

	if (validator.isEmpty(data.description)) {
		errors.description = 'Description field is required';
	}

	if (validator.isEmpty(data.startDate)) {
		errors.startDate = 'start date field is required';
	}
	if (validator.isEmpty(data.endDate)) {
		errors.endDate = 'end date field is required';
	}

	const startDateStr =
    typeof data.startDate === "object"
      ? data.startDate.toString()
			: data.startDate;
	if (validator.isAfter(startDateStr, data.endDate.toString())) {
		errors.startDate = 'start date cannot be after end date';
		errors.endDate = 'start date cannot be after end date';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};