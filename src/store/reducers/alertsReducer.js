import { SUCCESS_ALERT, INFO_ALERT, ERROR_ALERT, CLEAR_ALERT } from '../types';

const initialState = {
	type: '',
	msg: '',
	status: false,
	errors: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ERROR_ALERT:
		return {
			...state,
			type: 'error',
			msg: action.payload.msg,
			status: true,
			errors: action.payload,
		};
	case SUCCESS_ALERT:
		return {
			...state,
			type: 'success',
			msg: action.payload,
			status: true,
		};
	case INFO_ALERT:
		return {
			...state,
			type: 'info',
			msg: action.payload,
			status: true,
		};
	case CLEAR_ALERT:
		return initialState;
	default:
		return state;
	}
}