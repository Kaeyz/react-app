import React from "react";
import Container from "../../common/Container";
import styled from "styled-components";
import Ellipse31 from "../../../assets/Ellipse31.png";
import Ellipse_31 from "../../../assets/Ellipse_31.png";
import Ellipse32 from "../../../assets/Ellipse32.png";
import RecImg from "../../../assets/care-check-checkup-905874.png";
import Button from "../../common/Button";
import smallImg from "../../../assets/Group.png";

//import PropTypes from 'prop-types';

const Wrapper = styled.div`
  // height: 30rem;
//   border: 2px solid black;
  .left-background {
    background-image: url(${Ellipse31});
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center left;
    background-size: 5%;
  }
  .right-background {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 5%;
  }
  .pink {
    background-image: url(${Ellipse32});
  }
  .green {
    background-image: url(${Ellipse_31});
  }
  .detailImg {
    transform: rotate(-45deg);
    padding: 15px 70px;

    img {
      border-radius: 12px;
    }
  }
  .Rec {
    flex-wrap: wrap;
    padding: 7.7rem 0;
    justify-content: space-between;
  }
  .details {
    width: 50%;
  }
  .RecInfo {
    margin: 2rem 0;
    font-size: 14px;
    line-height: 24px;
    color: ${(props) => props.theme.color.text_02};
  }
  .detailImg {
    min-width: 30rem;
    max-width: 34rem;
    margin-left: 3rem;
    margin-top: 3rem;
  }
  h3 {
    font-size: 30px;
    line-height: 32px;
    color: ${(props) => props.theme.color.text_01};
  }
`;

function Recommendations() {
  return (
    <Wrapper>
      <div className="left-background">
        <div className="right-background pink">
          <Container>
            <div className="Rec flex">
              <div className="detailImg">
                <img src={RecImg} alt="RecImg" />
              </div>
              <div className="details">
                <img src={smallImg} alt="smallImg" />
                <h3>We make recommendations </h3>
                <p className="RecInfo">
                  Having identified the pre-existing conditions and possible
                  physical and mental health risks, we make recommendations and
                  help you create health goals on what can be done to improve
                  your health.
                </p>

                <div>
                  <Button value="Get started" theme="darkGreen">
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Wrapper>
  );
}

Recommendations.propTypes = {};

export default Recommendations;
