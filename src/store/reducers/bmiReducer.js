import {  ADD_BMI, BMI_IS_LOADING, BMI_NOT_LOADING,
} from '../types';

const initialState = {
	isLoading: false,
	BMI: {},
};

export default function (state = initialState, action) {
	switch (action.type) {

	case ADD_BMI:
		return {
			...state,
			BMI: action.payload
		};

	case BMI_IS_LOADING:
		return {
			...state,
			isLoading: true
		};
	case BMI_NOT_LOADING:
		return {
			...state,
			isLoading: false
		};
	default:
		return state;
	}
}
