import { CLEAR_INFO_DISPLAY, DISPLAY_INFO } from '../types';
export const infoAlert = (message) => {
	return {
		type: DISPLAY_INFO,
		payload: message,
	};
};

export const clearAlert = () => {
	return { type: CLEAR_INFO_DISPLAY };
};
