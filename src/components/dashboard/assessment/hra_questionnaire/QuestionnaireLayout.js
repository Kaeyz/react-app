/* eslint-disable no-mixed-spaces-and-tabs */
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Back from '../../../../assets/greenBackArrow.svg';
import downloadIcon from '../../../../assets/Vector.svg';
import Button from '../../../../components/common/Button';

const Wrapper = styled.div`
	padding: 1rem 0;
	.back {
		font-weight: bold;
		font-size: 1.4rem;
		line-height: 1.4rem;
		color: ${(props) => props.theme.color.brand_02};
		margin-left: 0.8rem;
	}
	.top-paper	{
		background: ${(props) => props.theme.color.ui_01};
		box-shadow: 20px 12px 20px rgba(233, 233, 233, 0.25);
		border-radius: 0px;
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
			display:none;
		}
	}
	.flex-back {
		display: flex;
		align-items: center;
		justify-content: start;
		padding: 1rem 0;
		text-decoration: none;
		@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
				display:none;
			}
		}
	.review-back{
		display:none;
		justify-content: start;
		padding-bottom: 2rem;
		@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
			display:flex;
		}
		p	{
			font-weight: bold;
			font-size: 2rem;
			line-height: 2rem;
			color: ${(props) => props.theme.color.ui_05};
			padding-left: 2rem;
		}
	}
	.null {
			border: 1px solid rgba(214, 216, 211, 0.5);
			margin: 10px 0px;
			width: 100%;
		}
	.title {
		display: flex;
		justify-content: start;
		align-items:center;
		width:100%;
		img {
			padding-right: 1rem;
		}
		h1 {
			font-size: 1.8rem;
			font-weight: bold;
			color: ${(props) => props.theme.color.ui_05};
			min-width: max-content;
			@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
				min-width: auto;
				line-height: 1.7rem;
				font-size: 1.3rem;
			}
		}
	}
	.withGuage{
		display: grid;
		width: 100%;
		grid-template-columns: max-content 1fr;
		justify-content: space-between;
		align-items: center;
		grid-gap: 1rem;
		margin-top: 1.5rem;
		.none	{
			@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
				display:none;
					}
		}
		.download{
			margin-left: auto;
			@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
				display:none;
			}
		}
	}
	.exercise {
		display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
		}
	.top-header2 {
		display:grid;
		grid-gap: 1rem;
		align-items: center;
		grid-template-columns: max-content max-content 1fr;
	  margin: 0 0 4rem 0;
	  @media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
			grid-template-columns: max-content 1fr;
			display:none;
		}
	  .null {
			border: 1px solid rgba(214, 216, 211, 0.5);
			width: -webkit-fill-available;
			margin: 10px 0px;
	  }
	  img	{
		  @media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
			  display:none;
			}
	  }
		p {
		  font-weight: bold;
		  font-size: 1.6rem;
		  line-height: 1.6rem;
		  letter-spacing: 1.8px;
		  color: ${(props) => props.theme.color.ui_05};
		  @media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
			letter-spacing: -0.2px;
			}
		}
	}
	.review-mobile-only{
		display:none;
		@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
			display:grid;
		}
		p	{
			@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
				font-weight: normal;
			}
		}
	}
`;
function QuestionnaireLayout({
	children,
	alt,
	heading,
	reportButton,
	exerciseButton,
	Image,
	history,
	previousLink,
	downloadAction,
}) {
	return (
		<Wrapper>
			{previousLink && (
				<div className="flex-back" onClick={history.goBack}>
					<img src={Back} alt="go back" />
					<p className="back">Back</p>
				</div>
			)}
			{reportButton && (
				<Paper className='top-paper'>
					<div className="flex-back" onClick={history.goBack}>
						<img src={Back} alt="go back" />
						<p className="back">Back</p>
					</div>
					<div className="download">
						<Button
							theme="darkGreen"
							text="Download Report"
							onClick={downloadAction}
						>
							<img src={downloadIcon} alt={downloadIcon} />
						</Button>
					</div>
				</Paper>
			)}
			{exerciseButton && (
				<Paper className='top-paper'>
					<div className="flex-back" onClick={history.goBack}>
						<img src={Back} alt="go back" />
						<p className="back">Back</p>
					</div>
					{/* <div className="download exercise flex">
						<Button
							theme="whiteOrange"
							text="Leave programme"
						>
						</Button>
						<Button
							theme="darkGreen"
							text="Start Workout"
						>
						</Button>
					</div> */}
				</Paper>
			)}
			<div className="flex withGuage">
				<div className="title">
					<img src={Image} alt={alt} />
					<h1>{heading}</h1>
				</div>
			</div>
			{children}
		</Wrapper>
	);
}

QuestionnaireLayout.defaultProps = {
	reportButton: false,
};

QuestionnaireLayout.propTypes = {
	Image: PropTypes.any,
	alt: PropTypes.any,
	history: PropTypes.object.isRequired,
	heading: PropTypes.string.isRequired,
	previousLink: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	reportButton: PropTypes.bool.isRequired,
	exerciseButton: PropTypes.bool.isRequired,
	downloadAction: PropTypes.func.isRequired,
};

export default withRouter(QuestionnaireLayout);
