import React from 'react';
import styled from 'styled-components';
import HraInput from '../../../hra_input';
import PropTypes from 'prop-types';
import Button from '../../../common/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	.submit {
		margin-top: 1rem;
		display: grid;
		grid-template-columns: max-content max-content;
		grid-gap: 2rem;
		justify-content: end;
	}
`;

function FoodForm({ questions }) {
	return (
		<Wrapper>
			{questions.map((question, index) => (
				<HraInput
					type={question.input[0].type}
					key={question.id}
					label={`${index + 1}. ${question.label}`}
					prompt={`${index + 1}. ${question.prompt}`}
					values={question.input[0].values}
					limit={{ min: question.input[0].min, max: question.input[0].max }}
					unit={question.input[0].units}
				/>
			))}
			<div className="submit">
				<Button theme="greenBtn">Save</Button>
				<Link to="/assessments">
					<Button theme="darkGreenBtn">Continue</Button>
				</Link>
			</div>
		</Wrapper>
	);
}

FoodForm.propTypes = {
	questions: PropTypes.array.isRequired
};

export default FoodForm;
