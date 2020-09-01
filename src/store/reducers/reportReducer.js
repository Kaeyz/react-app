import {ADD_REPORT, ADD_REPORTS, CLEAR_REPORT, REPORT_IS_LOADING, REPORT_NOT_LOADING} from '../types';

const initialState = {
	reports: [],
	isLoading: false,
	report: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_REPORTS:
		return {
			...state,
			reports: action.payload
		};
	case ADD_REPORT:
		return {
			...state,
			report: action.payload
		};
	case CLEAR_REPORT:
		return {
			...state,
			report: initialState.report
		};
	case REPORT_IS_LOADING:
		return {
			...state,
			isLoading: true
		};
	case 	REPORT_NOT_LOADING:
		return {
			...state,
			isLoading: false
		};
	default:
		return state;
	}
}
