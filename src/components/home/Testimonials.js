/*eslint-disable */
import React, { Component } from "react";
import styled from "styled-components";
import { Paper } from "@material-ui/core";
import Container from "../common/Container";
import img from "../../assets/testimony1.png";
import img2 from "../../assets/testimony2.png";
import img3 from "../../assets/testimony3.png";
import img4 from "../../assets/testimony4.png";
import img5 from "../../assets/testimony5.png";
import img6 from "../../assets/testimony6.png";
import graystar from "../../assets/graystar.jpg";
import yellowstar from "../../assets/yellowstar.png";

const Wrapper = styled.div`
  padding: 4rem 0 6rem 0;
  text-align: center;

  h1.heading {
    font-size: 35px;
    position: relative;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  h1.heading::after {
    content: " ";
    position: absolute;
    top: 82%;
    width: 5%;
    height: 5px;
    background-color: ${(props) => props.theme.color.brand_04};
    border-radius: 14px;
    left: 48%;
  }
  .paper {
    padding: 3rem 8rem;
    width: 85%;
    border-radius: 15px;
    margin: auto;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding: 30px;
      width: 100%;
    }
  }
  .dp,
  .switch {
    height: 65px;
    display: inline-block;
    width: 65px;
    margin-bottom: 2rem;
  }
  .switch {
    position: absolute;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      position: relative;
    }
  }
  .switch .sm {
    height: 60px;
    width: 60px;
  }
  .md {
    height: 85px;
    width: 85px;
  }
  .bg {
    width: 110px;
    height: 110px;
  }
  .dp img,
  .switch img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .switch img {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .title {
    font-size: 2.5rem;
    font-weight: 600;
    opacity: 0.8;
  }
  .details {
    line-height: 2.5rem;
    margin-bottom: 3rem;
  }
  .name {
    font-size: 1.7rem;
    line-height: 0.9rem;
  }
  .star {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  .testifiers {
    position: relative;
  }
  .testifiers .images {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  .star img {
    width: 13px;
    height: 13px;
    margin-right: 5px;
  }
  .graystar {
    margin-right: 0;
  }
  .gridy {
    display: grid;
    grid-template-columns: 19% 60% 19%;
    grid-gap: 2%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      grid-template-columns: 1fr;
    }
  }
  .grid1 .md {
    right: 0;
    bottom: 20px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      bottom: auto;
    }
  }
  .grid1 .sm {
    left: 11px;
    top: 189px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      left: auto;
      top: auto;
    }
  }
  .grid1 .bg {
    top: 20px;
    right: 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      top: auto;
    }
  }
  .grid3 .sm {
    left: 0;
    bottom: 40px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      bottom: auto;
    }
  }
  .grid3 .md {
    top: 0;
    right: 50%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      right: auto;
    }
  }
  .grid3 .bg {
    top: 32%;
    right: 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      top: auto;
    }
  }
`;
class Testimonials extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      dp: img,
      title: "It was a great experience!",
      details:
        "At Choose Life, we understand that what goes into your body Is the most important part of your health. This is why we offer support through personalized nutrition plans and recipe on how to make healthier versions of the	Foods you already love.",
      name: "David Akingbale",
      dept: "Sales Manager, First Bank",
    };

    // Binding this keyword
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
  }

  handleClick() {
    // Changing state
    this.setState({
      dp: img,
      title: "It was a great experience!",
      details:
        "At Choose Life, we understand that what goes into your body Is the most important part of your health. This is why we offer support through personalized nutrition plans and recipe on how to make healthier versions of the	Foods you already love.",
      name: "David Akingbale",
      dept: "Sales Manager, First Bank",
    });
  }
  handleClick2() {
    // Changing state
    this.setState({
      dp: img2,
      title: "Very nice",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Melinda Joe",
      dept: "Graphics Designer, Printivo",
    });
  }
  handleClick3() {
    // Changing state
    this.setState({
      dp: img3,
      title: "Awesome",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Paul Dean",
      dept: "Web Designer, Google",
    });
  }
  handleClick4() {
    // Changing state
    this.setState({
      dp: img4,
      title: "Interesting",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Uche Christinah",
      dept: "Sales Manager, Adios",
    });
  }
  handleClick5() {
    // Changing state
    this.setState({
      dp: img5,
      title: "So so good",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Samuel Olayemi",
      dept: "Software Engineer, Paystack",
    });
  }
  handleClick6() {
    // Changing state
    this.setState({
      dp: img6,
      title: "Satisfied",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Akin Daniels",
      dept: "Manager, First Bank Nigeria",
    });
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <h1 className="heading">Testimonials</h1>
          <div className="gridy">
            <div className="grid1 testifiers">
              <div className="images">
                <div onClick={this.handleClick} className="switch bg">
                  <img src={img} alt="Testifier" />
                </div>
                <div className="switch sm" onClick={this.handleClick3}>
                  <img src={img3} alt="Testifier" />{" "}
                </div>
                <div className="switch md" onClick={this.handleClick2}>
                  <img src={img2} alt="Testifier" />{" "}
                </div>
              </div>
            </div>

            <div className="grid2">
              <Paper elevation={5} className="paper">
                <div className="dp">
                  <img src={this.state.dp} alt="" />
                </div>
                <p className="title">{this.state.title}</p>
                <div className="star">
                  <img src={yellowstar} alt="yellowstar" />
                  <img src={yellowstar} alt="yellowstar" />
                  <img src={yellowstar} alt="yellowstar" />
                  <img src={yellowstar} alt="yellowstar" />
                  <img src={graystar} alt="graystar" className="graystar" />
                </div>
                <p className="details">{this.state.details}</p>
                <div className="info">
                  <p className="name">{this.state.name}</p>
                  <p className="dept">{this.state.dept}</p>
                </div>
              </Paper>
            </div>
            <div className="grid3 testifiers">
              <div className="images">
                <div className="switch md" onClick={this.handleClick4}>
                  <img src={img4} alt="Testifier" />{" "}
                </div>
                <div className="switch bg" onClick={this.handleClick5}>
                  <img src={img5} alt="Testifier" />{" "}
                </div>
                <div className="switch sm" onClick={this.handleClick6}>
                  <img src={img6} alt="Testifier" />{" "}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

export default Testimonials;
