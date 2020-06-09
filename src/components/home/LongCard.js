import React from "react";
import hiddenImg from "../../assets/Ellipse31.png";
import hiddenImg1 from "../../assets/Ellipse29.png";
import circle from "../../assets/Ellipse17.png";
import centerFrame from "../../assets/Frame.png";
import irregularImg from "../../assets/Ellipse30.png";
import watch from "../../assets/watch.png";
import Bg1 from "../../assets/heroHome.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";

// import { Link } from "react-router-dom";
// import img from "../../assets/heroHome.png";

function LongCard() {
  return (
    <>
      <Card className="flex theCard">
        <div className="hidden" style={{ left: 0 }}>
          <img src={hiddenImg} alt="hiddenImg" />
        </div>
        <Card1Content style={{ flexDirection: "row-reverse" }}>
          <OppImportance>
            <div className="circular">
              <img src={circle} alt="circular"  />
              <div className="Parentnode Parentnode0">
                <div className="node">
                  <h2 className="flex" style={{marginTop:"-40px"}}>HEALTH</h2>
                </div>
              </div>
              <div className="Parentnode Parentnode1">
                <div className="node">
                <h2 className="flex" style={{marginTop:"40px"}}>FITNESS</h2>

                </div>
              </div>
              <div className="Parentnode Parentnode2">
                <div className="node">
                <h2 className="flex" style={{marginLeft:"-155px"}}>NUTRITION</h2>

                </div>
              </div>
              <div className="Parentnode Parentnode3">
                <div className="node">
                <h2 className="flex" style={{marginRight:"-155px",}}>LIFESTYLE</h2>

                </div>
              </div>
              <div className="centered">
              <img src={centerFrame} alt="center-frame" />

              </div>
            </div>
          </OppImportance>

          <Importance>
            <ImportanceHead style={{ marginBottom: "20.4px" }}>
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
                style={{ marginTop: "19.6px" }}
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
            <ImportanceHead style={{ marginBottom: "20.4px" }}>
              Why Choose Life is important
            </ImportanceHead>
            <ImportanceText>
              Younger and older people are coming down with serious non
              communicable diseases like Hypertension, Diabetes, Obesity and
              Cancer due to personal and workplace related reasons.
            </ImportanceText>
            <Link style={priLink} className="hover-link" to="../pages/About.js">
              Read up more
            </Link>
            <br />
            <ImportanceBtns>
              <Button value="Get started" theme="green">
                {" "}
                Get started
              </Button>
            </ImportanceBtns>
          </Importance>
        </Card1Content>
        <div className="hidden" style={{ right: 0 }}>
          <img src={hiddenImg1} alt="hiddenImg1" />
        </div>
        <div
          className="hidden"
          style={{ zIndex: 1, width: "90%", marginTop: "50px" }}
        >
          <img className="bg-flower" src={Bg1} alt="hiddenImg1" />
        </div>
      </Card>


      {/* thirdcard */}
      <Card className="flex theCard">
                <Card1Content style={{ flexDirection: "row-reverse" }}>
          <OppImportance>
            <div >
              <img src={watch} alt="watch" />
            </div>
          </OppImportance>

          <Importance>
            <ImportanceHead style={{ marginBottom: "20.4px" }}>
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
              <Button
                value="Explore"
                theme="green"
                style={{ marginTop: "19.6px" }}
              >
                {" "}
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

  margin-top: 90px;
  z-index: 5;
 

  .hover-link:hover {
    color: #1d1d1d !important;
    transition: 0.2s;
  }
  .belowCounter {
    font-size: 14px;
    line-height: 17px;
  }
  .counter {
    margin-bottom: 5px;
    font-size: 48px;
    line-height: 58px;
    font-weight: normal;
  }
  .node{
    width: 13.02px;
height: 13.02px;
background: #3CBDB2;
border-radius: 50%;
text-align: center
  }
  .Parentnode{
    width: 22.93px;
    height: 22.93px;
    background: rgba(46, 196, 182, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    
    }
    .node>.flex{
      font-size: 16px;
line-height: 19px;
color: #606161
    }
    .Parentnode0{
      top: -11px;
      left: 47%;
    }
    .Parentnode1{
      bottom: 1px;
    left: 47%;
    }
    .Parentnode2{
      top: 45%;
    left: -9px;
    }
    .Parentnode3{
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
  .irregular,.circular {
    position: relative;
  }
`;
const Importance = styled.div`
  width: 390px;
`;
const ImportanceHead = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 20.4;
  color: 1d1d1d;
`;
const ImportanceBtns = styled.div`
  margin-top: 20px;
`;
const priLink = {
  fontWeight: 600,
  fontSize: 14,
  lineHeight: "132%",
  textDecorationLine: "underline",
  marginBottom: 20,
  color: "#3CBDB2",
};

/* const wholeVideo = {
	background: '#EBF8F7',
	// padding: "82px 183px",
	height: 419.4,
	marginTop: '-30px',
	zIndex: 5,
}; */

const Card1Content = styled.div`
  width: 70%;
  align-items: center;
  // height: 256px;
  display: flex;

  justify-content: space-between;
`;

const OppImportance = styled.div`
  justify-content: center;
  display: flex;
`;

/* const priLink = {
	fontWeight: 600,
	fontSize: 14,
	lineHeight: '132%',
	textDecorationLine: 'underline',
	marginBottom: 20,
	color: '#3CBDB2',
}; */

const ImportanceText = styled.p`
  color: #606161;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 6.6;
`;

export default LongCard;
