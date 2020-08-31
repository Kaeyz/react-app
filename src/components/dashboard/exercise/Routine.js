import React from 'react';
// import PropTypes from 'prop-types'
import RoutineAccordion from './RoutineAccordion';
import styled from 'styled-components';


const Wrapper = styled.div`
.heading{
    background: rgba(46, 196, 182, 0.05); 
    border: 1px solid ${(props) => props.theme.color.brand_02};
padding: 4rem;
margin-bottom: 3rem;
.text1{
    font-weight: normal;
font-size: 1.6rem;
line-height: 1.5rem;
letter-spacing: 0.2px;
color: ${(props) => props.theme.color.ui_05};
}
}
`;

function Routine() {
	return (
		<Wrapper>
			<div className="heading">
				<h1 className='text1'>Routine</h1>
			</div>
			<RoutineAccordion week='Week 1'/>
			<RoutineAccordion week='Week 2'/>
			<RoutineAccordion week='Week 3'/>
			<RoutineAccordion week='Week 4'/>
			<RoutineAccordion week='Week 5'/>
			<RoutineAccordion week='Week 6'/>
		</Wrapper>
	);
}

Routine.propTypes = {

};

export default Routine;

