/*eslint-disable */
import React from "react";
import styled from "styled-components";
import AppLayout from "../components/layouts/appLayout/AppLayout";
import Header from "../components/layouts/appLayout/header/index2";
import team1 from "../assets/testimony3.png";
import linkedin from "../assets/linkedIn.png";
import mail from "../assets/mail.png";
import twitter from "../assets/twitter.png";

const Wrapper = styled.div`
  padding-top: 10rem;
  margin-bottom: 150px;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    margin-bottom: 70px;
  }
  .head {
    width: 41%;
    margin: auto auto 40px auto;
    text-align: center;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 80%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: 100%;
      padding: 0 25px;
    }
  }
  .head h1 {
    font-size: 4rem;
    position: relative;
    line-height: 7.1rem;
    font-weight: 400;
    margin-bottom: 20px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: 3rem;
    }
  }
  .head h1::after {
    content: " ";
    position: absolute;
    top: 82%;
    width: 50px;
    height: 5px;
    background-color: ${(props) => props.theme.color.text_08};
    border-radius: 14px;
    left: 45%;
  }
  .team {
    padding: 7rem 0 10rem 0rem;
    height: 500px;
    position: relative;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      height: 400px;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      height: 345px;
    }
  }

  .blue-bg {
    background-color: rgba(46, 196, 182, 0.05);
    height: 100%;
  }
  .member {
    text-align: center;
    position: absolute;
    .img {
      background-image: url(${team1});
    }
  }
  .one {
    top: 0;
    left: 15%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      left: 5%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      top: 10%;
    }
   
  }

  .two {
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      top: 10%;
    }
 
  }
  .three {
    top: 0;
    right: 15%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      right: 5%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      top: 10%;
    }
 
  }
  .four {
    right: 58%;
    bottom: -83px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      bottom: 0;
      right: 62%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      bottom: 0;
      right: 56%;
    }
 
  }
  .five {
    right: 27%;
    bottom: -83px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      bottom: 0;
      right: 23%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      right: 20%;
    }
   
  }
  .member .img {
    display: inline-block;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 100px;
      height: 100px;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: 70px;
      height: 70px;
    }
  }
  .text {
    opacity: 0.8;
    font-weight: 400;
  }
  .name {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: 1.5rem;
    }
  }
  .role {
    font-size: 1.5rem;
    line-height: 0.2rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: 1.3rem;
    }
  }
  .social {
    margin-top: 15px;
    img {
      width: auto;
      height: 20px;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        height: 15px;
      }
    }
    .pd {
      margin: 0 15px;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        margin: 0 5px;
      }
    }
  }
`;
function Team(props) {
  const toPillar = (e) => {
		const anchor = document.querySelector('#pillar')
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
	const toAbout = (e) => {
		const anchor = document.querySelector('#aboutUs')
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
  return (
    <AppLayout header={<Header />} >
      <Wrapper>
        <div className="head">
          <h1>Our TEAM</h1>
          <p>
            Out technology allows unto accurately evaluate your fitness Score,
            Metabolic Rate, Hydration Levels, Body Fat, Water Retention & Muscle
            Mass. This gives us clear insight into how your body is performing
          </p>
        </div>

        <div className="team">
          <div className="blue-bg"></div>
          <div className="member one">
            <div className="img"></div>
            <h2 className="name text">Alice Cooper</h2>
            <h3 className="role text">Founder CEO</h3>
            <div className="social flex">
              <img src={linkedin} alt="linkedin" />
              <img className="pd" src={twitter} alt="twitter" />
              <img src={mail} alt="mail" />
            </div>
          </div>
          <div className="member two">
            <div className="img"></div>
            <h2 className="name text">Craig Floss</h2>
            <h3 className="role text">Director</h3>
            <div className="social flex">
              <img src={linkedin} alt="linkedin" />
              <img className="pd" src={twitter} alt="twitter" />
              <img src={mail} alt="mail" />
            </div>
          </div>
          <div className="member three">
            <div className="img"></div>
            <h2 className="name text">Alice Cooper</h2>
            <h3 className="role text">Founder CEO</h3>
            <div className="social flex">
              <img src={linkedin} alt="linkedin" />
              <img className="pd" src={twitter} alt="twitter" />
              <img src={mail} alt="mail" />
            </div>
          </div>
          <div className="member four">
            <div className="img"></div>
            <h2 className="name text">Alice Cooper</h2>
            <h3 className="role text">Founder CEO</h3>
            <div className="social flex">
              <img src={linkedin} alt="linkedin" />
              <img className="pd" src={twitter} alt="twitter" />
              <img src={mail} alt="mail" />
            </div>
          </div>
          <div className="member five">
            <div className="img"></div>
            <h2 className="name text">Debra Mills</h2>
            <h3 className="role text">Co-Founder</h3>
            <div className="social flex">
              <img src={linkedin} alt="linkedin" />
              <img className="pd" src={twitter} alt="twitter" />
              <img src={mail} alt="mail" />
            </div>
          </div>
        </div>
      </Wrapper>
    </AppLayout>
  );
}


export default Team;
