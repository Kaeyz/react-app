import { ADD_APPOINTMENTS, REMOVE_APPOINTMENTS, REMOVE_APPOINTMENT, ADD_APPOINTMENT, APPOINTMENT_IS_LOADING, APPOINTMENT_NOT_LOADING,
} from '../types';

const initialState = {
	appointments: [],
	isLoading: false,
	appointment: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_APPOINTMENTS:
		return {
			...state,
			appointments: action.payload
		};
	case REMOVE_APPOINTMENTS:
		return {
			...state,
			appointments: initialState.appointments
		};
	case ADD_APPOINTMENT:
		return {
			...state,
			appointment: action.payload
		};
	case REMOVE_APPOINTMENT:
		return {
			...state,
			appointment: initialState.appointment
		};
	case APPOINTMENT_IS_LOADING:
		return {
			...state,
			isLoading: true
		};
	case 	APPOINTMENT_NOT_LOADING:
		return {
			...state,
			isLoading: false
		};
	default:
		return state;
	}
}
