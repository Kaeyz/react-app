import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Container from '../../common/Container';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: -webkit-fill-available;
	margin-top: 3rem;
	.paper {
		padding: 8rem;
		width: 55rem;
		height: auto;
		position: relative;

		.auth_title {
			text-align: center;
			font-size: 2.5rem;
			line-height: 3rem;
			margin-bottom: 2.5rem;
		}
		.auth_text {
			text-align: center;
			width: 40rem;
			margin: auto;
			font-size: 1.2rem;
			line-height: 2.4rem;
		}
	}
	hr {
		border: 1px solid #f0f1f3;
	}
	.submit {
		margin-top: 2.6rem;
		height: 4.8rem;
		Button {
			height: 4.8rem;
		}
	}
	img {
		position: absolute;
		top: -64px;
		right: 36%;
		z-index: 2;
	}
`;
function CommonAuthPaperPage({ children, ...props }) {
	return (
		<Wrapper>
			<Container>
				<Paper className="paper" elevation={3}>
					<img src={props.img} alt={props.alt} />
					<h1 className="auth_title">{props.title}</h1>
					<hr/>
					<p className="auth_text">{props.detail}</p>
					{children}
				</Paper>
			</Container>
		</Wrapper>
	);
}

CommonAuthPaperPage.propTypes = {
	img: PropTypes.any,
	alt: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.any,
	detail: PropTypes.string
};

export default CommonAuthPaperPage;
