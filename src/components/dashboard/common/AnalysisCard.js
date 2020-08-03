import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`

.blue{
    background: rgba(46, 196, 182, 0.03);
    border: 1px solid #2EC4B6;    
}
.pink{
    background: rgba(255, 186, 8, 0.03);
    border: 1px solid #FFBA08;  
}
.green{
    background: rgba(141, 184, 56, 0.03);
border: 1px solid #8DB838;
}
	.paper{
        border-radius: 10px;
		padding: 4rem 3rem;
		text-align: left;
		width: 332px;
		
height: 235px;
margin-bottom: 2rem;
h5{
    font-weight: bold;
font-size: 16px;
line-height: 16px;
letter-spacing: 0.2px;
color: #000B0A;
}
p{
    font-weight: 300;
font-size: 13px;
line-height: 25px;
letter-spacing: 0.2px;
color: #737373;
margin: 1rem 0 2.5rem 0;
}
h1{
    font-weight: bold;
font-size: 40px;
line-height: 39px;
letter-spacing: 0.2px;
margin-top: 2.5rem;
color: #000B0A;
}
	}
	
`;

const Analysis = ({ fontSize, cardTheme, ...props  }) => {

	return (
		<Wrapper>
      
 
			<Paper className={`paper ${cardTheme}`} >

				<h5>{props.cardHeading}</h5>
				<p className={`${fontSize}`}>{props.cardInfo}</p>
				<h2>{props.cardValue}</h2>
			</Paper>
		
		</Wrapper>
	);
};

Analysis.propTypes = {
	Image: PropTypes.any,
	cardValue: PropTypes.any,
	cardInfo: PropTypes.any,
	fontSize: PropTypes.any,
	where: PropTypes.string,
	btnTheme: PropTypes.any,
	btnValue: PropTypes.string,
	cardTheme: PropTypes.string.isRequired,
	cardHeading: PropTypes.string.isRequired
};

export default Analysis;
