import { SET_USER, SET_AUTH } from '../types';

const initialState = {
	isAuthenticated: false,
	user: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
	case SET_USER:
		return {
			...state,
			user: action.payload
		};
	case SET_AUTH:
		return {
			...state,
			isAuthenticated: action.payload
		};

	default:
		return state;
	}
}