import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { saveQuestions } from '../../../../store/actions/hraActions';
import Button from '../../../common/Button';
import HraInput from '../../../hra_input';


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
	  .button	{
			@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
				width:100% !important;
  		}
		}
	}
`;

function SmokingForm({ questions, isLoading, inputs, history, saveQuestions }) {
	const nextLink = '/assessment/health/travel';
	const onSaveClick = (event) => {
		event.preventDefault();
		// console.clear();
		// console.log(inputs);
		// console.log('object');
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
						number = {index + 1}
						label={question.label}
						prompt={question.prompt}
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

SmokingForm.propTypes = {
	questions: PropTypes.array.isRequired,
	inputs: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired,
	saveQuestions: PropTypes.func.isRequired,
};


const mapStateToProps = state => {
	const { isLoading, inputs } = state.hra;
	return { isLoading, inputs };
};

export default connect(mapStateToProps, {saveQuestions})(withRouter(SmokingForm));
