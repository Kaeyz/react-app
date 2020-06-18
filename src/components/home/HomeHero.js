import React, { Component } from "react";
import Button from "../common/Button";
import styled from "styled-components";
import img from "../../assets/img/heroHome.svg";
import flower1 from "../../assets/img/flower_1.svg";
import flower2 from "../../assets/img/flower_2.svg";
import umbrella from "../../assets/img/umbrella.svg";
import Container from "../common/Container";
import VideoCarousel from "./VideoCarousel";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-image: url(${img});
  height: max-content;
  width: 100%;
  display: flex;
  background-position: top;
  background-repeat: no-repeat;

  .flower1 {
    background-image: url(${flower1});
    height: 50%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center left;
    background-size: 10%;
  }
  .flower2 {
    height: 100%;
    width: 100%;
    background-image: url(${flower2});
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 15%;
  }
  .hero {
    padding: 7rem 0rem;
    display: flex;
    justify-content: space-between;
  }

  .heroBanner {
    display: grid;
    align-items: center;
    min-height: 80%;
    width: 30%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: none;
    }
  }
  .heroText {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .buttons {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 1rem;
  }
  .bigText {
    font-size: 4.5vw;
    line-height: 5vw;
  }
  .smallText {
    font-size: 1.0vw;
    line-height: 5vw;
  }
`;

class HomeHero extends Component {
  render() {
    return (
      <Wrapper>
        <div className="flower1">
          <div className="flower2">
            <Container>
              <div className="hero">
                <div className="heroText">
                  <div>
                    <h1 className="bigText">Wellness is the gift</h1>
                    <h1 className="bigText">you give yourself.</h1>
                    <p className="smallText">
                      Empower yourself with the knowledge and opportunity to
                      live the best life possible.{" "}
                    </p>
                  </div>
                  <div className="buttons">
                    <Link to="/onboarding/individual">
                      <Button value="For you" theme="darkGreen">
                        Individuals
                      </Button>
                    </Link>
                    <Link to="/onboarding/company">
                      <Button value="For Organizations" theme="yellow">
                        Companies
                      </Button>
                    </Link>
                  </div>
                  <p className="smallText">SUPPORTED BY</p>
                </div>
                <div className="heroBanner">
                  <img src={umbrella} alt="heroBanner" />
                </div>
              </div>
              <VideoCarousel />
            </Container>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default HomeHero;
