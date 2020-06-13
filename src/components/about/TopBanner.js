// modules
import React from 'react';
import styled from 'styled-components';
import ashBg from '../../assets/topBannerImg1.png';
import flower from '../../assets/img/flower_1.png';
import img from '../../assets/affection-couple.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 51rem;
  flex-wrap: wrap;
  overflow: hidden;
  max-width:1058px;
  margin:auto;
  .content {
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    h1 {
      font-size: 4vw;
      line-height: 8.6rem;
      color: #1d1d1d;
    }
  }
  .Rhs {
    width: 59.6rem;
    max-width: 100%;
    height: 39.1rem;
    z-index: 2;
    margin-right: -8rem;
    background-image: url(${img});
  }
  .Lhs{
    width: 42.5rem;
      position: relative ;
      text-align:left;
  }
  .empty {
    position: absolute;
    width: 52.5rem;
    height: 51.9rem;
    background: #cbf3f0;
    right: 0;
    z-index: -1;
  }
  .flower {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .ashBg {
    position: absolute;
    left: -1rem;
    bottom: -11rem;
      width: 35.077rem;
  }
`;

export default function TopBanner() {
	return (
		<Wrapper>
			<div className="content flex">
				<div className="Lhs" >
					<h1>Inspiring wholesome harmony </h1>
					<img src={ashBg} alt="ash bg" className="ashBg" />
				</div>
				<div className="Rhs"></div>
			</div>

			<img src={flower} alt="flower" className="flower" />
			<div className="empty"></div>
		</Wrapper>
	);
}

TopBanner.propTypes = {
	//TODO: Top banner info prop types goes here
};
