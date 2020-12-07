/*eslint-disable */
import React from "react";
import CarouselHero from "../components/home/CarouselHero";
import Header from "../components/layouts/appLayout/header";
import logo from "../assets/logo.png";
import flower from "../assets/greenflower.png";
import blue from "../assets/wellnessNav/healthIsActive.svg";
import orange from "../assets/wellnessNav/lifestyleIsActive.svg";
import green from "../assets/wellnessNav/nutritionIsActive.svg";
import yellow from "../assets/wellnessNav/fitnessIsActive.svg";
import AppLayout from "../components/layouts/appLayout/AppLayout";
import { Link } from "react-router-dom";
import callIcon from "../assets/phoneWhite.png";
import atIcon from "../assets/mailWhite.png";
import addressIcon from "../assets/addressWhite.png";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Button from "../components/common/Button";

const Wrapper = styled.div`
  .hero {
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://res.cloudinary.com/dsqnyciqg/image/upload/v1607309846/chooseLife/contact1_zfmsqp.png");
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .text-content {
    text-align: center;
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.color.text_03};
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 80%;
      top: 50%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      top: 57%;
    }
  }

  .head {
    margin: auto;
    text-align: center;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 80%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: 100%;
    }
  }
  .head .or {
    margin: 20px 0;
  }
  .head h1 {
    font-size: 27px;
        position: relative;
    line-height: 7.1rem;
    font-weight: bold;
    margin-bottom: 20px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: 3rem;
    }
  }

  .head h1::after,
  contact-form h1::after {
    content: " ";
    position: absolute;
    top: 82%;
    width: 50px;
    height: 5px;
    background-color: ${(props) => props.theme.color.text_08};
    border-radius: 14px;
    left: 45%;
  }
  .head p {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.8rem;
  }
  .text-content button {
    padding: 14px 40px;
    border-radius: 30px;
    outline: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 2rem;
   
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding: 10px 30px;
      font-size: 1.5rem;
    }
    .link {
      color: ${(props) => props.theme.color.text_03};
      &:hover {
        text-decoration: underline;
        transition: 0.2s;
      }
    }
  }
  .contact-form .content {
    padding: 40px 0;
    width: 70%;
    margin: auto;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 80%;
    }
  }
  .gridy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      grid-template-columns: 1fr;
    }
  }
  .contact-info {
    color: ${(props) => props.theme.color.ui_01};
    position: relative;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://res.cloudinary.com/dsqnyciqg/image/upload/v1607309853/chooseLife/contact2_eccs5p.png");
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        order: 2;
      }
    .content{
      width: 90%;
      padding: 0px 40px;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      justify-content: center;
      margin: auto;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        padding: 20px;
      }
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        padding: 20px 0;
      }
      
    }
    }
    .header{
      justify-content: start;
    }
    .header h1 {
      font-weight: normal;
      margin-left: 15px;
      line-height: 34px;
      font-size: 34px;
    }
    .header .logo {
      height: 75px;
    }
  }
  .contact-form {
    position: relative;
    
  }
  .empty{
    background-color:${(props) => props.theme.color.ui_01};
    height: 4px;
    width: 200px;
    margin: 5px 0 0 7px;
    border-radius: 5px;
  }
  .socials{
    margin: 20px 0 50px 0;
  }
  .with-icon{
    color:${(props) => props.theme.color.ui_01};
    justify-content: flex-start;
    margin-bottom: 5px;
   .icons{
      margin-right: 20px;
      height: 20px;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        margin-right: 10px;
      }
    }
  }
  .address{
    align-items: flex-start;
    span.text{
      margin-left: 10px;
    }
    img{
      margin-right: 20px;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        margin-right: 20px;
      }
    }
  }
  .lower-icons{
    justify-content: flex-start;
    margin-left: -25px;
    flex-wrap: wrap;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      margin-left: 0px;
    }
  }
  .lower-icons img{
    margin-right: 20px;
    width: 105px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 85px;
                }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: 58px;
      margin-right: 10px;
    }
  }
  .lower-icons .fitness{
    width: 79px;
     vertical-align: super;
     @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 59px;
    }
     @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: 45px;
    }
  }
  .absolute{
    position: absolute;
  }
  .flower{
    height: 225px;
  }
  .flower-left{
    bottom: 30px;
  }
  .flower-right{
    transform: scaleX(-1);
    right: 0;
    top: 30px;
  }
  .form{
    margin-top: 40px;
  }
  label{
    font-size: 1.7rem;
  }
  
  textarea, input{
    width: 100%;
    outline: none;
    padding: 10px 5px;
    border: 1px solid rgba(0,0,0,.5);
  }
  input:focus{
    border: 1px solid ${(props) => props.theme.color.text_08};
  }
.form .button{
  width: 100% !important;
}
`;
const ContactUs = () => {
  return (
    <AppLayout header={<Header />}>
      <Wrapper>
        <div class="hero">
          <div className="text-content">
            <div className="head">
              <h1>Get In Touch</h1>
              <p>
                Take control of your fitness goals. Evaluate your fitness, score
                metabolic rates,check your hydration levels, body fat, water
                retension and muscle mass. It will help us help you understand
                your body and how it’s performing.
              </p>
              <p className="or">or</p>
            </div>
            <button>
              <Link className="link" to="/onboarding/company">
                Get Started
              </Link>
            </button>
          </div>
        </div>
        <div className="gridy">
          <div className="contact-info">
            <div className="content flex">
              <div className="header flex">
                <img className="logo" src={logo} alt="logo" />
                <h1>Choose Life</h1>
              </div>
              <div className="empty"></div>
              <div className="socials">
                <div className="with-icon flex">
                  <span className="icon">
                    <img className="icons" src={callIcon} alt="callIcon" />
                  </span>
                  0802 648 4048, 0802 648 3318
                </div>
                <a
                  className="with-icon"
                  target="_blank"
                  href="mailto:chooselife@fitnessfairng.com"
                >
                  <span className="icon">
                    <img className="icons" src={atIcon} alt="atIcon" />
                  </span>
                  chooselife@fitnessfairng.com
                </a>
                <div className="with-icon address flex">
                  <span className="icon ">
                    <img
                      className="icons addressIcon"
                      src={addressIcon}
                      alt="addressIcon"
                    />
                  </span>
                  <span className="text">
                    {" "}
                    Shop 2, Banana Island Shopping Complex, Banana Island,
                    Ikoyi-Lagos,Nigeria
                  </span>
                </div>
              </div>
              <div className="lower-icons flex">
                <img src={blue} alt="health" />

                <img className="fitness" src={orange} alt="fitness" />

                <img src={green} alt="nutrition" />

                <img src={yellow} alt="lifestyle" />
              </div>
            </div>
          </div>
          <div className="contact-form">
            <img
              class="absolute flower flower-left"
              src={flower}
              alt="flower"
            />
            <img
              class="absolute flower flower-right"
              src={flower}
              alt="flower"
            />
            <div className="content">
              <div className="head">
                <h1>Send a Message</h1>
              </div>
              <form className="form">
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <div className="mt">
                      <label for="firstName">First Name</label>{" "}
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="mt">
                      <label for="lastName">Last Name</label>{" "}
                    </div>
                    <input type="text" id="lastName" name="lastName" required />
                  </Grid>
                  <Grid item xs={12}>
                    <div className="mt">
                      <label for="companyName">Company Name</label>
                    </div>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="mt">
                      {" "}
                      <label for="email">Email Address</label>
                    </div>
                    <input type="email" id="email" name="email" required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="mt">
                      {" "}
                      <label for="phone">Phone</label>{" "}
                    </div>
                    <input type="tel" id="phone" name="phone" required />
                  </Grid>
                  <Grid item xs={12}>
                    <div className="mt">
                      <label for="message">Message</label>
                    </div>
                    <textarea id="message" name="message" rows="8" required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button theme="deepYellowBtn">Submit</Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </AppLayout>
  );
};

export default ContactUs;
