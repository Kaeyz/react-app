import React from 'react';
import Container from '../../common/Container';
import styled from 'styled-components';
import Button from '../../common/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background: #cbf3f0;
  padding: 4.3rem 0;
  .tracker {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 35rem;
  }
  .trackInfo {
    margin: 2rem 0;
    font-size: 14px;
    line-height: 24px;
    color: ${(props) => props.theme.color.text_02};
  }
  .detailImg {
    min-width: 30rem;
    max-width: 34rem;
    margin-left: 3rem;
    margin-top: 3rem;
  }
  .details {
    width: 55%;
  }
  h3 {
    font-size: 30px;
    line-height: 32px;
    color: ${(props) => props.theme.color.text_01};
  }
`;

function HealthTrackCard({data}) {
	return (
		<Wrapper>
			<Container>
				<div className="tracker" style={{ flexDirection: 'row-reverse' }}>
					<div className="detailImg">
						<img src={data.img} alt="trackImg" />
					</div>
					<div className="details">
						<h3>{data.title} </h3>
						<p className="trackInfo">
							{data.description}
						</p>

						<div>
            <Link to="/onboarding/individual">
            <Button value="Get started" theme="darkGreen">
                Get started
							</Button>
              </Link>
							
						</div>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}

HealthTrackCard.propTypes = {
	data: PropTypes.object.isRequired,
};

export default HealthTrackCard;
