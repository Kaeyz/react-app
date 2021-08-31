import React from 'react';
//import PropTypes from 'prop-types';
import MealLayout from '../../layouts/dashboardLayout/MealLayout';
import MealModal from './MealModal';

const NewMealPlan = () => {
	return (
		<div>
			<MealLayout nullText="Welcome to Meal Planning">
				<div className="text">
					<p>
						Our aim is to enable you to live your best life by providing you
						with healthy food options and additional nutritional information to
						support your personal nutrition goals.
					</p>
				</div>
				<MealModal />
			</MealLayout>
		</div>
	);
};

NewMealPlan.propTypes = {

};

export default NewMealPlan;
