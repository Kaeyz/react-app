import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import img from '../../../assets/affection-couple.svg';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	.heading {
		display: flex;
		justify-content: space-between;

		padding: 0 2px;
		h1 {
			font-size: 18px;
			line-height: 24px;
			font-weight: 600;
			color: ${(props) => props.theme.color.text_01};
		}
		.null {
			border-bottom: 1px solid #d6d8d3;
			width: 321px;
			margin-bottom: 5px;
		}
	}
	.bg {
		background-image: url(${img});
		width: 100%;
		height: 219px;
		margin-top: 3.7rem;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.read-more{
		margin: 1.8rem 0;
		font-size: 14px;
		line-height: 24px;
		color: ${(props) => props.theme.color.text_02};
	}
`;

function GetStartedCard() {
	return (
		<Wrapper>
			<div className="heading">
				<h1>Getting started</h1>
				<div className="null"></div>
			</div>
			<div className="bg"></div>
			<p className="read-more">
				More and more people are struggling with obstacles that keep them from
				eating better, moving around more and making healthy lifestyle choices.
				We find both younger and older people coming down with serious non
				communicable diseases like Hypertension, Diabetes, Obesity and Cancer
				due to personal and workplace related reasons. <span style={{color: '#2EC4B6'}}>View more</span>
			</p>
			<Link to="/dashboard_home2">
				<Button value="Get started" theme="green">
				Get started
				</Button>
			</Link>
		</Wrapper>
	);
}

// GetStartedCard.propTypes = {

// }

export default GetStartedCard;
