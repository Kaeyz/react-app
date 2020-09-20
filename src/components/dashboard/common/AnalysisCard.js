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
		padding: 3rem;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
height: 235px;
margin-bottom: 2rem;
@media screen and ( max-width: ${(props) => props.theme.breakpoint.md}) {
	width: 300px;
	}
h5{
    font-weight: bold;
font-size: 16px;
line-height: 16px;
letter-spacing: 0.2px;
color: ${(props) => props.theme.color.ui_05};
}
p{
    font-weight: 300;
font-size: 13px;
line-height: 25px;
letter-spacing: 0.2px;
color: #737373;
margin: 1rem 0 2.5rem 0;
font-family: Brown;
}
h1{
    font-weight: bold;
font-size: 40px;
line-height: 39px;
letter-spacing: 0.2px;
margin-top: 2.5rem;
color: ${(props) => props.theme.color.ui_05};
}
	}
	
`;

const Analysis = ({ fontSize, cardTheme,cardHeading,cardInfo,cardValue }) => {

	return (
		<Wrapper>
			<Paper className={`paper ${cardTheme}`} >

				<h5>{cardHeading}</h5>
				<p className={`${fontSize}`}>{cardInfo}</p>
				<h2>{cardValue}</h2>
			</Paper>

		</Wrapper>
	);
};

Analysis.propTypes = {
	cardValue: PropTypes.any,
	cardInfo: PropTypes.any,
	fontSize: PropTypes.any,
	cardTheme: PropTypes.string.isRequired,
	cardHeading: PropTypes.string.isRequired
};

export default Analysis;
