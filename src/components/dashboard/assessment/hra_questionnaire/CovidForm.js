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

function CovidForm({ questions }) {
	return (
		<Wrapper>
			{questions.map((question, index) => (
				<HraInput
					type={question.input[0].type}
					key={question.id}
					label={`${index + 1}. ${question.label}`}
					prompt={`${index + 1}. ${question.prompt}`}
					values={question.input[0].values}
					inputs={question.input}
				/>
			))}
			<div className="submit">
				<Button theme="greenBtn">Save</Button>
				<Link to="/assessment/health/blood_pressure">
					<Button theme="darkGreenBtn">Continue</Button>
				</Link>
			</div>
		</Wrapper>
	);
}

CovidForm.propTypes = {
	questions: PropTypes.array.isRequired
};

export default CovidForm;
