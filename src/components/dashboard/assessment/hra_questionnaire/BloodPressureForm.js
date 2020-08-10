import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HraInput from '../../../hra_input';
import Button from '../../../common/Button';
import { withRouter } from 'react-router-dom';
import { saveQuestions } from '../../../../store/actions/hraActions';

const Wrapper = styled.div`
margin-top: -1rem;
> div {
  margin-top: -4rem;
}
	.submit {
		margin-top: 1rem;
		display: grid;
		grid-template-columns: max-content max-content;
		grid-gap: 2rem;
		justify-content: end;
		@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
			grid-template-columns: 1fr;	
			}
	  .button{
		@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
		width:100% !important;
  }
	};
`;
function BloodPressureForm({questions, isLoading, inputs, history, saveQuestions}) {

	const nextLink = '/assessment/health/smoking';
	const onSaveClick = (event) => {
		event.preventDefault();
		inputs.stage = 'UPDATE_RESPONSE';
		saveQuestions(inputs, nextLink, history);
	};

	const displayQuestions = () => {
		return (
			<div>
				{questions.map((question, index) => (
					<HraInput
						key={question.id}
						id={question.id}
						label={`${index + 1}. ${question.label}`}
						prompt={`${index + 1}. ${question.prompt}`}
						inputs={question.input}
					/>
				))}
				<div className="submit">
					<Button theme="greenBtn">Save</Button>
					<Button theme="darkGreenBtn" onClick={onSaveClick}>Continue</Button>
				</div>

			</div>
		);
	};

	return (
		<Wrapper>
			{
				isLoading ? 'Loading ...' : displayQuestions()
			}
		</Wrapper>
	);
}

BloodPressureForm.propTypes = {
	questions: PropTypes.array.isRequired,
	inputs: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	saveQuestions: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
	const { isLoading, inputs } = state.hra;
	return { isLoading, inputs };
};

export default connect(mapStateToProps, {saveQuestions})(withRouter(BloodPressureForm));
