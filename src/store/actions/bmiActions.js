import bmiQueries from '../../client/queries/bmiQueries';
import { ADD_BMI, BMI_IS_LOADING,BMI_NOT_LOADING,
} from '../types';

const bmiIsLoading = () => {
	return { type: BMI_IS_LOADING };
};

const bmiNotLoading = () => {
	return { type: BMI_NOT_LOADING };
};
const setBmi= (bmi) => {
	return {
		type: ADD_BMI,
		payload: bmi
	};
};

export const getBmi = () => dispatch => {
	dispatch(bmiIsLoading());
	bmiQueries.getBmi()
		.then(res => {
			if (res.errors) {
				dispatch(bmiNotLoading());
			}
			if (res.data.BMI !== null) {
				dispatch(setBmi(res.data.BMI));
				dispatch(bmiNotLoading());
			}
		})
		.catch(() => {
			dispatch(bmiNotLoading());
		});
};

