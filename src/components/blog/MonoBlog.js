// modules
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import blogBg from '../../assets/wellnessNav/check-up-dentist-doctors.svg';
import { Card, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	/* blog css styling goes here */
	.blog_card {
		background: rgba(0, 0, 0, 0.03);
		min-width: 30rem;
		max-width: 34rem;
		margin-left: 3rem;
		margin-top: 3rem;
	}
	.img_div {
		width: 100%;
		max-height: 30rem;
	}
	.blog_img {
		width: 100%;
		height: 100%;
	}
	.card_content {
		text-align: start;
		background: ${props => props.theme.color.brand_02};
		margin-top: -.9rem;
		color:#fff
	}
	.card_description {
		font-size: 1.1rem;
	}
	.card_footer {
		display: grid;
		grid-template-columns: max-content max-content;
		justify-content: space-between;
		margin-top: 2rem;
	}
	.test_link {
		text-decoration: underline;
    color: #fff;
	}
 	.deepYellow_card {
		background-color: ${props => props.theme.color.brand_03};
	}
	.purple_card {
		background-color: ${props => props.theme.color.brand_04};
	}
	.pink_card {
		background-color: ${props => props.theme.color.brand_01};
	}
`;

export default function MonoBlog({color, tryTest, data}) {

	const displayTest = () => {
		return (
			<Link className="test_link" to="/">
				Try the test
			</Link>
		);
	};

	return (
		<Wrapper>
			<Card className="blog_card">
				<div className="img_div">
					<img src={blogBg} alt="blog bg" className="blog_img"/>
				</div>
				<CardContent className={`card_content ${color}_card`}>
					<h2>{data.title}</h2>
					<p className="card_description">
						{data.description}
					</p>
					<div className="card_footer">
						{tryTest && displayTest()}
						<Button
							value="Read More"
							theme={color === 'default' ? 'green' : color}
							style={{ boxShadow: '0px 4px 4px rgba(46, 196, 182, 0.25)' }}
						>
							{' '}
							Read More
						</Button>
					</div>
				</CardContent>
			</Card>
		</Wrapper>
	);
}

MonoBlog.defaultProps = {
	tryTest: true,
};

MonoBlog.propTypes = {
	tryTest: PropTypes.bool,
	color: PropTypes.string,
	data: PropTypes.object.isRequired,
};
