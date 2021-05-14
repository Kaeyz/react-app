import { SET_AUTH, SET_USER } from '../types';

const initialState = {
	isAuthenticated: false,
	user: null
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