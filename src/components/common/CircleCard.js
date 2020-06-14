import React from 'react';
import styled from 'styled-components';
import circle from '../../assets/Ellipse17.png';
import centerFrame from '../../assets/Frame.png';


//import PropTypes from 'prop-types';

const Wrapper = styled.div`
	justify-content: center;
	display: flex;
	padding: 3.3rem 11.5rem;
	.circular {
		position: relative;
	}
	.Parentnode0{
			top: -1.1rem;
			left: 47%;
	}
	.Parentnode1{
		bottom: .1rem;
		left: 47%;
	}
	.Parentnode2{
		top: 45%;
		left: -.9rem;
	}
	.Parentnode3{
		top: 45%;
		left: 96%;
	}
	.node{
		width: 1.302rem;
		height: 1.302rem;
		background: #3CBDB2;
		border-radius: 50%;
		text-align: center
	}
	.Parentnode{
		width: 2.293rem;
		height: 2.293rem;
		background: rgba(46, 196, 182, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		position: absolute;

		}
	.node>.flex{
		font-size: 1.6rem;
		line-height: 1.9rem;
		color: #606161
	}
	.centered {
		position: absolute;
		top: 50%;
		left: 50%;
		color: #1d1d1d;
		text-align: center;
		transform: translate(-50%, -50%);
	}
`;

const CircleCard = () => {
	return (
		<Wrapper>
			<div className="circular">
				<img src={circle} alt="circular"  />
				<div className="Parentnode Parentnode0">
					<div className="node">
						<h2 className="flex" style={{marginTop:'-2.5rem'}}>HEALTH</h2>
					</div>
				</div>
				<div className="Parentnode Parentnode1">
					<div className="node">
						<h2 className="flex" style={{marginTop:'2rem'}}>FITNESS</h2>

					</div>
				</div>
				<div className="Parentnode Parentnode2">
					<div className="node">
						<h2 className="flex" style={{marginLeft:'-13.3rem'}}>NUTRITION</h2>

					</div>
				</div>
				<div className="Parentnode Parentnode3">
					<div className="node">
						<h2 className="flex" style={{marginRight:'-12.3rem',}}>LIFESTYLE</h2>

					</div>
				</div>
				<div className="centered">
					<img src={centerFrame} alt="center-frame" />

				</div>
			</div>
		</Wrapper>
	);
};

CircleCard.propTypes = {

};

export default CircleCard;

