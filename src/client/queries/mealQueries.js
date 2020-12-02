import { client } from '../client';

const mealQueries = {};

mealQueries.getMealOptions = () => {
	const query = `
	query fetchMealPlanOptions {
		fetchMealOptions {
				food
		}
	}
	`;

	return new Promise((resolve, reject) => {
		client(query)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

mealQueries.getMealPlan = () => {
	const query = `
	query FetchMealPlan {
		fetchMealPlan {
			_id
			mealPlanData {
				day1 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day2 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day3 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day4 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day5 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day6 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day7 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day8 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day9 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day10 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day11 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day12 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day13 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day14 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day15 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day16 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day17 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day18 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day19 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day20 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day21 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day22 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day23 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day24 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day25 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day26 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day27 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
				day28 {
					Breakfast
					Lunch
					Dinner
					Snacks
				}
			}
		}
	}

	`;

	return new Promise((resolve, reject) => {
		client(query)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};


mealQueries.deleteMealPlan = () => {
	const query = `
	mutation RESET_MEAL_PLAN {
		ResetMealPlan {
			message
		}
	}
	`;

	return new Promise((resolve, reject) => {
		client(query)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};


mealQueries.createMealPlan = (userChoice) => {
	const query = `
	mutation generateMealPlan($userChoice: [String]) {
		generateMealPlan(userChoice: $userChoice) {
			day1 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day2 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day3 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day4 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day5 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day6 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day7 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day8 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day9 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day10 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day11 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day12 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day13 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day14 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day15 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day16 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day17 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day18 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day19 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day20 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day21 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day22 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day23 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day24 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day25 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day26 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day27 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
			day28 {
				Breakfast
				Lunch
				Dinner
				Snacks
			}
		}
	}
	`;

	const variables = { userChoice };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};


export default Object.freeze(mealQueries);
