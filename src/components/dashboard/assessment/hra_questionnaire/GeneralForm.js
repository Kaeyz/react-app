import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HraInput from '../../../hra_input';
import PropTypes from 'prop-types';
import Button from '../../../common/Button';
import { saveQuestions } from '../../../../store/actions/hraActions';
import { device } from '../../../../Device';


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
		${device.mobileL`
		grid-template-columns: 1fr;
  `}
	}
`;

function GeneralForm({ questions, isLoading, inputs, history, saveQuestions}) {

	const stage = history.location.pathname === '/assessment/health/start' ? 'RESPONSE' : 'UPDATE_RESPONSE';
	const nextLink = '/assessment/health/covid';
	const onSaveClick = (event) => {
		event.preventDefault();
		inputs.stage = stage;
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
					<Button theme="green">Save</Button>
					<Button theme="darkGreen" onClick={onSaveClick}>Continue</Button>
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

GeneralForm.propTypes = {
	questions: PropTypes.array.isRequired,
	inputs: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired,
	saveQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	const { isLoading, inputs } = state.hra;
	return { isLoading: isLoading, inputs };
};

export default connect(mapStateToProps, {saveQuestions})(withRouter(GeneralForm));
