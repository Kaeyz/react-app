import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';


const Wrapper = styled.div`
  .grid-container {
    left: 300px;
    padding: 3rem 0rem;
    top: 425px;
    background-color: ${(props) => props.theme.color.text_10};
    border: 1px solid ${(props) => props.theme.color.ui_12};
    border-radius: 10px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding: 3rem;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding: 2rem;
    }
    .heading {
      font-weight: bold;
      font-size: 1.4rem;
      line-height: 1.6rem;
      letter-spacing: -0.2px;
      color: ${(props) => props.theme.color.ui_05};
    }
    .gridy {
      display: flex;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        display: block;
      }
      .pad {
        padding: 0 4rem;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
          padding: 0;
        }
      }
    }
    .grid {
      display: grid;
      padding-top: 3rem;
      grid-gap: 4rem;
      grid-template-columns: 1fr 1fr;

      .text {
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2.2rem;
        color: ${(props) => props.theme.color.ui_05};
        @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
          font-size: 1.3rem;
        }
      }
      .bold {
        font-weight: bold;
      }
    }
  }

  #pt {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding-top: 4rem;
    }
  }
  hr {
    background-color: ${(props) => props.theme.color.ui_text_07};
    margin: 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: none;
    }
  }
`;

function BodyMassCard() {
	return (
		<Wrapper>
			<Paper className="grid-container">
				<div className="gridy">
					<div className="pad">
						<h1 className="heading">BMI Details</h1>
						<div className="grid">
							<p className="light text">Height (CM)</p>
							<h2 className="bold text">155.5</h2>
						</div>
						<div className="grid">
							<p className="light text">Weight (Kg)</p>
							<h2 className="bold text">60</h2>
						</div>
						<div className="grid">
							<p className="light text">Body Mass Index (BMI)</p>
							<h2 className="bold text">22.5</h2>
						</div>
						<div className="grid">
							<p className="light text">BMI Result</p>
							<h2 className="bold text">Normal</h2>
						</div>
					</div>
					<hr orientation="vertical" flexItem />

					<div id="pt" className="pad">
						<h1 className="heading">What does this result mean?</h1>
						<div className="grid">
							<p className="light text">Less than 18.5</p>
							<p className="light text">Underweight.</p>
						</div>
						<div className="grid">
							<p className="light text">Between 18.5 - 24.9</p>
							<p className="light text">Normal</p>
						</div>
						<div className="grid">
							<p className="light text">Between 25 - 29.9</p>
							<p className="light text">Overweight</p>
						</div>
						<div className="grid">
							<p className="light text">Over 30</p>
							<p className="light text">Obese</p>
						</div>
					</div>
				</div>
			</Paper>
		</Wrapper>
	);
}

BodyMassCard.propTypes = {};

export default BodyMassCard;
