import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';
import Back from '../../../assets/greenBackArrow.svg';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { device } from '../../../Device';
import smallImg from '../../../assets/Activity.svg';

const Wrapper = styled.div`
  .flex-back {
    display: flex;
    align-items: flex-end;
    justify-content: start;
    padding: 1rem 0;
    text-decoration: none;
    ${device.tablet`
    display:none;
  `}
    .back {
      font-weight: bold;
      font-size: 1.4rem;
      line-height: 1.4rem;
      color: #2ec4b6;
      padding-left: 0.8rem;
    }
  }
  .titleWithNull {
    width: 100%;
    padding: 3.8rem 0;
    align-items: center;
    ${device.tablet`
    justify-content:start;
  `}
    h1 {
      font-weight: bold;
      font-size: 2.0rem;
      line-height: 2.0rem;
      letter-spacing: -0.2px;
      color: #000b0a;
      width: 275px;
      max-width: 100%;
    }
    .title {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr max-content;
      align-items: center;
      img {
        max-width: max-content;
      }
      .img {
        ${device.tablet`
				display:none;
			  `}
      }
      .img2 {
        display: none;
        ${device.tablet`
				display:block;
			  `}
      }
    }
    .null {
      border: 1px solid rgba(214, 216, 211, 0.5);
      margin: 10px 0px;
      width: 100%;
      ${device.tablet`
    display:none;
  `}
    }
  }
  .questions-container {
    box-shadow: 20px 12px 20px rgba(233, 233, 233, 0.25);
    border-radius: 10px;
    padding: 3rem;
    display: grid;
    ${device.tablet`
	display: block;
	background-color:#fbfbfb;
	box-shadow: 0px 0px 0px rgba(233, 233, 233, 0.25);
	padding:0;
  `}
    .gridy {
      ${device.tablet`
    display: block;
  `}
      .gridy1 {
        ${device.tablet`
    max-width: 100%;
  `}
        .paper-question {
          box-shadow: 0px 0px 0px;
          ${device.tablet`
  box-shadow: 20px 12px 20px rgba(233, 233, 233, 0.25);
border-radius: 4px;
	background-color:#fff;
		padding: 2.4rem 1rem;
  `}
        }
      }
    }
    .what-question {
      position: sticky;
      top: 40px;
      h5 {
        font-weight: bold;
        font-size: 2.1rem;
        line-height: 3.0rem;
        color: #171f46;
        padding: 2.9rem 0 1rem 0;
      }
      p {
        font-size: 1.6rem;
        line-height: 2.5rem;
        align-items: center;
        letter-spacing: 0.2px;
        color: #000b0a;
      }
      .pointBar {
        h2 {
          font-size: 1.2rem;
          line-height: 1.1rem;
          color: #737373;
          padding-bottom: 1rem;
        }
        .flex {
          justify-content: space-between;
          .show_mobile {
            display: none;
            ${device.tablet`
    display:block;
  `}
          }
        }
      }
      .MuiLinearProgress-barColorPrimary {
        background-color: #f37920;
        border-radius: 100px;
      }
      .MuiLinearProgress-colorPrimary {
        background-color: rgba(243, 121, 32, 0.1);
        border-radius: 100px;
      }
    }
  }
`;

const QuestionnaireLayout = ({
	children,
	heading,
	previousLink,
	whatQuestion,
	detail,
	percent,
}) => {
	return (
		<Wrapper>
			<section className="top">
				<Link className="flex-back grid" to={previousLink}>
					<img src={Back} alt="go back" />
					<p className="back">Back</p>
				</Link>

				<div className="flex titleWithNull">
					<div className="title">
						<img src={smallImg} alt="adornment" className="img" />
						<img src={Back} alt="go back" className="img2" />
						<h1>{heading}</h1>
					</div>
					<div className="null" />
				</div>
			</section>

			<Paper className="questions-container">
				<Grid container spacing={3} className="gridy">
					<Grid item sm={4} xs={12} className="gridy1">
						<div className="what-question">
							<div className="pointBar">
								<div className="flex">
									<h2>{percent}% Completed</h2>
									<h2 className="show_mobile">step 1 of 3</h2>
								</div>
								<LinearProgress
									variant="determinate"
									value={percent}
									valueBuffer={100}
								/>
							</div>
							<h5>{whatQuestion}</h5>
							<p>{detail}</p>
						</div>
					</Grid>
					<Grid item sm={8} xs={12} className="gridy1">
						<Paper className="paper-question">{children}</Paper>
					</Grid>
				</Grid>
			</Paper>
		</Wrapper>
	);
};

QuestionnaireLayout.propTypes = {
	alt: PropTypes.string,
	alt2: PropTypes.string,
	ImageRight: PropTypes.any,
	Image: PropTypes.any,
	heading: PropTypes.string.isRequired,
	percent: PropTypes.number.isRequired,
	whatQuestion: PropTypes.string.isRequired,
	detail: PropTypes.string.isRequired,
	previousLink: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	reportButton: PropTypes.bool.isRequired,
};

export default QuestionnaireLayout;
