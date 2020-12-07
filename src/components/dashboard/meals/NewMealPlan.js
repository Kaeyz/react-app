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
						Any information is confidential to you and Choose Life. Choose
						Life does not share this information with your employer. This
						information is strictly to give you an assessment of where your
						health is, and we use this information in recommending active
						lifestyle choices.
					</p>

					<p>
						Our aim is to help you live your best lives, taking into
						consideration, your wellbeing and taking the right steps to help
						you Choose Life, one day at a time.
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
