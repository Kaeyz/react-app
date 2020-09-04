/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
width: 100%;
.greenBtn {
	border: 1px solid ${props => props.theme.color.brand_02};
    color: ${props => props.theme.color.brand_02};
	background-color:  ${props => props.theme.color.ui_text_01};
;
}
.greenBtn:hover {
    color: ${props => props.theme.color.text_03};
	background-color: ${props => props.theme.color.brand_02};
	transition: 0.4s;
}
.whiteBtn {
	border: 1px solid ${props => props.theme.color.brand_02};
	color: ${props => props.theme.color.brand_02};
	background-color: ${props => props.theme.color.text_03};
}
.blackText{
	color: ${props => props.theme.color.text_05};
}
.whiteBtn:hover {
	color: ${props => props.theme.color.text_03};
	background-color: ${props => props.theme.color.brand_02};
	transition: 0.4s;
}
.darkGreenBtn {
	border: 1px solid ${props => props.theme.color.brand_02};
	color: ${props => props.theme.color.ui_01};
	background-color: ${props => props.theme.color.brand_02};
}
.darkGreenBtn:hover {
	color: ${props => props.theme.color.brand_02};
	background-color: rgba(203, 243, 240, 0.1);
	transition: 0.4s;
}

.deepYellowBtn {
	background: ${props => props.theme.color.ui_08};
	box-shadow: 0px 4px 4px rgba(252, 184, 19, 0.25);
	color: ${props => props.theme.color.text_03};
	border: 1px solid ${props => props.theme.color.ui_11};
}
.deepYellowBtn:hover {
	background-color: ${props => props.theme.color.text_03};
	color: ${props => props.theme.color.text_08};
	transition: 0.4s;
}
.yellowBtn {
	background: ${props => props.theme.color.brand_03};
	box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);	
	color: white;
	border: 1px solid ${props => props.theme.color.text_08};
}
.yellowBtn:hover {
	background-color: ${props => props.theme.color.text_03};
	color: ${props => props.theme.color.text_08};
	transition: 0.4s;
}
.whiteOrange {
	background: ${props => props.theme.color.ui_01};
	box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);	
	border: 1px solid ${props => props.theme.color.ui_08};
	color:${props => props.theme.color.ui_08};
}
.whiteOrange:hover {
	background-color: ${props => props.theme.color.ui_08};
	color: ${props => props.theme.color.ui_01};
		transition: 0.4s;
}
.purpleBtn {
	background: ${props => props.theme.color.ui_10};
	box-shadow: 0px 4px 4px rgba(206, 238, 143, 0.25);
	color: ${props => props.theme.color.text_03};
	border: 1px solid ${props => props.theme.color.brand_04};
}
.purpleBtn:hover {
	background-color: ${props => props.theme.color.text_03};
	color: ${props => props.theme.color.ui_10};
		transition: 0.4s;
}
.pinkBtn {
	background: rgba(255, 61, 61, 0.1);
		box-shadow: 0px 4px 4px rgba(252, 184, 19, 0.25);
	color: ${props => props.theme.color.brand_07};
	border: 1px solid ${props => props.theme.color.brand_07};
}
.pinkBtn:hover {
	background-color: ${props => props.theme.color.brand_07};
	color: ${props => props.theme.color.ui_01};
	transition: 0.4s;
}
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		padding-right: 0.5rem;
	}
}
`;


function Button({style, theme, children, text, ...rest}) {
	const themeClassName = theme ? `${theme}Btn`: '';
	return (
		<Wrapper>

			<button
				type="button" className={`${themeClassName} ${theme} button`}
				style={{ borderRadius: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold', width: '13.3rem', fontFamily: 'Sofia', outline: 'none', cursor: 'pointer', padding: '1.1rem 0.4rem', ...style }}
				{...rest }
			>
				<span>{text}</span>
				{children}
			</button>
		</Wrapper>

	);
}

Button.propTypes = {
	style: PropTypes.object,
	theme: PropTypes.oneOf([
		'pink',
		'purple',
		'yellow',
		'green',
		'white',
		'deepYellow',
		'darkGreen'])
};

export default Button;
