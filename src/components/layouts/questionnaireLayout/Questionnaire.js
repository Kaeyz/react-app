import React from 'react';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

// import Container from '../../components/common/Container';

import styled from 'styled-components';

const Wrapper = styled.div`
  .content {
    padding: 2rem;
  }
  .flex {
    display: flex;
    justify-content: start;
    img {
      width: 3.3rem;
      height: 4.333rem;
      margin-right: 2.1rem;
    }
    h1 {
      font-size: 3.0rem;
      line-height: 3.2rem;
      color: ${(props) => props.theme.color.text_01};
    }
  }
  .withGuage {
	justify-content: space-between;
	align-items:flex-end;
    .guage{
      width: 7.8rem;
      height: 7.8rem;
    }
  }
  .paper {
    margin: 2.1rem 0;
    color: ${(props) => props.theme.color.text_01};
    padding: 1.8rem 2.6rem;
    justify-content: space-between;
    h2 {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }
    h4 {
      font-size: 1.5rem;
      line-height: 2.0rem;
    }
  }
  .points{
	color: ${(props) => props.theme.color.text_01};
	margin-top:3rem;
	.pointBar{
		margin: 0 1.5rem;
		width:20rem;
		.MuiLinearProgress-colorPrimary{
			background-color: ${(props) => props.theme.color.ui_text_01};
			height: .8rem;
		}
		.MuiLinearProgress-barColorPrimary{
			background-color: ${(props) => props.theme.color.ui_01};
			height: .8rem;
		}
		.MuiLinearProgress-bar1Buffer{
			border-bottom: .4rem dashed #2EC4B6;
			border-top: .4rem dashed #2EC4B6;
		}
		
		

		}
	}
	p{
		font-size: 18px;
line-height: 24px;
font-weight: 600;
	}
	h5{
		font-size: 15px;
line-height: 20px;
font-weight: 600;

	}
	span{
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
						<div className="flex" style={{alignItems:"center"}}>
							{' '}
							<img  src={props.Image} alt={props.alt} />
							<h1>Health Questionnaire</h1>
						</div>
						<div className="flex points">
							<p>Points</p>
							<p className='pointBar'>   
							   <LinearProgress variant="buffer" value="40" />
</p>
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

export default QuestionnaireLayout;
