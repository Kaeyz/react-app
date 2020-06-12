/* eslint-disable react/prop-types */
import React from 'react';


function Button({style, theme, ...rest}) {
	const themeClassName = theme ? `${theme}Btn`: '';
	return (
		<button
			type="button" className={`primaryBtn ${themeClassName} ${theme}`}
			style={{borderRadius: '0.5rem', fontSize:'1.2rem',fontWeight:'bold', width:'13.3rem', fontFamily:'cursive', outline: 'none', cursor:'pointer',padding: '1.1rem 0.4rem',  ...style}}
			{...rest}
		/>


	);
}

export default Button;
