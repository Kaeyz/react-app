
import Paper from '@material-ui/core/Paper';
import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';

const Wrapper = styled(Paper)`
border: 1px solid rgba(220, 220, 235, 0.1);
margin-top: 2.5rem;
box-shadow: none;
`;
function Calendar() {
	return (
		<Wrapper>
            Calendar
		</Wrapper>
	);
}

Calendar.propTypes = {

};

export default Calendar;
