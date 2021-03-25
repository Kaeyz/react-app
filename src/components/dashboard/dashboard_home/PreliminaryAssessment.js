import Grid from '@material-ui/core/Grid';
import React from 'react';
import styled from 'styled-components';
import bodyMass from '../../../assets/bodyMass.svg';
import calorieIntake from '../../../assets/calorieIntake.svg';
import PreliminaryCard from '../common/PreliminaryCard';

const Wrapper = styled.div`
  margin-bottom: 5.9rem;
  .heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.8rem;
    padding: 0 2px;
    h1 {
      line-height: 24px;
      font-weight: 600;
      color: ${(props) => props.theme.color.text_01};
    }
    .null {
      border-bottom: 1px solid #d6d8d3;
      width: 321px;
      margin-bottom: 5px;
    }
  }
`;

export default function PreliminaryAssessment() {
	return (
		<Wrapper>
			<div className="heading">
				<h1>Getting started</h1>
				<div className="null"></div>
			</div>
			<div>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<PreliminaryCard
							cardValue={'29.5'}
							cardInfo={'Body Mass Index'}
							Image={bodyMass}
							btnTheme="greenBtn"
							backgroundColor="blue"
							btnValue={'View'}
						/>
					</Grid>
					<Grid item xs={6}>
						<PreliminaryCard
							cardValue={'1,300'}
							cardInfo={'Recommended Calorie Intake'}
							Image={calorieIntake}
							btnTheme="purple"
							backgroundColor="green"
							btnValue={'View'}

						/>
					</Grid>
				</Grid>
			</div>
		</Wrapper>
	);
}
