import {
	client
} from '../client';

const appointmentQueries = {};

appointmentQueries.addNewAppointment = (input) => {
	const query = `
	mutation ADD_NEW_APPOINTMENT($input: AppointmentInput) {
		createAppointmentMutation(input: $input) {
				message
		}
	}
	`;

	const variables = {
		input
	};

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};


appointmentQueries.getAppointments = () => {
	const query = `
	query ME {
		me{
      appointments {
        _id
        title
        purpose
        description
        appointmentTime
        type
        professional
        createdAt
        updatedAt
      }
		}
	}
	`;
	return new Promise((resolve, reject) => {
		client(query)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

export default Object.freeze(appointmentQueries);