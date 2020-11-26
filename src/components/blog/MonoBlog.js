/*eslint-disable */
// modules
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import blogImg from "../../assets/girlRunning.png";
import { Card, CardContent } from "@material-ui/core";
import PropTypes from "prop-types";


const Wrapper = styled.div`
  /* blog css styling goes here */
  .blog_card {
    min-width: 27rem;
    max-width: 30rem;
    margin: 0 0 3rem 0;
    border: 1px solid ${(props) => props.theme.color.ui_text_09};
    &:hover{
      box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
      transition : .3s;
    }
  }
  .img_div {
    width: 100%;
    max-height: 30rem;
    position: relative;
  }
  .blog_img {
    width: 100%;
    height: 100%;
    margin-top: -14px;
  }
  .card_content {
    text-align: center;
    padding-bottom: 3rem;
  }
  .blog-tag {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  #yellow {
    background-color: rgba(247, 194, 54, 0.8);
  }
  .blog-title {
    color: ${(props) => props.theme.color.text_13};
    font-size: 1.6rem;
    line-height: 2.2rem;
    width: 70%;
    color: #1d1d1d;
    margin: 25px auto;
  }
  .light {
    font-size: 1.3rem;
    font-weight: 100;
    line-height: 1.8rem;
    color: ${(props) => props.theme.color.text_12};
  }
`;

 function MonoBlog({
  getBlogs,
  isLoading,
  src,
  id,
  title,
    createdAt
}) {

  return (
    <Wrapper>
   
      <Link class='mono-blog-link'>
      <Card className="blog_card" elevation={0}>
        <div className="img_div">
          <img src={blogImg} alt="blog img" className="blog_img" />
          <p className="tag blog-tag" id="yellow">
            Fitness
          </p>
        </div>
        <CardContent className={`card_content`}>
          <h2 className="auto light">{id}</h2>
          <p className="blog-title">{title}</p>
          <h2 className="date light">{createdAt}</h2>
        </CardContent>
      </Card>
      </Link>
    </Wrapper>
  );

  }
MonoBlog.defaultProps = {};

MonoBlog.propTypes = {
 
	src: PropTypes.string,
	alt: PropTypes.string,
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	asset: PropTypes.any,
};



export default MonoBlog;
