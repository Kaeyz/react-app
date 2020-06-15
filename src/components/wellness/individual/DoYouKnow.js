// modules
import React from "react";
import styled from "styled-components";
import Container from "../../common/Container";
import { Link } from "react-router-dom";
import arrow from "../../../assets/Arrow1.png";
import img from "../../../assets/undraw_medicine.svg";

const Wrapper = styled.div`

  .flexy {
    flex-wrap: wrap;
    justify-content: space-between;
	align-items: center;
	padding: 142px 0;
	
    .leadInfo {
      flex-direction: column;
      align-items: end;
      flex-direction: column-reverse;
      height: 32.7rem;
      max-width: 100%;
	  justify-content: space-between;
	  
      .linkSpan1 {
        font-size: 4.1rem;
        line-height: 6.4rem;
        color: ${(props) => props.theme.color.text_01};
        text-decoration-line: underline;
        margin-right: 2.5rem;
      }
    }
  }
  .leaderBg {
    background-image: url(${img});
    width: 38.9rem;
    height: 27.6rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  h1 {
    width: 52.7rem;
    max-width: 100%;
    font-size: 72px;
    line-height: 86px;
    color: ${(props) => props.theme.color.text_01};
    margin-bottom: 2.9rem;
  }
  p {
    font-size: 14px;
line-height: 24px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.text_02};
  }
`;

export default function DoYouKnow() {
  return (
    <Wrapper>
      <Container>
        <div className="flexy flex">
          <div className="flex leadInfo">
            <div style={{ maxWidth: "100%" }}>
              <h1>Did you know?</h1>
              <p>A lack of exercise now causes as many deaths as smoking.</p>
            </div>
            <div>
              <Link to="../pages/About.js">
                <span className="linkSpan1">See Fitness</span>
                <span>
                  {" "}
                  <img src={arrow} alt="arrow" className="arrow" />
                </span>{" "}
              </Link>
            </div>
          </div>
          <div className="leaderBg"></div>
        </div>
      </Container>
    </Wrapper>
  );
}

DoYouKnow.propTypes = {};
