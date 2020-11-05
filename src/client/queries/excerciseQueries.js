/*eslint-disable */

const exerciseQueries = {};


const getAllExercise = () => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
	return new Promise((resolve, reject) => {
		fetch('https://wger.de/api/v2/exercise/?format=json&limit=20&offset=40&language=2&status=2', requestOptions)
			.then(response => response.text())
			.then(result => resolve(result))
			.catch(error => reject(error));
	});
};


