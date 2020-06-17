import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { theme } from '../../../Theme';


const EditedTextField = withStyles({
	root: {
		'& input:valid + fieldset': {
			borderColor: theme.color.ui_text_01,
			borderWidth: 2,
		},
		'& input:valid:hover + fieldset': {
			borderColor: theme.color.brand_02,
			borderWidth: 2,
		},
		'& input:valid:focus + fieldset': {
			borderColor: theme.color.active_primary,
			borderLeftWidth: 2,
			padding: '4px',
		},
	},
})(TextField);

const Wrapper = styled.div`
	margin-top: 1.5rem;
	width: 100%;
	.input_label {
		margin-bottom: 0.3rem;
		font-size: 1.3rem;
		margin-top: 0;
	}
	.input {
		margin: 0;
		min-width: 100%;
	}
`;

const inputStyle = {
	fontSize: '1.5rem',
	paddingTop: '1.3rem',
	paddingBottom: '1.3rem',
};

const TextInput = ({ label, onChange, value, placeholder }) => {

	const handleChange = (event) => {
		// 	inputProps={{ style: inputStyle}}
		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<EditedTextField
				placeholder={placeholder}
				variant="outlined"
				className="input"
				value={value}
				onChange={handleChange}
				inputProps={{ style: inputStyle }}
			/>
		</Wrapper>
	);
};

TextInput.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export { TextInput };