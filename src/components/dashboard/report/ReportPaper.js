import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled.div`
.paper{
    margin: 6rem 0;
    padding: 4rem;
    h5{
        font-size: 20px;
line-height: 25px;
letter-spacing: 0.2px;
color: #000B0A;
margin-bottom: 3rem;
    }
    p{
        margin-bottom: 2rem ;
    }
}
`;

function ReportPaper({...props}) {
	return (
		<Wrapper>
			<Paper className='paper'>
            <h5>{props.cardHeading}</h5>
            <p>{props.cardBody}</p>
            <p>{props.cardBody2}</p>
            <p>{props.cardBody3}</p>
            <p>{props.cardBody4}</p>
            </Paper>

		</Wrapper>
	);
}

// ReportPaper.propTypes = {

// }

export default ReportPaper;

