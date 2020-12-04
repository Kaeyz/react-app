// modules
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
	/* blog css styling goes here */
	.blog_card {
		min-width: 27rem;
		max-width: 30rem;
		height: max-content;
		border: 1px solid ${(props) => props.theme.color.ui_text_09};
		&:hover{
			box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
			transition : .3s;
		}
	}
	.img_div {
		width: 100%;
		max-height: 21rem;
	}
	.blog_img {
		width: 100%;
		height: 20rem;
	}
	.card_content {
		height: 100%;
	}
	.blog-tag {
		position: absolute;
		top: 20px;
		right: 10px;
	}
	#yellow {
		background-color: rgba(247, 194, 54, 0.8);
	}
	#blue{
		background-color: rgba(46,196,182, 0.8);
	}
	#green{
		background-color: rgba(141,184,56, 0.8);
	}
	#orange{
		background-color: rgba(244,120,3, 0.8);
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
	}
	.light {
		font-size: 1.3rem;
		font-weight: 100;
		line-height: 1.3rem;
		color: ${(props) => props.theme.color.text_12};
	}
	.card_info {
		display: flex;
		justify-content: space-between;
		padding-top: 1rem;
	}
`;

const MonoBlog = ({ author, to, title, tag, createdAt, src, alt, tagColor }) => {

	return (
		<Wrapper>

			<Link class='mono-blog-link' to={to}>
				<Card className="blog_card" elevation={0}>
					<div className="img_div">
						<img src={src} alt={alt} className="blog_img" />
						<p className="tag blog-tag" id={`${tagColor}`}>
							{tag}
						</p>
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
	alt: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	tagColor: PropTypes.string.isRequired,
	to: PropTypes.any,
	createdAt: PropTypes.string.isRequired,
};


export default MonoBlog;


