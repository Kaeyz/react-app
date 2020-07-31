import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

import styled from 'styled-components';

const Wrapper = styled.div`
  .flex {
    display: flex;
    justify-content: start;
    img {
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
    }
    h1 {
      font-size: 1.7rem;
      line-height: 3.2rem;
			font-weight: normal;
      color: ${(props) => props.theme.color.text_01};
    }
  }
  .withGuage {
		justify-content: space-between;
		align-items:flex-end;
    .guage{
      width: 6rem;
      height: 6rem;
    }
  }
  .paper {
    margin: 1rem 0;
    color: ${(props) => props.theme.color.text_01};
    padding: 1rem;
    justify-content: space-between;
    h2 {
      font-size: 1.5rem;
      line-height: 2rem;
			font-weight: normal;
    }
    h4 {
      font-size: 1.5rem;
      line-height: 2rem;
			font-weight: normal;
    }
  }
  .points {
		color: ${(props) => props.theme.color.text_01};
		margin-top: 1rem;
		.pointBar{
			margin: 0 1.5rem;
			width: 20rem;
			.MuiLinearProgress-colorPrimary{
				background-color: ${(props) => props.theme.color.ui_text_01};
				height: 0.8rem;
			}
			.MuiLinearProgress-barColorPrimary{
				background-color: ${(props) => props.theme.color.ui_01};
				height: 0.8rem;
			}
			.MuiLinearProgress-bar1Buffer{
				border-bottom: .4rem dashed #2EC4B6;
				border-top: .4rem dashed #2EC4B6;
			}
		}
	}
	p {
		font-size: 1.5rem;
		line-height: 20px;
		font-weight: 500;
	}
	h5 {
		font-size: 1.5rem;
		line-height: 20px;
		font-weight: 500;
	}
	span {
		font-size: 14px;
		line-height: 24px;
		color: ${(props) => props.theme.color.support_info};
		margin-left:.4rem;
		font-weight: 100;
	}
}
`;

const QuestionnaireLayout = ({ children, ...props }) => {

	return (
		<Wrapper>
			<main className="content">
				<div className="flex withGuage">
					<div>
						<div className="flex" style={{alignItems:'center'}}>
							{' '}
							<img  src={props.Image} alt={props.alt} />
							<h1>Health Questionnaire</h1>
						</div>
						<div className="flex points">
							<p>Points</p>
							<div className='pointBar'>
								<LinearProgress variant="buffer" value={40} valueBuffer={100} />
							</div>
							<h5>40/100 <span>points</span></h5>
						</div>
					</div>

					<div>
						{' '}
						<img className="guage" src={props.ImageRight} alt={props.alt2} />
					</div>
				</div>

				<Paper className="flex paper">
					<h2>{props.whatQuestion}</h2>
					<h4>{`${props.howManyQuestion} questions`}</h4>
				</Paper>
				{children}
			</main>
		</Wrapper>
	);
};

QuestionnaireLayout.propTypes = {
	whatQuestion: PropTypes.string,
	howManyQuestion: PropTypes.string,
	alt: PropTypes.string,
	alt2: PropTypes.string,
	ImageRight: PropTypes.any,
	Image: PropTypes.any,
	children: PropTypes.any
};

export default QuestionnaireLayout;
