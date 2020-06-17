// modules
import React from "react";
import styled from "styled-components";
import square from "../../assets/square.svg";
import triangle from "../../assets/triangle.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 1058px;
  margin: 12rem auto;
  h3 {
    font-size: 3.8rem;
    line-height: 4.8rem;
    color: #1d1d1d;
  }
  h2 {
    font-size: 3rem;
    line-height: 3.2rem;
    color: #1d1d1d;
    margin: 5.7rem 0 1.8rem 0;
  }
  p {
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-bottom: 1.36rem;
	color: #606161;
	 
  }
  
  .hover-link {
    color: #2ec4b6;
    &:hover {
      color: #fcb813;
      transition: 0.2s;
    }
  }
  .grid {
    display: grid;
    padding: 4.3rem 2.7rem 0 0;
    counter-reset: grid-items;
    position: relative;
    grid-template-columns: repeat(auto-fill, minmax(49.1rem, 1fr));
    .grid__item {
	  counter-increment: grid-item;
	  width: 47.1rem;
	max-width:100%;
    }
  }
`;

export default function WellnessInfo() {
  return (
    <Wrapper>
      <h3>Putting Wellness first</h3>
      <div class="grid grid--auto-fill" data-keyword="auto-fill">
        <div class="grid__item">
          <img src={square} alt="sqaure" className="square" />
          <div className="square-info info">
            <h2>In the Workplace</h2>
            <p>
              The Wellness Program exists through a digital platform that helps
              organizations track corporate wellness goals, statistics, employee
              health, and fitness.
            </p>
            <Link className="hover-link" to="../pages/About.js">
              Read up more
            </Link>
          </div>
        </div>
        <div class="grid__item">
          <img src={triangle} alt="sqaure" className="triangle" />
          <div className="triangle-info info">
            <h2>In your Home</h2>
            <p>
              We assess you periodically to understand your health, then we make
              recommendations on how to live, eat, and work to help you maximize
              your zenith.
            </p>
            <Link className="hover-link" to="../pages/About.js">
              Read up more
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

WellnessInfo.propTypes = {
  //TODO: Wellness info prop types goes here
};
