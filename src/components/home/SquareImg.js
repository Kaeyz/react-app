/*eslint-disable */
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .main {
    position: relative;
  }
  .img {
    z-index: 3;
    height: 400px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 43%;
    left: 53%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 95%;
    }
  }
  .img1 {
    background-image: url("https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607310686/chooseLife/Webp.net-compress-image_1_fxxnx8.jpg");
  }
  .img2 {
    background-image: url("https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309882/chooseLife/affection-couple_v36hii.svg");
  }
  .img3 {
    background-image: url("https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607310415/chooseLife/Webp.net-compress-image_lyqf0s.jpg");
  }
  .absolute {
    position: absolute;

    border-radius: 10px;
  }
  .empty {
    height: 375px;
  }
  .empty1 {
    right: -33px;
    top: -53px;
    width: 100%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      right: 10px;
      width: 89%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      right: 0px;
      width: 87%;
    }
  }
  .gray {
    border: 3px solid ${(props) => props.theme.color.ui_16};
  }
  .lightgray {
    border: 3px solid rgba(150, 150, 150, 0.27);
  }
  .blue {
    border: 3px solid ${(props) => props.theme.color.brand_02};
  }
  .yellow {
    border: 3px solid ${(props) => props.theme.color.ui_11};
  }
  .orange {
    border: 3px solid ${(props) => props.theme.color.ui_08};
  }
  .green {
    border: 3px solid ${(props) => props.theme.color.ui_10};
  }
  .empty2 {
    border-radius: 10px;
  }
  .caption {
    color: ${(props) => props.theme.color.ui_08};
    font-size: 2rem;
    line-height: 2.5rem;
    font-family: Caviar;
    text-align: center;
    margin: 30px auto 0 auto;
    width: 70%;
  }
`;
function SquareImg({ bg, border1, border2, caption, childImage }) {
  return (
    <Wrapper>
      <div className="main">
        <div className={` ${bg} absolute img`}></div>
        <div className={` ${border1} absolute empty empty1`}></div>
        <div className={` ${border2}  empty empty2`}></div>
        <img className={` absolute img2`} src={childImage} alt="" />
      </div>
      <p className="caption">{caption}</p>
    </Wrapper>
  );
}

SquareImg.propTypes = {
  bg: PropTypes.string.isRequired,
  border1: PropTypes.string,
  childImage: PropTypes.string,
  border2: PropTypes.string,
  caption: PropTypes.string,
};

export default SquareImg;
