/*eslint-disable */
import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Container from "../common/Container";
import flower1 from "../../assets/img/flower_1.png";
import flower2 from "../../assets/img/flower_2.png";
import smileGirl from "../../assets/smileGirl.png";
import runGirl from "../../assets/girlRunning.png";
import boy from "../../assets/boyStretch.png";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: relative;
  padding: 100px 0 170px 0;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    padding: 3rem 0;
  }
  .MuiGrid-spacing-xs-7 {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .MuiGrid-spacing-xs-10 {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 100%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      margin: 0;
    }
  }
  .MuiGrid-spacing-xs-10 > .MuiGrid-item {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding: 0 0 20px 0px;
    }
  }
  .absolute {
    position: absolute;
  }
  .grid-right {
    position: relative;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .img {
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        position: relative;
        top: auto;
        left: auto;
        margin-bottom: 5px;
        height: 200px;
        width: 200px;
      }
    }
  }
  .flower1 {
    bottom: -61px;
    height: 350px;
  }
  .flower2 {
    right: 0;
    height: 350px;
    top: 0;
  }
  h1 {
    font-size: 4rem;
    position: relative;
    line-height: 7.1rem;
    margin-bottom: 3rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: 3rem;
    }
  }
  h1::after {
    content: " ";
    position: absolute;
    top: 82%;
    width: 32%;
    height: 5px;
    background-color: ${(props) => props.theme.color.text_08};
    border-radius: 1.4rem;
    left: 1.2rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 111px;
    }
  }

  p {
    font-size: 19px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: 1.5rem;
    }
  }
  .smile-girl {
    background-image: url(${smileGirl});
    z-index: 5;
    width: 234px;
    height: 248px;
    left: 70px;
  }
  .smile-girl:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .boy {
    background-image: url(${boy});
    z-index: 3;
    top: 305px;
    height: 260px;
    width: 260px;
    left: 50px;
  }
  .boy:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  .run-girl {
    background-image: url(${runGirl});
    height: 260px;
    width: 260px;
    z-index: 4;
    right: 16px;
    top: 43%;
  }
  .run-girl:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  .border {
    border: 3px solid ${(props) => props.theme.color.text_03};
    border-radius: 34px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .yellow {
    background-color: rgba(252, 184, 19, 0.9);
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: none;
    }
  }
  .small-yellow {
    z-index: 1;
    top: 63%;
    width: 40%;
    height: 38%;
    transform: rotate(45deg);
  }
  .big-yellow {
    z-index: 2;
    top: 114px;
    height: 338px;
    right: 104px;
    width: 51%;
    transform: rotate(10deg);
  }
`;
function AboutUs({id}) {
  return (
    <Wrapper id={id}>
      <img className="absolute flower1" src={flower1} alt="flower1" />
      <img className="absolute flower2" src={flower2} alt="flower2" />
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <h1>About Us</h1>
            <p>
              Choose Life is a digital wellness platform empowering both
              individuals and organizations with the data, tools and guides, to
              improve their physical and mental wellbeing. Using innovative
              technology Choose Life gives intelligent verifiable analytics and
              progress on wellness performance
            </p>
            <br />
            <p>
              Choose Life is driving Wellness into corporate culture and
              individuals lifestyles
            </p>
          </Grid>
          <Grid item xs={12} sm={6} className="grid-right">
            <div className="border img smile-girl absolute"></div>
            <div className="border img run-girl absolute"></div>
            <div className="border img boy absolute"></div>
            <div className="border yellow small-yellow absolute"></div>
            <div className="border yellow big-yellow absolute"></div>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

AboutUs.propTypes = {
  id: PropTypes.string,
};

export default AboutUs;
