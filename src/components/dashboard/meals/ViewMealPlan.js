import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import MealLayout from '../../layouts/dashboardLayout/MealLayout';
import Table from '../common/Table';
import { tableConstants } from './tableConstant';
import left from '../../../assets/btn_ChevronLeft.svg';
import right from '../../../assets/btn_ChevronRight.svg';
import Button from '../../common/Button';
import { connect } from 'react-redux';
import {deleteMealPlan } from '../../../store/actions/mealActions';


const Wrapper = styled(Paper)`
.withNull{
    display: grid;
    align-items: center;
    grid-template-columns: max-content 1fr;
    padding-bottom: 4rem;
    #disclaimer{
    	vertical-align: bottom;
    	padding-right: 5px;
    }
    h1{
      padding-right: 2rem;
      font-weight: normal;
			font-size: 1.6rem;
			line-height: 1.5rem;
			letter-spacing: -0.2px;
			color:${props => props.theme.color.ui_06};
    }
    .null {
			border: 1px solid rgba(214, 216, 211, 0.5);
			margin: 10px 0px;
			width: 95%;
			height: 1px;
    }
}
.pagination-ctrl{
    align-items: center;
    justify-content: start;
    padding-bottom: 5rem;
    span{
      font-weight: bold;
			font-size: 1.6rem;
			line-height: 2.4rem;
			padding: 0 1.6rem;
			text-align: center;
			letter-spacing: 0.1px;
			color: ${props => props.theme.color.text_05};
    }
}
.pointer {
	cursor: pointer;
}
.footer {
	display: grid;
	grid-template-columns: max-content max-content;
	justify-content: space-between;
	width: 100%;
	grid-gap: 1rem;
}
`;

const days = {
	0: 'Sunday',
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday'
};


const ViewMealPlan = ({mealPlan, deleteMealPlan}) => {
	const [week, setWeek] = useState(1);


	const getWeekData = (mealData, week) => {
		const data = mealData;
		const max = week * 7;
		const min = max - 7;
		const response = [];
		data &&	Object.keys(data).map((key, index) => {
			if (index >= min && index <= max) {
				response.push({
					...data[key], Day: days[index % 7]
				});
			}
		});
		return response;
	};

	const nextWeek = () => {
		return week < 4 ? setWeek(week + 1) : setWeek(week);
	};

	const previousWeek = () => {
		return week > 1 ? setWeek(week - 1) : setWeek(week);
	};

	return (
		<Wrapper>
			<MealLayout nullText="Your Meal Plans">
				<Table cols={tableConstants()} data={getWeekData(mealPlan, week)} />
				<div className="footer">
					<div className="pagination-ctrl flex">
						<img src={left} alt="left" onClick={previousWeek} className="pointer" />
						<span>{`Week ${week}`}</span>
						<img src={right} alt="right" onClick={nextWeek} className="pointer" />
					</div>
					<Button text="Delete Meal Plan" theme="green" onClick={deleteMealPlan} />
				</div>
			</MealLayout>
		</Wrapper>
	);
};

ViewMealPlan.propTypes = {
	mealPlan: PropTypes.object.isRequired,
	deleteMealPlan: PropTypes.func.isRequired,
};

export default connect(null, {deleteMealPlan})(ViewMealPlan);
