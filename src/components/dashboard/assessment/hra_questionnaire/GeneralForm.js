import React from 'react';
import HraInput from '../../../hra_input';
//import PropTypes from 'prop-types'

function GeneralForm({ questions }) {
	console.log(questions);
	return (
		<div>
			{questions.map((question, index) => (
				<HraInput
					type={question.input[0].type}
					key={question.id}
					label={`${index + 1}. ${question.prompt}`}
					values = {question.input[0].values}
				/>
			))}
		</div>
	);
}

//GeneralForm.propTypes = {}

export default GeneralForm;

