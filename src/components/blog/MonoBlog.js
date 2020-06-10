// modules
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import blogBg from "../../assets/check-up-dentist-doc.png";

//import PropTypes from 'prop-types';

const Wrapper = styled.div`
  /* blog css styling goes here */
  .blogcard-bg {
    width: 363px;
    height: 224px;
    background-size: contain;
    background: url(${blogBg});
    overflow: hidden;
  }
  .blogcard {
    width: 363px;
    min-height: 447px;
    background: rgba(0, 0, 0, 0.03);
    overflow: hidden;
  }
  .blogcard-text {
    padding: 33px 21px;
    text-align: left;
    h2 {
      font-size: 23px;
      line-height: 28px;
      color: #606161;
    }
    p,
    .test-link {
      font-size: 14px;
      line-height: 132%;
      color: #606161;
    }
    p {
      margin: 6px 0 50px 0;
    }
    .test-link {
      text-decoration: none;
      :hover {
        color: #fcb813;
        transition: 0.3s;
      }
    }
    .flex {
      justify-content: space-between;
    }
  }
`;

export default function MonoBlog() {
  return (
    <Wrapper>
      <div className="blogcard">
        <div className="blogcard-bg"></div>
        <div className="blogcard-text">
          <h2>Healthy Living</h2>
          <p>
            Using our algorithm, we carry out a preliminary assessment to
            understand the state of your health and determine how best to serve
            you!
          </p>
          <div className="flex">
            <Link className="test-link" to="">
              Try the test
            </Link>
            <Button
              value="Read More"
              theme="green"
              style={{ boxShadow: "0px 4px 4px rgba(46, 196, 182, 0.25)" }}
            >
              {" "}
              Read More
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

MonoBlog.propTypes = {
  //TODO: blog prop types goes here
};
