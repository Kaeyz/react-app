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
	margin-top:0;
    padding: 4rem 4rem 2rem 4rem;
    h5{
        font-size: 20px;
line-height: 25px;
letter-spacing: 0.2px;
color: ${(props) => props.theme.color.ui_05};
margin-bottom: 3rem;
    }
    h4{
        font-size: 16px;
line-height: 30px;
letter-spacing: 0.2px;
color: ${(props) => props.theme.color.ui_06};
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
function ReportPaper({cardHeading,cardSubheading,strong,cardBody,cardBody2,cardBody3,cardBody4,cardBody5,cardSubheading2,color}) {
	return (
		<Wrapper>
			<Grid container>
				<Grid item xs={12}>
					<Paper className={`paper ${color} `}>
						<h5>{cardHeading}</h5>
						<h4>{cardSubheading}</h4>
						<p>{cardBody}</p>
						<p>{cardBody2} <span className='strong'>{strong}</span> </p>
						<h4>{cardSubheading2}</h4>

						<p>{cardBody3}</p>
						{/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
						<p>{cardBody4}</p>
						<p>{cardBody5}</p>
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
	strong: PropTypes.any,
	cardBody: PropTypes.any,
	cardBody2: PropTypes.any,
	cardBody3: PropTypes.any,
	cardBody4: PropTypes.any,
	cardBody5: PropTypes.any,
	color: PropTypes.any,
};


export default ReportPaper;

