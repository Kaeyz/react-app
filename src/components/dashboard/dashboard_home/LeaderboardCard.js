import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled.div`
width:100%;
  .paper {
    background: rgba(46, 196, 182, 0.06);
    border: 1px solid ${props => props.theme.color.ui_12};
    border-radius: 10px;
    padding: 3rem;
    cursor: pointer;
    &:hover{
      transform: scale(.9);
      transition: .3s;
    }
  }
  .position {
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1.2rem;
    letter-spacing: 0.2px;
    color: ${props => props.theme.color.ui_05};
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: 1.1rem;
    }
  }
  .positionValue {
    padding-bottom: 2rem;
    font-size: 4.8rem;
    line-height: 4.6rem;
    letter-spacing: -0.4px;
    color: ${props => props.theme.color.ui_05};
    span {
      font-size: 2rem;
    }
  }
`;

function LeaderboardCard() {
	return (
		<Wrapper>
			<Paper className="paper" elevation={2}>
				<div>
					<p className="positionValue">
            114 <span>/ 120</span>
					</p>
					<p className="position">
            It is a long established fact that a reader{' '}
					</p>
				</div>
			</Paper>
		</Wrapper>
	);
}

// LeaderboardCard.propTypes = {

// }

export default LeaderboardCard;
