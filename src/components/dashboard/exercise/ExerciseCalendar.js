import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Calendar from './Calendar';

const Wrapper = styled(Paper)`
border-radius: 0px;
box-shadow: none;
margin-bottom: 5rem;
@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
    background: rgba(158,205,67,0);
    margin-bottom: 2rem;
}
.heading{
    background: rgba(158, 205, 67, 0.1);
border: 1px solid ${(props) => props.theme.color.text_11};
padding: 4rem;
@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
    background: rgba(158,205,67,0);
    border: none;
    padding: 0rem;
}
.text1{
    font-weight: normal;
font-size: 1.6rem;
line-height: 1.5rem;
letter-spacing: 0.2px;
color: ${(props) => props.theme.color.ui_05};
@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
    font-weight: bold;
}
}
}
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 4rem;
    grid-gap: 4rem;
    @media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
        grid-template-columns: 1fr;
        grid-row-gap: 2rem;
        padding: 0rem;
        }
    .details{
        p{
            font-weight: 300;
font-size: 1.6rem;
line-height: 2.5rem;
letter-spacing: 0.2px;
color: ${(props) => props.theme.color.ui_05};
padding-bottom: 4rem;
@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
    padding-bottom: 1rem;
}
.br{
    @media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
        display: none;
    }
}
span{
    font-weight: bold;

}
        }
    }
}
`;

function ExerciseCalendar() {
	return (
		<Wrapper>
			<div className="heading">
				<h1 className='text1'>Workout Schedule</h1>
			</div>
			<div className="grid">
				<Calendar />
				<div className="details">
					<p>You can set the date and duration for the workout programme</p>
					<p>You’ve selected:
						<br className='br'/>
						<br/>
						<span>September 21-November 6, 2020
						</span>
					</p>
				</div>
			</div>
		</Wrapper>
	);
}

// ExerciseCalendar.propTypes = {

// }

export default ExerciseCalendar;

