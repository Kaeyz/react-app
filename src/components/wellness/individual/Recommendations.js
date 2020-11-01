import React from 'react';
import Container from '../../common/Container';
import styled from 'styled-components';
import Ellipse31 from '../../../assets/Ellipse31.svg';
import Ellipse30 from '../../../assets/Ellipse30.svg';
import Ellipse_31 from '../../../assets/Ellipse_31.svg';
import Ellipse32 from '../../../assets/Ellipse32.svg';
import Button from '../../common/Button';
import smallImg from '../../../assets/Group.svg';
import undraw_working_out from '../../../assets/undraw_working_out.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  .left-background {
    background-image: url(${Ellipse31});
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: 0% 18%;
    background-size: 4%;
  }
  .right-background {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 5%;
  }
  .pink {
    background-image: url(${Ellipse32});
  }
  .green {
    background-image: url(${Ellipse_31});
  }
  .bottom-right {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: auto;
    background-image: url(${undraw_working_out});
  }
  .bottom-left {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: 110% 370%;
    background-size: auto;
    background-image: url(${Ellipse30});
  }
  .detailImg {

    img {
      border-radius: 12px;
    }
  }
  .Rec {
    padding: 7rem 0;
    justify-content: space-between;
    min-height: 45rem;
  }
  .details {
    width: 50%;
  }
  .RecInfo {
    margin: 2rem 0;
    font-size: 14px;
    line-height: 24px;
    color: ${(props) => props.theme.color.text_02};
  }
  .detailImg {
    min-width: 30rem;
    max-width: 5vw;
  }
  h3 {
    font-size: 30px;
    line-height: 32px;
    color: ${(props) => props.theme.color.text_01};
  }
`;

function Recommendations({ data }) {
	const { background: { right, left, bottomRight, bottomLeft }, icon, title, img, description, button } = data;
	return (
		<Wrapper>
			<div className={right && 'left-background'}>
				<div className={`right-background ${left}`} >
					<div className={bottomRight && 'bottom-right' }>
						<div className={bottomLeft && 'bottom-left' }>
							<Container>
								<div className="Rec flex">
									<div className="detailImg">
										<img src={img} alt="RecImg" />
									</div>
									<div className="details">
										{icon && <img src={smallImg} alt="smallImg" />}
										<h3>{title}</h3>
										<p className="RecInfo">{description}</p>
										<div>
                    <Link to="/onboarding/company">
                    <Button value="Get started" theme={button === 'green' ? 'darkGreen': button}>
                    Get started
											</Button>
              </Link>
											
										</div>
									</div>
								</div>
							</Container>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

Recommendations.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Recommendations;
