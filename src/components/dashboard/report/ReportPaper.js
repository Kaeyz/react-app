import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled.div`
.blue{
    background-color: rgba(46, 196, 182, 0.05);
border: 0.5px solid #2EC4B6;
}
.paper{
    margin: 6rem 0;
    padding: 4rem 4rem 2rem 4rem;
    h5{
        font-size: 20px;
line-height: 25px;
letter-spacing: 0.2px;
color: #000B0A;
margin-bottom: 3rem;
    }
    h4{
        font-size: 16px;
line-height: 30px;
letter-spacing: 0.2px;
color: #0A2523;
margin-bottom: 1.2rem;
    }
    p{
        margin-bottom: 2rem ;
    }
    .strong{
        color:red;
    }
}
`;
// function createMarkup() {
// 	return {__html: '<strong>bold</strong>'};
//   }
function ReportPaper({...props}) {
	return (
		<Wrapper>
			<Grid container>
				<Grid item xs={12}>
					<Paper className={`paper ${props.color} `}>
						<h5>{props.cardHeading}</h5>
						<h4>{props.cardSubheading}</h4>
						<p>{props.cardBody}</p>
						<p>{props.cardBody2} <span className='strong'>{props.strong}</span> </p>
						<h4>{props.cardSubheading2}</h4>

						<p>{props.cardBody3}</p>
						{/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
						<p>{props.cardBody4}</p>
						<p>{props.cardBody5}</p>
					</Paper>
				</Grid>
			</Grid>
		</Wrapper>
	);
}

ReportPaper.propTypes = {
	cardHeading: PropTypes.any,
	cardSubheading: PropTypes.any,
	cardSubheading2: PropTypes.any,
	cardBody: PropTypes.any,
	cardBody2: PropTypes.any,
	cardBody3: PropTypes.any,
	cardBody4: PropTypes.any,
	cardBody5: PropTypes.any,
	color: PropTypes.any,
};


export default ReportPaper;

