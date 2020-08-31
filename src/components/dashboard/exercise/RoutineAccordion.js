import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import  ExerciseCard from './ExerciseCard';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import exercise1 from '../../../assets/exercise1.svg';

const Wrapper = styled.div`
.MuiAccordion-root{
    background: #FCFCFC;
border: 1px solid ${(props) => props.theme.color.brand_06};
border-radius: 0px;
margin: 3rem 0;
box-shadow: none;
}
.week{
    font-weight: normal;
font-size: 2.0rem;
line-height: 1.9rem;
letter-spacing: 0.2px;
color: ${(props) => props.theme.color.text_05};
font-family:Matteo;
}
.bold{
    font-weight: bold;
    padding: 4rem 0 1.5rem 0;

}
.MuiAccordionSummary-content {
    margin: 3rem auto;
}
.MuiAccordionSummary-root {
    padding: 0px 4rem;
}
.row{
    padding-bottom: 5rem;
    .day{
        font-weight: normal;
font-size: 1.6rem;
line-height: 1.5rem;
letter-spacing: 0.2px;
color: ${(props) => props.theme.color.brand_02};
padding-bottom: 2rem;
    }
}
.grid-card{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
}
.MuiAccordionDetails-root{
    border-radius: 0px;
    padding: 0 4rem 4rem;
     display: block;
     border: 1px solid ${(props) => props.theme.color.brand_02};
     max-height: 750px;
     max-width: 100%;
     overflow: scroll;
     @media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
		padding-left: 1rem;
	}
&::-webkit-scrollbar {
width: .3em;
height: .1em;
}
&::-webkit-scrollbar-thumb {
background-color: ${(props) => props.theme.color.ui_12};
border-radius: 0.5rem;
 }
}
.MuiAccordionSummary-content.Mui-expanded{
p{
    display: none;
}
}   
  .MuiAccordionSummary-root.Mui-expanded {
    position: absolute;
    height: 58px;
    top: 0px;
    width: 100%;
    min-height: auto;
  }
  .MuiAccordionSummary-expandIcon.Mui-expanded {
    position: absolute;
    top: 28px;
    right: 40px;
  }
  .MuiAccordion-root.Mui-expanded:first-child{
    border: 1px solid ${(props) => props.theme.color.ui_09};

  }
`;

function RoutineAccordion({week}) {
	return (
		<Wrapper>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className="week" >{week}</Typography>
				</AccordionSummary>
				<AccordionDetails>
               					<div className="row">
						<p className="week bold" >{week}</p>
						<p className="day">Day 1</p>
						<div className="grid-card">
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>

						</div>
					</div>

					<div className="row">
						<p className="day">Day 2</p>
						<div className="grid-card">
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>

						</div>
					</div>
					<div className="row">
						<p className="day">Day 3 </p>
						<div className="grid-card">
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>

						</div>
					</div>
					<div className="row">
						<p className="day">Day 4</p>
						<div className="grid-card">
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>

						</div>
					</div>
				</AccordionDetails>
			</Accordion>
      		</Wrapper>
	);
}

RoutineAccordion.propTypes = {
	week: PropTypes.string.isRequired,
};

export default RoutineAccordion;

