/*eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import health from "../../assets/wellnessNav/health.svg";
import Container from "../common/Container";
import flower1 from "../../assets/img/flower_1.png";
import flower2 from "../../assets/img/flower_2.png";
import SquareImg from "./SquareImg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
position: relative;
padding: 175px 0 150px 0;
@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
	padding: 10rem 0 3rem 0;
}
@media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
	padding: 2rem 0 3rem 0;
	overflow: hidden;
}
.mb-15sm{
	
		@media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
			margin-bottom: 15px;
			}
}
 .flower2{
	 right: 0;
	 opacity: .5;
	 height: 315px;
 }
 .flower1{
	 bottom: 140px;
	 height: 315px;
	 opacity: .7;
	 @media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
		bottom: 0;
	}
	@media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
		bottom: -114px;
	}
 }
  .absolute {
    position: absolute;
  }
    .lhs {
    p {
      color: ${props => props.theme.color.brand_02};
	  font-size: 3.5rem;
	  line-height: 4.0rem;
	  @media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
		font-size: 2.9rem;
	}
    }
  }
  .with-text{
	  margin-top: 30px;
  }
  .heading{
	color: ${props => props.theme.color.brand_02};
	font-weight: 100;
	font-size: 1.9rem;
	line-height:3.0rem;
  }
  .detail{ 
	font-size: 1.5rem;
	line-height:2.7rem;}
	.MuiGrid-spacing-xs-10 > .MuiGrid-item {
	
		@media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
			padding: 40px 0;
				}
	}
	.MuiGrid-spacing-xs-7 > .MuiGrid-item {
		@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
			padding: 0 28px 0 0;
				}
		@media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
			padding: 0 0 0 0;
				}
	}
	.MuiGrid-spacing-xs-10{
		@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
						width: 100%;
		}
		@media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
						margin: 0;
		}
	}
	.MuiGrid-spacing-xs-7 {
		@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
			margin: 0;
			padding: 28px 0 28px 0px;
			width: 100%;
		}
	}
	.last-child {
		@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
					padding-right: 0 !important;
		}
	}
	
`;
function ChooseHealth({id}) {
  return (
    <Wrapper id={id}>
      <img className="absolute flower1" src={flower1} alt="flower1" />
      <img className="absolute flower2" src={flower2} alt="flower2" />
      <Container>
        <Grid container spacing={10 }>
          <Grid item xs={12} sm={4} className="lhs">
            <img src={health} alt="health" />
            <p>Choose Health</p>
          </Grid>
          <Grid item xs={12} sm={7} className="with-img">
            <SquareImg bg="img1" border1="gray" border2="blue"/>
          </Grid>
        </Grid>
        <Grid container spacing={7} className="with-text">
          <Grid item xs={12} sm={4} className="mb-15sm">
            <h4 className="heading">We assess your health</h4>
            <p className="detail">
              We conduct preliminary test using your Body Mass Index as starting
              point. We then build a wholistic profile of your health and
              identify any pre-existing conditions or hereditary conditions like
              Diabetes or others
            </p>
          </Grid>
          <Grid item xs={12} sm={4} className="mb-15sm">
            <h4 className="heading">We analyze</h4>
            <p className="detail">
              A general assessment of your Blood Pressure, Cholesterol level,
              Family history to check your Predisposition to hereditary
              illnesses, and any Existing conditions. Answers to health
              questions are analyzed and compiled into an individual wellness
              report which scores and ranks the Employee’s current good habit as
              well as their Health risks.
            </p>
          </Grid>
          <Grid item xs={12} sm={4} className='last-child mb-15sm'>
            <h4 className="heading">We recommend & track</h4>
            <p className="detail">
              Having identified the pre-existing conditions and possible
              physical and mental risks, we make recommendations and help you
              create health goals on what can be done to improve your health.
            </p>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

ChooseHealth.propTypes = {
	id:PropTypes.string,
};

export default ChooseHealth;
