import React from 'react';
import Container from '../../common/Container';
import styled from 'styled-components';
import flower1 from '../../../assets/img/flower_1.png';
import flower2 from '../../../assets/img/flower_2.png';
import CircleCard from '../../common/CircleCard';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
		height: max-content;
		width: 100%;
		display: flex;
		.flower1 {
   	 background-image: url(${flower1});
			height: 50%;
			width: 100%;
			background-repeat: no-repeat;
			background-position: center left;
			background-size: 10%;
		}
  .flower2 {
		height: 100%;
		width: 100%;
    background-image: url(${flower2});
		background-repeat: no-repeat;
		background-position: center right;
		background-size: 15%;
  }
	.top_section {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.health {
		background-color: red;
	}

	.lifestyle {
		background-color: tomato;
	}

`;

function MainBanner({page}) {
	return (
		<Wrapper>
			<div className='flower1'>
				<div className='flower2'>
					<Container>
						<div className="top_section">
							<div>TITLE</div>
							<CircleCard />
						</div>
						<div className={`${page}`}>sub_nav</div>
					</Container>
				</div>
			</div>
		</Wrapper>
	);
}

MainBanner.propTypes = {
	page: PropTypes.string.isRequired,
};

export default MainBanner;

