/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Back from '../../../../assets/greenBackArrow.svg';
import styled from 'styled-components';
import Button from '../../../../components/common/Button';
import downloadIcon from '../../../../assets/Vector.svg';

const Wrapper = styled.div`
	padding: 1rem 0;
	.back {
		font-weight: bold;
		font-size: 14px;
		line-height: 14px;
		color: #2ec4b6;
		margin-left: 0.8rem;
	}
	.flex-back {
		display: flex;
		align-items: center;
		justify-content: start;
		padding: 1rem 0;
		text-decoration: none;
	}
	.null {
			border: 1px solid rgba(214, 216, 211, 0.5);
			margin: 10px 0px;
			width: 100%;
		}
	.title {
		display: flex;
		justify-content: start;
		align-item:center;
		img {
			padding-right: 1rem;

		}
		h1 {
			font-size: 1.8rem;
			font-weight: normal;
			color: #000b0a;
			min-width: max-content;
		}
	}
	.downloadButton {
		width: max-content;
	}
	.withGuage{
		display: grid;
		width: 100%;
		grid-template-columns: max-content max-content;
		justify-content: space-between;
		align-items: flex-end;
		grid-gap: 1rem;
		margin-top: 1.5rem;
	}
`;
function QuestionnaireLayout({ children, alt, heading, reportButton, Image, previousLink, downloadAction  }) {
	return (
		<Wrapper>
			{
				previousLink &&
				<Link className="flex-back" to={previousLink}>
					<img src={Back} alt="go back" />
					<p className="back">Back</p>
				</Link>
			}
			<div className="flex withGuage">
				<div className="title">
					<img src={Image} alt={alt} />
					<h1>{heading}</h1>
				</div>
				{reportButton ?
					<div >
						<Button theme="darkGreen" text="Download Report" onClick={downloadAction}>
							<img src={downloadIcon} alt={downloadIcon}/>
						</Button>
					</div>
					:
					<div className="null" />
				}
			</div>
			{children}
		</Wrapper>
	);
}

QuestionnaireLayout.defaultProps = {
	reportButton: false
};

QuestionnaireLayout.propTypes = {
	Image: PropTypes.any,
	alt: PropTypes.any,
	heading: PropTypes.string.isRequired,
	previousLink: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	reportButton: PropTypes.bool.isRequired,
	downloadAction: PropTypes.func.isRequired
};

export default QuestionnaireLayout;
