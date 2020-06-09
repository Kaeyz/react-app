/* eslint-disable react/prop-types */
import React from 'react';


function Button({style, theme, ...rest}) {
	const themeClassName = theme ? `${theme}Btn`: '';
	return (
		<button
			type="button" className={`primaryBtn ${themeClassName} ${theme}`}
			style={{borderRadius: '5px', fontSize:'12px',fontWeight:'bold', width:'133px', fontFamily:'cursive', cursor:'pointer',padding: '11px 4px',  ...style}}
			{...rest}
		/>


	);
}

export default Button;
