import {
	client
} from '../client';

const bmiQueries = {};

bmiQueries.getBmi = () => {
	const query =`
	query BMI{
	            BMI {
                bmi
                rating
                ratingsMsg
              }    
	}
	`;


	return new Promise((resolve, reject) => {
		client(query)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

export default Object.freeze(bmiQueries);