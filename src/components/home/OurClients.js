import React from 'react';
import styled from 'styled-components';
import corona from '../../assets/clients/corona.png';
import streamsower from '../../assets/clients/streamsowers-kohn-nigeria.jpg';
import flower1 from '../../assets/img/flower_1.png';
import flower2 from '../../assets/img/flower_2.png';
import fbnInsurance from '../../assets/testimony1.png';
import enyo from '../../assets/testimony2.png';
import unicane from '../../assets/testimony4.jpg';
import nepal from '../../assets/testimony5.jpg';
import unikem from '../../assets/testimony7.jpg';
import Container from '../common/Container';

const Wrapper = styled.div`
  position: relative;
  background-color: rgba(46, 196, 182, 0.05);
  padding: 50px 0;
  height: 715px;
  max-height: 885px;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    height: auto;
    padding-bottom: 0;
  }
  .content {
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-gap: 6rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: block;
    }
  }
  .lhs {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .lhs h1 {
    margin-bottom: 10px;
    font-weight: 500;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    }
  }
  .lhs .info {
    margin-bottom: 80px;
  }
  .big {
    width: 170px;
  }
  .small {
    width: 85px;
  }
  .small .circle {
    height: 85px;
  }
  .big .circle {
    height: 130px;
  }
  .circle {
    border-radius: 50%;
    width: 100%;
    text-align: center;
    /* background: white; */
    img {
      max-width: 100%;
    }
  }
  .rhs,
  .lhs {
    position: relative;
  }
  .rhs .rand-img {
    position: absolute;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      position: relative;
      right: auto;
      left: auto;
      top: auto;
    }
  }
  .rhs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-gap: 2rem;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    .rhs {
      width: 100%;
      overflow-x: scroll;
    }
    .rhs::-webkit-scrollbar {
      height: 1px;
    }

    .rhs::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    .rhs::-webkit-scrollbar-thumb {
      background-color: #8db838;
      outline: 1px solid slategrey;
    }
  }
  .amazon {
    right: 40%;
  }
  .firstBank {
    top: 30%;
    right: 70%;
  }
  .kuda {
    top: 35%;
    right: -10%;
    img {
      width: 50%;
    }
  }
  .inter {
    top: 87%;
    left: 6%;
  }
  .gtb {
    top: 73%;
    right: 35%;
    img {
      width: 45%;
    }
  }
  .paystack {
    top: 147%;
    left: 0;
    img {
      width: 75%
    }
  }
  .flutter {
    right: 45%;
    top: 140%;
  }
  .fly {
    top: 118%;
    right: 15%;
    img {
      width: 45px;
    }
  }
  .hp {
    position: absolute;
    right: 0;
    top: 100%;
    img {
      width: 150px;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: none;
    }
  }
  .hp-mobile {
    display: none;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: flex;
    }
    div {
      position: relative;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        display: flex;
      }
    }
  }
  .flower {
    position: absolute;
    height: 350px;
  }
  .flower2 {
    right: 0;
    top: 90px;
  }
  .flower1 {
    bottom: -50px;
  }
`;
function OurClients() {
	return (
		<Wrapper>
			<img className="flower flower1" src={flower1} alt="flower1" />
			<img className="flower flower2" src={flower2} alt="flower2" />
			<Container>
				<div className="content">
					<div className="lhs">
						<h1>Our Work Speak For Itself</h1>
						<p className="info">
							At Choose Life, we understand that what goes into
							your body Is the most important part of your health.
							This is why we offer support through personalized
							nutrition plans and recipe on how to make healthier
							versions of the Foods you already love.
						</p>

						<div className="rand-img flex big hp">
							<div className="circle flex hp">
								{' '}
								<img src={streamsower} alt="streamsower" />
							</div>
						</div>
					</div>
					<div className="rhs">
						<div className="rand-img flex small amazon">
							<div className="circle flex ">
								{' '}
								<img src={corona} alt="amazon" />
							</div>
						</div>

						<div className="rand-img flex small firstBank">
							<div className="circle flex " title="FBN Insurance">
								{' '}
								<img src={fbnInsurance} alt="fbn insurance" />
							</div>
						</div>
						<div className="rand-img flex kuda">
							<div
								className="circle flex "
								title="Unikem industries "
							>
								<img src={unikem} alt="Unikem industries " />
							</div>
						</div>

						<div className="rand-img flex small inter">
							<div
								className="circle  flex"
								title="Enyo Retail and Supply "
							>
								<img src={enyo} alt="Enyo Retail and Supply " />
							</div>
						</div>
						<div className="rand-img flex big gtb">
							<div
								className="circle flex "
								title="Unicane industries"
							>
								<img src={unicane} alt="Unicane industries" />
							</div>
						</div>
						<div className="rand-img flex big paystack">
							<div
								className="circle flex paystack"
								title="Nepal Oil and Gas"
							>
								{' '}
								<img src={nepal} alt="Nepal Oil and Gas" />
							</div>
						</div>
						{/*
            <div className="rand-img flex small flutter">
              <div className="circle flex flutter">
                <img src={flutter} alt="flutter" />
              </div>
            </div>
            <div className="rand-img flex small fly">
              <div className="circle flex fly">
                <img src={fly} alt="" />
              </div>
            </div>
            <div className="rand-img flex big hp hp-mobile">
              <div className="circle flex hp "><img src={hp} alt="hp" /></div>
            </div> */}
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}

OurClients.propTypes = {};

export default OurClients;
