import React from "react";
import Container from "../../common/Container";
import styled from "styled-components";
import Button from "../../common/Button";
import trackImg from "../../../assets/nutrition-rs.png";
//import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background: #cbf3f0;
  padding: 4.3rem 0;
  .tracker {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .trackInfo {
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
  .details {
    width: 55%;
  }
  h3 {
    font-size: 30px;
    line-height: 32px;
    color: ${(props) => props.theme.color.text_01};
  }
`;

function HealthTrackCard() {
  return (
    <Wrapper>
      <Container>
        <div className="tracker" style={{ flexDirection: "row-reverse" }}>
          <div className="detailImg">
            <img src={trackImg} alt="trackImg" />
          </div>
          <div className="details">
            <h3>We track your health </h3>
            <p className="trackInfo">
              Are you stressed? Are you unhappy? How can we make your life or
              you more productive and satisfied? Are you living a life of
              balance and good adjustment? We ask the questions that help us
              make you happier, healthier, and simply, the best version of
              yourself.
            </p>

            <div>
              <Button value="Get started" theme="darkGreen">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

HealthTrackCard.propTypes = {};

export default HealthTrackCard;
