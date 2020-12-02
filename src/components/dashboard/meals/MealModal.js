import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Modal from '../../dashboard/common/Modal';
import Grid from '@material-ui/core/Grid';
import Button from '../../common/Button';
import { MultiSelectInput } from '../../common/inputs';
import { getMealOptions, generateMealPlan } from '../../../store/actions/mealActions';

const Wrapper = styled.div`
	.pd {
		padding: 4rem 0;
		button {
			width: 100% !important;
		}
	}
`;

const MealModal = ({isLoading, mealOptions, getMealOptions, generateMealPlan }) => {
	const [show, setShow] = useState(false);
	const [meals, setMeals] = useState([]);


	const toggleShow = () => {
		setShow(!show);
	};

	useEffect(() => {
		if (show) {
			getMealOptions();
		}
	}, [show, getMealOptions]);

	const getOptions = (mealOptions) => {
		return mealOptions.food.map(option => {
			return { label: option, value: option };
		});
	};


	return (
		<Wrapper>
			<Modal
				show={show}
				handleClose={toggleShow}
				heading={<span> Questions on Protein</span>}
				info="Plan your meals and ensure you eat healthy with a balanced diet."
			>
				<div className="select">
					<h1 className="bold">
						Select the options you’ll like to include in your meal plan?
					</h1>
					<div className="select-input">
						{show &&
							isLoading ? <div>Loading Options</div> :
							<MultiSelectInput
								values={meals}
								options={mealOptions ? getOptions(mealOptions) : []}
								onChange={setMeals}
							/>
						}
					</div>

					<Grid container className="select-input">
						<Grid item xs={12} className="pd">
							<Button
								theme="darkGreen"
								text="Complete"
								onClick={() => {
									toggleShow();
									generateMealPlan(meals);
								}}
							/>
						</Grid>
					</Grid>
				</div>
			</Modal>
			<Grid item xs={12} sm={4} className="btn">
				<Button
					onClick={toggleShow}
					theme="darkGreen"
					text="Customise your meal plan"
				/>
			</Grid>
		</Wrapper>
	);
};

MealModal.propTypes = {
	mealOptions: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	getMealOptions: PropTypes.func.isRequired,
	generateMealPlan: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	const { mealOptions, isLoading } = state.meal;
	return { mealOptions, isLoading };
};

export default connect(mapStateToProps, {generateMealPlan, getMealOptions})(MealModal);
