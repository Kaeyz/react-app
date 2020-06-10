// modules
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import blogBg from '../../assets/check-up-dentist-doc.png';
import { Card, CardContent } from '@material-ui/core';

//import PropTypes from 'prop-types';

const Wrapper = styled.div`
	/* blog css styling goes here */
	.blog_card {
		background: rgba(0, 0, 0, 0.03);
		max-width: 30rem;
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
		text-decoration: none;
	}
`;

export default function MonoBlog() {
	return (
		<Wrapper>
			<Card className="blog_card">
				<div className="img_div">
					<img src={blogBg} alt="blog bg" className="blog_img"/>
				</div>
				<CardContent className="card_content">
					<h2>Healthy Living</h2>
					<p className="card_description">
						Using our algorithm, we carry out a preliminary assessment to
						understand the state of your health and determine how best to serve
						you!
					</p>
					<div className="card_footer">
						<Link className="test_link" to="/">
							Try the test
						</Link>
						<Button
							value="Read More"
							theme="green"
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

MonoBlog.propTypes = {
	//TODO: blog prop types goes here
};
