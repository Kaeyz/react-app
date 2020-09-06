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
#text-area{
    width: 100%;
    border: 1px solid ${props => props.theme.color.ui_text_06};
border-radius: 8px;
padding: 1.5rem;
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
`;

const TextArea = ({ label, placeholder }) => {

	

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<textarea name="text-area" id="text-area" cols="30" rows="10" placeholder={placeholder}>

            </textarea>
			
		</Wrapper>
	);
};

TextArea.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	};

export { TextArea };