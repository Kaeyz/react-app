import {ADD_COMPANIES, CLEAR_COMPANIES, ADD_COMPANY, REMOVE_COMPANY, COMPANY_IS_LOADING, COMPANY_NOT_LOADING } from '../types';

const initialState = {
	companies: [],
	isLoading: false,
	company: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_COMPANIES:
		return {
			...state,
			companies: action.payload
		};
	case CLEAR_COMPANIES:
		return {
			...state,
			companies: initialState.companies
		};
	case ADD_COMPANY:
		return {
			...state,
			company: action.payload
		};
	case REMOVE_COMPANY:
		return {
			...state,
			company: initialState.company
		};
	case COMPANY_IS_LOADING:
		return {
			...state,
			isLoading: true
		};
	case 	COMPANY_NOT_LOADING:
		return {
			...state,
			isLoading: false
		};
	default:
		return state;
	}
}
