import { MEAL_IS_LOADING, MEAL_NOT_LOADING, ADD_MEAL_OPTIONS, ADD_MEAL_PLAN, CLEAR_MEAL_PLAN } from '../types';

const initialState = {
	isLoading: false,
	mealOptions: null,
	mealPlan: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_MEAL_PLAN:
		return {
			...state,
			mealPlan: action.payload,
		};
	case ADD_MEAL_OPTIONS:
		return {
			...state,
			mealOptions: action.payload,
		};
	case CLEAR_MEAL_PLAN:
		return { ...initialState };
	case MEAL_IS_LOADING:
		return {
			...state,
			isLoading: true,
		};
	case MEAL_NOT_LOADING:
		return {
			...state,
			isLoading: false,
		};
	default:
		return state;
	}
}
