import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
	margin-top: 1.5rem;
	width: 100%;
	.input_label {
		margin-bottom: 1rem;
		margin-top: 0;
		font-family:Sofia;
		letter-spacing: 0.1px;
		font-weight: 600;
font-size: 1.4rem;
line-height: 1.4rem;
color: ${props => props.theme.color.ui_text_05};
	}
  .input_div {
	border: 1px solid ${props => props.theme.color.ui_text_06};
	    height: 4.8rem;
    // display: grid;
    grid-template-columns: 1fr max-content;
    border-radius: 2px;
    &:hover {
		border: 1px solid ${props => props.theme.color.ui_text_05};
		transition: .3s;
    }
    &:focus-within{
		outline: none;
		border-color: ${props => props.theme.color.brand_02};
		box-shadow: 0 0 3px ${props => props.theme.color.brand_02};
    }
  }
	.input {
		margin: 0;
    outline: none;
    border: none;
	height: 100%;
	// min-width: 100%;
	max-width: 100%;
	padding-left: 1rem;
	&::placeholder{
		font-family: Sofia;
font-size: 1.4rem;
line-height: 2.0rem;
letter-spacing: 0.2px;
color: ${props => props.theme.color.text_06};
	}
    :focus :hover {
      outline: none;
    }
	}
	.adornment {
		width: max-content;
    padding-right: 1rem;
	}
	.error {
		color: red;
	}
`;

const TextInput = ({ label, onChange, value, placeholder, inputAdornment, error,  type }) => {

	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<div className="input_div">
				<input
					placeholder={placeholder}
					className="input"
					value={value}
					onChange={handleChange}
					type={type ? type : 'text'}
				/>
				{/* <p className="adornment">{inputAdornment}</p> */}
			</div>
			<p className="error">{error && error}</p>
		</Wrapper>
	);
};

TextInput.propTypes = {
	label: PropTypes.string,
	error: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	inputAdornment: PropTypes.any,
	type: PropTypes.string
};

export { TextInput };