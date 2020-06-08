import React from 'react'


function Button({className = '', style, theme, ...rest}) {
    const themeClassName = theme ? `${theme}Btn`: ''
    return (
        <button
         type="button" className={`primaryBtn ${themeClassName} ${theme}`}     
         style={{borderRadius: "5px", fontSize:"12px",fontWeight:"bold", width:"133px", cursor:"pointer",padding: "11px 4px",  ...style}}
         {...rest}
         />
       
      
    )
}

export default Button
