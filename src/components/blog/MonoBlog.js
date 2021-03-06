// modules
import { Card, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	/* blog css styling goes here */
	.blog_card {
		min-width: 27rem;
		max-width: 30rem;
		min-height: 300px;
		border: 1px solid ${(props) => props.theme.color.ui_text_09};
		&:hover {
			box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
				0px 5px 8px 0px rgba(0, 0, 0, 0.14),
				0px 1px 14px 0px rgba(0, 0, 0, 0.12);
			transition: 0.3s;
		}
	}
	.img_div {
		display: relative;
		width: 100%;
		height: 20.1rem;
		border-bottom: 1px solid #646060;
	}
	.blog_img {
		width: 100%;
		height: 20rem;
	}
	.card_content {
		height: 100%;
	}
	.blog-tag {
		position: relative;
		top: 110px;
		right: -235px;
		z-index: 50;
	}
	#yellow {
		background-color: rgba(247, 194, 54, 0.8);
	}
	#blue {
		background-color: rgba(46, 196, 182, 0.8);
	}
	#green {
		background-color: rgba(141, 184, 56, 0.8);
	}
	#orange {
		background-color: rgba(244, 120, 3, 0.8);
	}
	.blog-title {
		color: ${(props) => props.theme.color.text_13};
		font-size: 1.4rem;
		line-height: 1.4rem;
		padding-bottom: 1rem;
		height: 5rem;
		width: 100%;
		text-align: center;
		color: #1d1d1d;
		text-transform: uppercase;
	}
	h2 {
		font-size: 1.2rem;
		font-weight: 100;
		color: ${(props) => props.theme.color.text_12};
	}
	.card_info {
		display: flex;
		justify-content: space-between;
		padding-top: 1rem;
	}
`;
const MonoBlog = ({
	author,
	to,
	title,
	tag,
	createdAt,
	src,
	alt,
	tagColor,
}) => {
	return (
		<Wrapper>
			<Link class="mono-blog-link" to={to}>
				<Card className="blog_card" elevation={0}>
					<div className="img_div">
						<img src={src} alt={alt} className="blog_img" />
						<h2 className="tag blog-tag" id={`${tagColor}`}>
							{tag}
						</h2>
					</div>
					<CardContent className="card_content">
						<p className="blog-title">{title}</p>
						<div className="card_info">
							<h2 className="auto light">{author}</h2>
							<h2 className="date light">{createdAt}</h2>
						</div>
					</CardContent>
				</Card>
			</Link>
		</Wrapper>
	);
};

MonoBlog.propTypes = {
	src: PropTypes.any,
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
	alt: PropTypes.string,
	author: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	tagColor: PropTypes.string.isRequired,
	to: PropTypes.any,
	createdAt: PropTypes.string.isRequired,
};

export default MonoBlog;
