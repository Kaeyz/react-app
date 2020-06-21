import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { theme as myTheme } from '../../../Theme';
import InputBase from '@material-ui/core/InputBase';

// eslint-disable-next-line no-unused-vars
const Input = withStyles((theme) => ({
	input: {
		border: `2px solid ${myTheme.color.ui_text_01}`,
		fontSize: '1.5rem',
		padding: '1.3rem 4px 1.3rem 4px',
		'&:focus': {
			borderRadius: 4,
			borderColor: myTheme.color.active_primary,
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
}))(InputBase);

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
};

const SelectInput = ({ label, onChange, value, options }) => {
	const handleChange = (event) => {

		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<Select
				className="input"
				variant="outlined"
				input={<Input />}
				value={value}
				onChange={handleChange}
				inputProps={{ style: inputStyle }}
			>
				{options && options.map((option, index) => (
					<MenuItem key={index} value={option.value}>
						{option.text}
					</MenuItem>
				))}
			</Select>
		</Wrapper>
	);
};

SelectInput.propTypes = {
	label: PropTypes.string,
	options: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export { SelectInput };
