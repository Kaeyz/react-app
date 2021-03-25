import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewMealPlan from '../../components/dashboard/meals/NewMealPlan';
import ViewMealPlan from '../../components/dashboard/meals/ViewMealPlan';
import { getMealPlan } from '../../store/actions/mealActions';

const Wrapper = styled(Paper)`
	.withNull {
		display: grid;
		align-items: center;
		grid-template-columns: max-content 1fr;
		padding-bottom: 4rem;
		#disclaimer {
			vertical-align: bottom;
			padding-right: 5px;
		}
		h1 {
			padding-right: 2rem;
			font-weight: normal;
			line-height: 1.5rem;
			letter-spacing: -0.2px;
			color: ${(props) => props.theme.color.ui_06};
		}
		.null {
			border: 1px solid rgba(214, 216, 211, 0.5);
			margin: 10px 0px;
			width: 95%;
			height: 1px;
		}
	}
`;

const Meal = ({ mealPlan, isLoading, getMealPlan }) => {
	useEffect(() => {
		getMealPlan();
	}, [getMealPlan]);

	return (
		<Wrapper>
			{!isLoading && mealPlan ? (
				<ViewMealPlan mealPlan={mealPlan} />
			) : (
				<NewMealPlan /> || <div>loading...</div>
			)}
		</Wrapper>
	);
};

Meal.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	mealPlan: PropTypes.object.isRequired,
	getMealPlan: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const { mealPlan, isLoading } = state.meal;
	return { mealPlan, isLoading };
};

export default connect(mapStateToProps, { getMealPlan })(Meal);
