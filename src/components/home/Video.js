import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";

function Video() {
  return (
    <Wrapper2 className="flex curvy">
      <div className="wholeVideoContent">
        <div style={iframe}>
          <div>
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              width="420"
              height="200"
              allowFullScreen
              title="video"
            />
          </div>
        </div>

        <div style={{ width: "390px" }}>
          <h3 style={videoText}>Choosing Wellness</h3>
          <p style={videoTextP}>
            Wellness is a circle. A circle designed to help you achieve
            wholesome balance for you mind, body & soul. We take a scientific
            look at the factors driving stress & strain in your workplace and in
            your private life and we help you find a way out.
          </p>
          <Link style={priLink} className="hover-link" to="../pages/About.js">
            Read up more
          </Link>
          <br />
          <div className="buttons" >
            <Button value="For you" theme="darkGreen" style={{marginRight:"1.3rem"}}>
              Individuals
            </Button>
            <Button value="For Organizations" theme="yellow">
              Companies
            </Button>
          </div>
        </div>
      </div>
    </Wrapper2>
  );
}

const Wrapper2 = styled.div`
  
  height: max-content;
  flex-wrap: wrap;
  padding: 10rem 2rem;

  .wholeVideoContent {
    height: max-content;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

const iframe = {
  background: "#3CBDB2",
  boxShadow: "0px 4px 25px rgba(60, 189, 178, 0.25)",
  justifyContent: "center",
  display: "flex",
  padding: "1rem",
  margin: "2rem",
};
const priLink = {
  fontWeight: 600,
  fontSize: 14,
  lineHeight: "132%",
  textDecorationLine: "underline",
  marginBottom: 20,
  color: "#3CBDB2",
};

const videoText = {
  fontWeight: "bold",
  fontSize: "2.4rem",
  lineHeight: "2.9rem",
  marginBottom: "2.04rem",
  color: "1d1d1d",
};

const videoTextP = {
  color: "#606161",
  fontSize: "1.4rem",
  lineHeight: "2.2rem",
  marginBottom: ".66rem",
};

export default Video;
