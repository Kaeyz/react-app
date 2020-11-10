import { httpFetch, client } from '../client';

const exerciseQueries = {};


const getExercises = () => {
	const query = `
	query FETCH_EXERCISE {
		fetchAllExercise{
			id
			image
			exercise {
				name
				category
				uuid
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


exerciseQueries.getExerciseById = (id) => {
	const query = `
	query FETCH_EXERCISE_BY_ID ($id: Int) {
		fetchOneExercise(id: $id) {
			id
			image
			exercise {
				name
				category
				uuid
			}
		}
	}
	`;

	const variables = { id };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => {
				const exercise = res.data.fetchOneExercise;
				console.log({ exercise });
				return resolve({
					image: exercise.image,
					name: exercise.exercise.name,
					uuid: exercise.exercise.uuid,
				});
			})
			.catch(err => reject(err));
	});
};


const sortData = (categories, exercises) => {
	const response = {};
	exercises.map(item => {
		return categories.map(cat => {
			if (cat.id === item.exercise.category) {
				// eslint-disable-next-line no-prototype-builtins
				if (response.hasOwnProperty(cat.name)) {
					return response[cat.name].push({
						name: item.exercise.name,
						uuid: item.exercise.uuid,
						image: item.image,
						id: item.id
					});
				} else {
					return response[cat.name] = [{
						name: item.exercise.name,
						uuid: item.exercise.uuid,
						image: item.image,
						id: item.id
					}];
				}
			}
			return null;
		});
	});
	return response;
};

exerciseQueries.getAllExercises = () => {
	const categoriesPromise = httpFetch.get('https://wger.de/api/v2/exercisecategory/?format=json');

	const exercisesPromise = getExercises();
	// eslint-disable-next-line no-async-promise-executor
	return new Promise(async (resolve, reject) => {

		const [categories, exercises] = await Promise.all([categoriesPromise, exercisesPromise])
			.catch(() => {
				return reject('No exercise Found');
			});

		return resolve(sortData(categories.results, exercises.data.fetchAllExercise));
	});
};

export default Object.freeze(exerciseQueries);

