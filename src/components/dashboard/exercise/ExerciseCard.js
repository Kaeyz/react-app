import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled.div`

.programmes{
    .paper{
        padding: 1rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
border-radius: 10px;
min-width: 230px;
img{
    width: 100%;
}
    }
    .info{
        font-weight: normal;
font-size: 1.4rem;
line-height: 1.3rem;
letter-spacing: 0.2px;
color: ${(props) => props.theme.color.ui_05};
padding: .5rem 0;
    }
}
`;

function ExerciseCard({text, image}) {
	return (
		<Wrapper>
			<div className="programmes">
				<Paper className='paper' >
					<img src={image} alt="exercise-img"/>
					{/* <p className={`${fontSize}`}>hello</p> */}
					<p className='info'>{text}</p>
				</Paper>
			</div>
		</Wrapper>
	);
}

ExerciseCard.propTypes = {
	text: PropTypes.string.isRequired,
	image: PropTypes.any,
};

export default ExerciseCard;

