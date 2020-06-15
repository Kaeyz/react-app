import React from 'react';
import Container from '../../common/Container';
import styled from 'styled-components';
import Ellipse31 from '../../../assets/Ellipse31.png';
import Ellipse_31 from '../../../assets/Ellipse_31.png';
import Ellipse32 from '../../../assets/Ellipse32.png';

//import PropTypes from 'prop-types';

const Wrapper = styled.div`
			height: 30rem;
			border: 2px solid black;
		.left-background {
			background-image: url(${Ellipse31});
			height: 100%;
			width: 100%;
			background-repeat: no-repeat;
			background-position: center left;
			background-size: 5%;
		}
		.right-background {
			height: 100%;
			width: 100%;
			background-repeat: no-repeat;
			background-position: center right;
			background-size: 5%;
		}
		.pink {
			background-image: url(${Ellipse32});
		}
		.green {
			background-image: url(${Ellipse_31});
		}

`;

function Recommendations() {
	return (
		<Wrapper>
			<div className="left-background">
				<div className="right-background pink">
					<Container>
						Recommendations
					</Container>
				</div>
			</div>
		</Wrapper>
	);
}

Recommendations.propTypes = {

};

export default Recommendations;

