// modules
import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import hug from "../../assets/shalom-mwenesi.png";

const Wrapper = styled.div`
  max-width: 1058px;
  margin: auto;
  .hero-image {
    background: url(${hug});
    height: 51.5rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .gradient {
      background: linear-gradient(
        90deg,
        #2f2e41 1.61%,
        rgba(196, 196, 196, 0) 43.64%
      );
	  height: 51.5rem;
	  opacity: 0.9;
	  position: relative;
    }

    .hero-text {
      width: 83%;
      color: #ffffff;
    
      position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
      
      h1 {
        font-size: 7.2rem;
        line-height: 8.6rem;
        width: 65.6rem;
        max-width: 100%;
      }
      p {
        font-size: 1.4rem;
        line-height: 2.4rem;
        width: 44.1rem;
        margin: .6rem 0;
      }
    }
  }
`;

export default function OfficerMessage() {
  return (
    <Wrapper>
      <div className="hero-image">
        <div className="gradient">
          <div className="hero-text">
            <h1>A letter from our Chief Wellness Officer</h1>
            <p>
              Read more on our commitment to driving Wellness engagement both in
              the workplace and in our lives.
            </p>
            <Button value="Read" theme="yellow">
              Read
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

OfficerMessage.propTypes = {
  //TODO: Wellness info prop types goes here
};
