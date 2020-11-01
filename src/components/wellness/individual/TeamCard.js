import React from 'react';
import Container from '../../common/Container';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import MonoBlog from '../../blog/MonoBlog';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin-top: 8rem;
  .health {
    background-color: ${(props) => props.theme.color.ui_text_01};
  }
  .fitness {
    background-color: ${(props) => props.theme.color.ui_text_03};
  }
  .lifestyle {
    background-color: ${(props) => props.theme.color.ui_text_02};
  }
  .nutrition {
    background-color: ${(props) => props.theme.color.ui_text_04};
  }
  .team_card {
    padding: 2rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .details {
    width: 55%;
    height: 100%;
    display: grid;
    grid-gap: 2rem;
  }
`;

function TeamCard({ page, details, tryTest, card }) {
	const fetchColor = (page) => {
		if (page === 'health') return 'default'; 
		if (page === 'fitness') return 'deepYellow';
		if (page === 'lifestyle') return 'pink';
		if (page === 'nutrition') return 'purple';
	};

	return (
		<Wrapper>
			<div className={page}>
				<Container>
					<div className={'team_card'}>
						<div className="details">
							<h1>{details.title}</h1>
							<p>{details.description}</p>
							<Link to="/onboarding/company">
								<Button theme={page === 'health' ? 'darkGreen' : 'yellow'}>
                  Get Started
								</Button>
							</Link>
						</div>
						<div className="card">
							<MonoBlog
								color={fetchColor(page)}
								tryTest={tryTest}
								data={card}
							/>
						</div>
					</div>
				</Container>
			</div>
		</Wrapper>
	);
}

TeamCard.propTypes = {
	page: PropTypes.oneOf(['health', 'lifestyle', 'nutrition', 'fitness']),
	details: PropTypes.object.isRequired,
	card: PropTypes.object.isRequired,
	tryTest: PropTypes.bool,
};

export default TeamCard;
