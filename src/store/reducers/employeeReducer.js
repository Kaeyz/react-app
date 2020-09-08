import {ADD_EMPLOYEES, CLEAR_EMPLOYEES, ADD_EMPLOYEE, REMOVE_EMPLOYEE, EMPLOYEE_IS_LOADING, EMPLOYEE_NOT_LOADING } from '../types';

const initialState = {
	employees: [],
	isLoading: false,
	employee: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_EMPLOYEES:
		return {
			...state,
			employees: action.payload
		};
	case CLEAR_EMPLOYEES:
		return {
			...state,
			employees: initialState.employees
		};
	case ADD_EMPLOYEE:
		return {
			...state,
			employee: action.payload
		};
	case REMOVE_EMPLOYEE:
		return {
			...state,
			employee: initialState.employee
		};
	case EMPLOYEE_IS_LOADING:
		return {
			...state,
			isLoading: true
		};
	case 	EMPLOYEE_NOT_LOADING:
		return {
			...state,
			isLoading: false
		};
	default:
		return state;
	}
}
