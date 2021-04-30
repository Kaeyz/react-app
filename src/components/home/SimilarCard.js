import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';

const Wrapper = styled.div`
	position: relative;
	.main-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10rem;
		padding-bottom: 5rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			grid-template-columns: 1fr;
		}
	}
	.yellow {
		color: ${(props) => props.theme.color.ui_11};
		margin: 15px 0 8px 0;
	}
	.orange {
		margin: 1rem 0 3rem 0;
		color: ${(props) => props.theme.color.ui_08};
	}
	.green {
		margin: 1rem 0 3rem 0;
		color: ${(props) => props.theme.color.ui_10};
	}
	h2 {
		font-size: 3rem;
	}
	h5 {
		font-size: 1.8rem;
	}
	.smallsubhead {
		margin-top: 2rem;
	}

	.first {
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			order: 2;
		}
	}
	.second {
		text-align: right;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			order: 1;
		}
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			margin-top: 5rem;
		}
	}
	.second-order {
		order: 1;
		text-align: left;
	}
	.mt {
		margin-top: 150px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			margin-top: 0px;
		}
	}
	.first-order {
		order: 2;
	}

	.sub-heading {
		margin-top: 1.5rem;
	}
	.detail3 {
		margin-top: 2rem;
	}
	.pd-b {
		padding-bottom: 10rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			padding-bottom: 3rem;
		}
	}
	.flower-right {
		position: absolute;
		right: 0;
		bottom: -38px;
		height: 350px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			top: 60px;
		}
	}
	.flower-left {
		position: absolute;
		left: 0;
		bottom: 0;
		height: 350px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			top: 130px;
		}
	}
`;
function SimilarCard({
	id,
	src,
	mt,
	alt,
	subhead,
	colorSubHead,
	detail1,
	detail2,
	order1,
	order2,
	detail3,
	flowerRight,
	flowerLeft,
	smallsubhead,
	pad,
	colorHead,
	whichImg,
}) {
	return (
		<Wrapper id={id}>
			<img className="flower-right" src={flowerRight} />
			<img className="flower-left" src={flowerLeft} />
			<Container>
				<div className={`${pad} main-content`}>
					<div className={`${order1} ${mt} first`}>{whichImg}</div>
					<div className={`${order2} second`}>
						<img src={src} alt={alt} />
						<h2 className={`${colorHead} sub-heading`}>
							{subhead}
						</h2>
						<p className="detail1">{detail1}</p>
						<h5 className={`${colorSubHead} smallsubhead`}>
							{smallsubhead}
						</h5>
						<p className="detail2">{detail2}</p>
						<p className="detail3">{detail3}</p>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}

SimilarCard.propTypes = {
	src: PropTypes.any,
	id: PropTypes.string,
	flowerRight: PropTypes.any,
	flowerLeft: PropTypes.any,
	whichImg: PropTypes.any.isRequired,
	alt: PropTypes.string.isRequired,
	order1: PropTypes.string,
	mt: PropTypes.string,
	order2: PropTypes.string,
	subhead: PropTypes.string.isRequired,
	detail1: PropTypes.string.isRequired,
	detail2: PropTypes.string,
	pad: PropTypes.string,
	detail3: PropTypes.string,
	smallsubhead: PropTypes.string,
	colorHead: PropTypes.string.isRequired,
	colorSubHead: PropTypes.string,
};

export default SimilarCard;
