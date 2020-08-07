import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';


// eslint-disable-next-line no-unused-vars


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
	.error {
		color: red;
	}
	.MuiSelect-select:focus{
		background-color:${props => props.theme.color.text_03};
		outline: none;
		border-color: ${props => props.theme.color.brand_02};
		box-shadow: 0 0 3px ${props => props.theme.color.brand_02};
  
	}
	
	.MuiOutlinedInput-root{
		border: 1px solid ${props => props.theme.color.ui_text_06};
		border-radius: 2px;
		&:hover {
			border: 1px solid ${props => props.theme.color.ui_text_05};
			transition: .3s;
		}
	}
	.MuiOutlinedInput-notchedOutline{
		border: none;
	}
	.MuiSelect-select.MuiSelect-select{
		font-family: Sofia;
font-size: 1.4rem;
line-height: 2.0rem;
letter-spacing: 0.2px;
color: ${props => props.theme.color.text_06};
	}
`;



const SelectInput = ({ label, onChange, value, options, error }) => {
	const handleChange = (event) => {

		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<Select
				className="input"
				variant="outlined"
				value={value}
				onChange={handleChange}
			>

				{options && options.map((option, index) => (
					<MenuItem key={index} value={option.value}>
						{option.text}
					</MenuItem>
				))}
			</Select>
			<p className="error">{error && error}</p>
		</Wrapper>
	);
};

SelectInput.propTypes = {
	label: PropTypes.string,
	error: PropTypes.string,
	options: PropTypes.array.isRequired,
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
};

export { SelectInput };
