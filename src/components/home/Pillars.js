/*eslint-disable */
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fitness from "../../assets/fitness.png";
import health from "../../assets/health.png";
import lifestyle from "../../assets/lifestyle.png";
import nutrition from "../../assets/nutrition.png";

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  color: ${props => props.theme.color.ui_01};
  .grid {
    display: grid;
	grid-template-columns: 1fr 1fr;
	img{
		margin-bottom: 5px;
	}
  }
  .grid .link {
    height: 300px;
    max-height: 350px;
    display: flex;
	color: ${props => props.theme.color.ui_01};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      height: 250px;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      height: 200px;
    }
  }
  .grid .link img{
    height: 130px;
	@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
    height: 85px;
	}
	@media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
    width: 45px;
    height: 60px;
	}
	  }
  .grid .link p{
    font-size: 2.3rem;
	@media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
		font-size: 2em;
	}
  }
  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    line-height: 5rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: 2.5rem;
      line-height: 3.5rem;
      width: 100%;
    }
  }
  p{
	font-size: 3rem;
  }
  .lemon {
    background-color: ${props => props.theme.color.ui_10};
  }
  .orange {
    background-color: ${props => props.theme.color.brand_01};
  }
  .blue {
    background-color: ${props => props.theme.color.brand_02};
  }
  .yellow {
    background-color: ${(props) => props.theme.color.text_08};
  }
`;
function Pillars({toHealth, toLifestyle, toFitness, toNutrition, id}) {
  return (
    <Wrapper id={id}>
      <h3>
        Choose Life
        <br />
        Pillars
      </h3>
      <div className="grid">
        <Link className="blue link" onClick={toHealth}>
          <img src={health} alt="health" />
          <p>Health</p>
        </Link>
        <Link className="yellow link" onClick={toLifestyle}>
          <img src={lifestyle} alt="lifestyle" />
          <p>Lifestyle</p>
        </Link>
      </div>
      <div className="grid">
        <Link className="orange link" onClick={toFitness}>
          <img src={fitness} alt="fitness" />
          <p>Fitness</p>
        </Link>
        <Link className="lemon link" onClick={toNutrition}>
          <img src={nutrition} alt="nutrition" />
          <p>Nutrition</p>
        </Link>
      </div>
    </Wrapper>
  );
}

Pillars.propTypes = {
  toHealth: PropTypes.func,
  toLifestyle: PropTypes.func,
  toFitness: PropTypes.func,
  toNutrition: PropTypes.func,
  id: PropTypes.string,
};

export default Pillars;
