import {  ADD_EXERCISE, ADD_EXERCISES, EXERCISE_IS_LOADING, EXERCISE_NOT_LOADING,
} from '../types';

const initialState = {
	isLoading: false,
	exercises: {},
	exercise: {}
};

export default function (state = initialState, action) {
	switch (action.type) {

	case ADD_EXERCISES:
		return {
			...state,
			exercises: action.payload
		};
	case ADD_EXERCISE:
		return {
			...state,
			exercise: action.payload,
			isLoading: false
		};
	case EXERCISE_IS_LOADING:
		return {
			...state,
			isLoading: true
		};
	case EXERCISE_NOT_LOADING:
		return {
			...state,
			isLoading: false
		};
	default:
		return state;
	}
}
