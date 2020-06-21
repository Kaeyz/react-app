import { SUCCESS_ALERT, INFO_ALERT, CLEAR_ALERT, ERROR_ALERT } from '../types';

export const successAlert = (message) => {
	return {
		type: SUCCESS_ALERT,
		payload: message
	};
};

export const infoAlert = (message) => {
	return {
		type: INFO_ALERT,
		payload: message
	};
};

export const errorAlert = (errors) => {
	return {
		type: ERROR_ALERT,
		payload: errors
	};
};

export const clearAlert = () => {
	return { type: CLEAR_ALERT };
};

