import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import Button from '../../common/Button';

const Wrapper = styled.div`
	.heading {
		display: flex;
		justify-content: space-between;

		padding: 0 2px;
		h1 {
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
		background-image: url('https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309882/chooseLife/affection-couple_v36hii.svg');
		width: 100%;
		height: 219px;
		margin-top: 3.7rem;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.read-more {
		margin: 1.8rem 0;
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
				Most people struggle with eating healthily, moving around often, and
				making healthy lifestyle choices. Because of this, more people are
				coming down with serious non-communicable diseases largely due to
				personal and work-related issues. Unfortunately, poor lifestyle choices
				can hinder them from fending off preventable diseases.{' '}
				<span style={{ color: '#2EC4B6' }}>View more</span>
			</p>
			<Link to="/dashboard_home2">
				<Button value="Get Started" theme="green">
					Get started
				</Button>
			</Link>
		</Wrapper>
	);
}

// GetStartedCard.propTypes = {

// }

export default GetStartedCard;
