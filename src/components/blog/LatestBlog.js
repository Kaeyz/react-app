// modules
import React from "react";
import styled from "styled-components";
import MonoBlog from "./MonoBlog.js";
//import PropTypes from 'prop-types';

const Wrapper = styled.div`
  /* blog css styling goes here */
  text-align: center;
  width: 1440px;
  max-width: 100%;
  height: 775px;
  background: rgba(46, 196, 182, 0.05);
  border: 1px solid rgba(46, 196, 182, 0.3);
  border-radius: 5px;
  position: relative;
  overflow: scroll;
  .blog-content {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
  .blog-cards {
    width: 1179px;
    margin: auto;
    max-width: 100%;
    justify-content: space-around;
  }
  #head {
    font-size: 32px;
    line-height: 38px;
    color: #1d1d1d;
    margin-bottom: 55px;
  }
`;

export default function LatestBlog() {
  return (
    <Wrapper>
      {/* blog component goes here */}
      <div className="blog-content">
        <h2 id="head">Our Blog</h2>
        <div className="blog-cards flex">
          <MonoBlog />
          <MonoBlog />
          <MonoBlog />
        </div>
      </div>
    </Wrapper>
  );
}

LatestBlog.propTypes = {
  //TODO: blog prop types goes here
};
