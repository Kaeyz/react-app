/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
width: 100%;
.greenBtn {
  border: 1px solid #2ec4b6;
  color: #2ec4b6;
  background-color: #CBF3F0;
}
.greenBtn:hover {
  color: #fff;
  background-color: #2ec4b6;
  transition: 0.4s;
}
.darkGreenBtn {
  border: 1px solid #2ec4b6;
  color: ${props => props.theme.color.ui_01};
  background-color: ${props => props.theme.color.brand_02};
}
.darkGreenBtn:hover {
  color: #fff;
  color: #2ec4b6;
  background-color: rgba(203, 243, 240, 0.1);
  transition: 0.4s;
}
.yellowBtn {
  background: #F47803;
  box-shadow: 0px 4px 4px rgba(252, 184, 19, 0.25);
  color: white;
  border: 1px solid #fcb813;
}
.yellowBtn:hover {
  background-color: #fff;
  color: #fcb813;
  transition: 0.4s;
}
.deepYellowBtn {
  background: ${props => props.theme.color.ui_text_03};
  box-shadow: 0px 4px 4px rgba(252, 184, 19, 0.25);
  color: white;
  border: 1px solid #fcb813;
}
.deepYellowBtn:hover {
  background-color: #fff;
  color: #fcb813;
  transition: 0.4s;
}
.purpleBtn {
  background: ${props => props.theme.color.ui_text_04};
  box-shadow: 0px 4px 4px rgba(252, 184, 19, 0.25);
  color: white;
  border: 1px solid #fcb813;
}
.purpleBtn:hover {
  background-color: #fff;
  color: #fcb813;
  transition: 0.4s;
}
.pinkBtn {
  background: ${props => props.theme.color.ui_text_02};
  box-shadow: 0px 4px 4px rgba(252, 184, 19, 0.25);
  color: white;
  border: 1px solid #fcb813;
}
.pinkBtn:hover {
  background-color: #fff;
  color: #fcb813;
  transition: 0.4s;
}
`;


function Button({style, theme, ...rest}) {
	const themeClassName = theme ? `${theme}Btn`: '';
	return (
		<Wrapper>

			<button
				type="button" className={`primaryBtn ${themeClassName} ${theme}`}
				style={{borderRadius: '0.5rem', fontSize:'1.2rem',fontWeight:'bold', width:'13.3rem', fontFamily:'Matteo', outline: 'none', cursor:'pointer',padding: '1.1rem 0.4rem',  ...style}}
				{...rest}
			/>
		</Wrapper>

	);
}

Button.propTypes = {
	style: PropTypes.object,
	theme: PropTypes.oneOf(['pink', 'purple', 'yellow', 'green', 'darkGreen', 'deepYellow', ])
};

export default Button;
