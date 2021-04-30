import { CLEAR_INFO_DISPLAY, DISPLAY_INFO } from '../types';

const initialState = {
	type: '',
	msg: '',
	status: false,
	errors: {}
};
export default function (state = initialState, action) {
	switch (action.type) {
	case DISPLAY_INFO:
		return {
			...state,
			type: 'info',
			msg: 'Your Account has not been activated. Please contact the chooselife (admin) to activate your account by email or phone. 📣',
			status: action.payload,
		};
	case CLEAR_INFO_DISPLAY:
		return initialState;
	default:
		return state;
	}
}