import React from 'react';
import PropTypes from 'prop-types';
import Back from '../../../../assets/greenBackArrow.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  .back {
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    color: #2ec4b6;
    margin-left: 0.8rem;
  }
  .flex-back {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 4.8rem 0;
  }
  .flex {
    display: flex;
    justify-content: start;
    img {
      width: 3rem;
      height: 3rem;
      margin-right: 2rem;
    }
    h1 {
      font-size: 20px;
      line-height: 20px;
      letter-spacing: -0.2px;
      font-weight: normal;
      color: #000b0a;
    }

    .null {
      border: 1px solid rgba(214, 216, 211, 0.5);
      width: 61%;
      margin: 10px 0px;
    }
  }
  .withGuage{
	  justify-content: space-between;
  }
`;
function QuestionnaireLayout({ children , ...props }) {
	return (
		<Wrapper>
			<div className="flex-back">
				<img src={Back} alt="go back" />
				<p className="back">Back</p>
			</div>
	  <div className="flex withGuage">
				<div>
					<div className="flex" style={{ alignItems: 'center' }}>
						{' '}
						<img src={props.Image} alt={props.alt} />
						<h1>{props.heading}</h1>
					</div>
				</div>

				<div className="null"></div>
			</div>
			{children}
		</Wrapper>
	);
}

QuestionnaireLayout.propTypes = {
	Image: PropTypes.any,
	heading: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
};

export default QuestionnaireLayout;
