import React from 'react';
import PropTypes from 'prop-types';
import Back from '../../../../assets/greenBackArrow.svg';
import styled from 'styled-components';
import Button from '../../../../components/common/Button';
import downloadIcon from '../../../../assets/Vector.svg';

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
  .withGuage{
    flex-wrap:wrap;
  }
  .flex {
    display: flex;
    justify-content: start;
    .mb{
      margin-bottom: 2rem;
    }
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
      width:400px;
    }

    .null {
      border: 1px solid rgba(214, 216, 211, 0.5);
      width: -webkit-fill-available;
      margin: 10px 0px;
    }
    .showButton{
      display: block;
      button{
        display: flex;
    align-items: center;
    justify-content: center;
      }
   img{
    margin-right:0;
    margin-left:1rem;
    width: 1.8rem;
    height: 2rem;
   }
    }
    .hideButton{
      display: none;
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
					<div className="flex mb" style={{ alignItems: 'center' }}>
						{' '}
						<img src={props.Image} alt={props.alt} />
						<h1>{props.heading}</h1>
					</div>
				</div>

				<div className={props.null}></div>
				<div className={`${props.button} button`}>
					<Button theme="darkGreenBtn" style={{width:'16.3rem'}}>Download Report
						<img src={downloadIcon}alt={downloadIcon}/>
					</Button>
				</div>
			</div>
			{children}
		</Wrapper>
	);
}

QuestionnaireLayout.propTypes = {
	Image: PropTypes.any,
	heading: PropTypes.string.isRequired,
	null: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	button: PropTypes.any.isRequired,
};

export default QuestionnaireLayout;
