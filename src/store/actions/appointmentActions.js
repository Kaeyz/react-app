import appointmentQueries from '../../client/queries/appointmentQueries';
import { errorAlert, successAlert } from './alertActions';
import { ADD_APPOINTMENTS, APPOINTMENT_IS_LOADING, APPOINTMENT_NOT_LOADING,
} from '../types';


const addAppointments = (appointments) => {
	return {
		type: ADD_APPOINTMENTS,
		payload: appointments
	};
};

const appointmentIsLoading = () => {
	return { type: APPOINTMENT_IS_LOADING };
};

const appointmentNotLoading = () => {
	return { type: APPOINTMENT_NOT_LOADING };
};


export const addNewAppointment = (input) => dispatch => {
	dispatch(appointmentIsLoading());
	appointmentQueries.addNewAppointment(input)
		.then(res => {
			if (res.data) {
				const message = res.data.createAppointmentMutation.message;
				dispatch(successAlert(message));
				dispatch(getAppointments());
				dispatch(appointmentNotLoading());
			}
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(appointmentNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(appointmentNotLoading());
		});
};


export const getAppointments = () => dispatch => {
	dispatch(appointmentIsLoading());
	appointmentQueries.getAppointments()
		.then(res => {
			const {appointments} = res.data.me ;
			dispatch(addAppointments(appointments));
			dispatch(appointmentNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(appointmentNotLoading());
		});
};