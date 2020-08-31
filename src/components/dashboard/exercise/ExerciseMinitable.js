import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';


const Wrapper = styled.div`
display: none;
@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
    display: block;
}
.main{
    border-radius: 4px;
padding: 1.6rem;
margin-bottom: 4rem;
box-shadow: none;
}
.content{
    border: 1px solid ${(props) => props.theme.color.ui_08};
border-radius: 4px;
padding: 0 1.5rem;
.flex{
    letter-spacing: -0.2px;
padding: 2.5rem 0;
justify-content: space-between;
    p{
        font-weight: 300;
font-size: 1.4rem;
line-height: 1.3rem;
color: ${(props) => props.theme.color.text_05};
    }
    h1{
        font-weight: normal;
font-size: 1.6rem;
line-height: 1.5rem;
color: ${(props) => props.theme.color.ui_06};
    }
}
}
.heading{
    font-weight: bold;
font-size: 1.6rem;
line-height: 1.6rem;
letter-spacing: 0.2px;
color: ${(props) => props.theme.color.ui_05};
padding: 2rem 0;
}
`;
function ExerciseMinitable() {
	return (
		<Wrapper>
			<p className='heading'>Programme Details</p>
			<Paper className="main">
				<div className="content">
					<div className='flex'><p>Total  Workouts</p> <h1>30</h1></div>
					<div className='flex'><p>Number of weeks</p> <h1>12 weeks</h1></div>
					<div className='flex'><p>Difficulty</p> <h1>Medium</h1></div>
					<div className='flex'><p>Average Duration</p> <h1>58 mins</h1></div>
					<div className='flex'><p>Equipment Required</p> <h1>+0 - 3.7yrs</h1></div>
				</div>
			</Paper>
		</Wrapper>
	);
}

ExerciseMinitable.propTypes = {

};

export default ExerciseMinitable;

