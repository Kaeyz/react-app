import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
	margin-top: 1.5rem;
	width: 100%;
	.input_label {
		margin-bottom: 1rem;
		margin-top: 0;
		font-size: 1.4rem;
		letter-spacing: 0.1px;
		font-weight: 600;
		line-height: 1.4rem;
		color: ${(props) => props.theme.color.ui_text_05};
	}
	#text-area {
		font-size: 1.4rem;
		width: 100%;
		border: 1px solid ${(props) => props.theme.color.ui_text_06};
		padding: 1.5rem;
		&:hover {
			border: 1px solid ${(props) => props.theme.color.ui_text_05};
			transition: 0.3s;
		}
		&:focus-within {
			outline: none;
			border-color: ${(props) => props.theme.color.brand_02};
			box-shadow: 0 0 3px ${(props) => props.theme.color.brand_02};
		}
	}
	.error {
		color: #b40001;
		padding-top: 2px;
	}
`;

const TextArea = ({ label, placeholder, error, onChange, value }) => {

	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<textarea
				id="text-area"
				cols="30" rows="10"
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
			<p className="error">{error && error}</p>
		</Wrapper>
	);
};

TextArea.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	error: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export { TextArea };
