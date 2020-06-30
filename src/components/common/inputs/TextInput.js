import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
	margin-top: 1.5rem;
	width: 100%;
	.input_label {
		margin-bottom: 0.3rem;
		font-size: 1.3rem;
		margin-top: 0;
	}
  .input_div {
    border: 2px solid ${props => props.theme.color.ui_text_01};
    height: 4.8rem;
    display: grid;
    grid-template-columns: 1fr max-content;
    border-radius: 5px;
    :hover {
      border: 2px solid ${props => props.theme.color.active_primary};
    }
  }
	.input {
		margin: 0;
    outline: none;
    border: none;
    height: 100%;
    padding-left: 1rem;
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
				<p className="adornment">{inputAdornment}</p>
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