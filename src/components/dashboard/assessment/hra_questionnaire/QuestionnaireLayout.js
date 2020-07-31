import React from 'react';
import PropTypes from 'prop-types';

function QuestionnaireLayout({children}) {
	return (
		<div>
			<p>Back</p>
			<p>Header</p>
			{children}
		</div>
	);
}

QuestionnaireLayout.propTypes = {
	children: PropTypes.any.isRequired
};

export default QuestionnaireLayout;

