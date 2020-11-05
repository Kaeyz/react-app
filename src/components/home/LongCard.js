/*eslint-disable */

import React from "react";
import hiddenImg from "../../assets/Ellipse31.svg";
import hiddenImg1 from "../../assets/Ellipse29.svg";
import irregularImg from "../../assets/Ellipse30.svg";
import watch from "../../assets/watch.svg";
import Bg1 from "../../assets/heroHome.svg";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import CircleCard from "../common/CircleCard";

function LongCard() {
  return (
    <>
      <Card className="flex theCard">
        <div className="hidden" style={{ left: 0 }}>
          <img src={hiddenImg} alt="hiddenImg" />
        </div>
        <Card1Content style={{ flexDirection: "row-reverse" }}>
          <CircleCard />
          <Importance>
            <ImportanceHead style={{ marginBottom: "2.04rem" }}>
              We ask the meaningful questions
            </ImportanceHead>
            <ImportanceText>
              Are you stressed? Are you unhappy? How can we make your life or
              you more productive and satisfied? Are you living a life of
              balance and good adjustment? We ask the questions that help us
              make you happier, healthier, and simply, the best version of
              yourself.
            </ImportanceText>

            <ImportanceBtns>
              <Button
                value="Explore"
                theme="green"
                style={{ marginTop: "1.96rem" }}
              >
                {" "}
                Explore
              </Button>
            </ImportanceBtns>
          </Importance>
        </Card1Content>
      </Card>

      {/* secondcard */}
      <Card className="flex theCard">
        <Card1Content style={{ zIndex: 2 }}>
          <OppImportance>
            <div className="irregular">
              <img src={irregularImg} alt="hiddenImg1" />
              <div className="centered">
                <h3 className="counter">45,000+</h3>
                <h4 className="belowCounter">
                  Workplace related deaths in 2019 alone
                </h4>
              </div>
            </div>
          </OppImportance>

          <Importance>
            <ImportanceHead style={{ marginBottom: "2.04rem" }}>
              Why Choose Life is important
            </ImportanceHead>
            <ImportanceText>
              Younger and older people are coming down with serious non
              communicable diseases like Hypertension, Diabetes, Obesity and
              Cancer due to personal and workplace related reasons.
            </ImportanceText>

            <ImportanceBtns>
              <Link to="/onboarding/individual">
                <Button value="Get started" theme="yellow">
                  {" "}
                  Get started
                </Button>
              </Link>
            </ImportanceBtns>
          </Importance>
        </Card1Content>
        <div className="hidden" style={{ right: 0 }}>
          <img src={hiddenImg1} alt="hiddenImg1" />
        </div>
        <div
          className="hidden"
          style={{ zIndex: 1, width: "90%", marginTop: "5rem" }}
        >
          <img className="bg-flower" src={Bg1} alt="hiddenImg1" />
        </div>
      </Card>

      {/* thirdcard */}
      <Card
        className="flex theCard"
        style={{ background: "#CBF3F0", padding: "5.9rem 0" }}
      >
        <Card1Content style={{ flexDirection: "row-reverse" }}>
          <OppImportance>
            <div>
              <img src={watch} alt="watch" />
            </div>
          </OppImportance>

          <Importance>
            <ImportanceHead style={{ marginBottom: "2.04rem" }}>
              The Sooner, The Better
            </ImportanceHead>
            <ImportanceText>
              Like with all problems, early detection is key in solving some of
              the challenges life may throw your way. No matter what age you
              are, it is important you are up-to-date on what is happening with
              your physical and mental wellbeing. Early detection goes a long
              way.
            </ImportanceText>

            <ImportanceBtns>
              <Button value="Explore" theme="darkGreen">
                Explore
              </Button>
            </ImportanceBtns>
          </Importance>
        </Card1Content>
      </Card>
    </>
  );
}

const Card = styled.section`
  margin-top: 9rem;
  z-index: 5;

  .hover-link:hover {
    color: #1d1d1d !important;
    transition: 0.2s;
  }
  .belowCounter {
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
  .counter {
    margin-bottom: 0.5rem;
    font-size: 4.8rem;
    line-height: 5.8rem;
    font-weight: normal;
  }
  .node {
    width: 1.302rem;
    height: 1.302rem;
    background: #3cbdb2;
    border-radius: 50%;
    text-align: center;
  }
  .Parentnode {
    width: 2.293rem;
    height: 2.293rem;
    background: rgba(46, 196, 182, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
  }
  .node > .flex {
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #606161;
  }
  .Parentnode0 {
    top: -1.1rem;
    left: 47%;
  }
  .Parentnode1 {
    bottom: 0.1rem;
    left: 47%;
  }
  .Parentnode2 {
    top: 45%;
    left: -0.9rem;
  }
  .Parentnode3 {
    top: 45%;
    left: 96%;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #1d1d1d;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .hidden {
    position: absolute;
  }

  .bg-flower {
    opacity: 0.5;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .irregular,
  .circular {
    position: relative;
  }
`;
const Importance = styled.div`
  width: 39rem;
`;
const ImportanceHead = styled.h3`
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 2.9rem;
  margin-bottom: 2.04rem;
  color: 1d1d1d;
`;
const ImportanceBtns = styled.div`
  margin-top: 2rem;
`;

const Card1Content = styled.div`
  width: 70%;
  align-items: center;
  // height: 25.6rem;
  display: flex;

  justify-content: space-between;
`;

const OppImportance = styled.div`
  justify-content: center;
  display: flex;
`;

const ImportanceText = styled.p`
  color: #606161;
  font-size: 1.4rem;
  line-height: 2.2rem;
  margin-bottom: 0.66rem;
`;

export default LongCard;
