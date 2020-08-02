import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import plus from '../../../../assets/plus.svg';
import minus from '../../../../assets/minus.svg';
import rectangle from '../../../../assets/Rectangle.svg';

const Wrapper = styled.div`
  margin: 4rem 0;
  .MuiCollapse-wrapperInner {
    display: flex;
    justify-content: space-between;
  }
  .expanded-content {
    padding: 4rem 3rem;
    position: relative;
    align-items: start;
    display: flex;
    justify-content: space-between;
    .left-content {
      margin-right: 6.4rem;
      width: 30rem;
      top: 0;
    }
    .right-content {
      width: 65%;
    }

    .minimize {
	  right: 22px;
	  top: 2rem;
      position: absolute;
    }
    .rectangle {
		left: 0;
		top: 4rem;
      position: absolute;
    }
  }

  .paper {
    margin: 1rem 0;
    color: ${(props) => props.theme.color.text_01};
    padding: 1rem;
    justify-content: space-between;
    h2 {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: normal;
    }
    h4 {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: normal;
    }
  }
  .hidden {
    display: none;
  }
  .MuiAccordionSummary-content {
    display: block;
    margin: 0;
  }
  .MuiAccordionSummary-root {
	padding: 3rem 3rem;
	align-items: end;
	border-radius: 1rem;
	border: 1px solid #fff;
  }
  .MuiAccordionSummary-content.Mui-expanded,.MuiAccordionSummary-expandIcon.Mui-expanded {
    display: none;
  }
  .MuiAccordionSummary-root.Mui-expanded {
    height: .2rem;
    top: -1.0rem;
    position: absolute;
	width: 100%;
	border: 0;
	z-index: 300;
  }
  .MuiAccordionSummary-expandIcon.Mui-expanded {
    position: absolute;
    right: 3.7rem;
    top: 3.1rem;
  }
  .MuiAccordionDetails-root {
    padding: 0;
  }
  .MuiAccordion-rounded,.MuiAccordionSummary-root{
	  border-radius: 1rem !important;
	  
  }
  #panel1bh-header {
  }
  .heading {
    color: #2ec4b6;
    font-weight: bold;
    font-size: 2.1rem;
    line-height: 3.0rem;
    margin-bottom: 1rem;
  }
  .sub-heading {
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.5rem;
    letter-spacing: 0..2rem;
    color: #000b0a;
  }
  .MuiCollapse-entered{
    border: .1rem solid #2ec4b6;
	border-radius: 1rem;
  }
`;

function ReviewCard({ ...props }) {
	const [expanded, setExpanded] = React.useState(false);
	// eslint-disable-next-line
  const [show, toggleShow] = React.useState(true);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
		//  toggleShow(!show)
	};

	return (
		<Wrapper>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				{show && (
					<AccordionSummary
						expandIcon={<img src={plus} alt="maximize" />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<p className="heading" style={{color: "#000B0A"}}>{props.heading}</p>

						<p className="sub-heading">
              Our aim is to help you live your best lives, taking into
              consideration.lorem ispum dior iono.
						</p>
					</AccordionSummary>
				)}

				<AccordionDetails>
					<div className="expanded-content">
						<div className="left-content">
							<p className="heading">{props.heading}</p>

							<p className="sub-heading">
                Our aim is to help you live your best lives, taking into
                consideration.lorem ispum dior iono.
							</p>
						</div>

						<div className="right-content questions">
			 Questions
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              atque quos maxime cupiditate mollitia modi? Placeat ullam
              excepturi laboriosam voluptas adipisci corporis, natus deserunt,
              commodi delectus totam sapiente dicta omnis dolorem possimus nam
              in expedita nihil consequuntur doloremque dolorum et? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Iusto atque quos
              maxime cupiditate mollitia modi? Placeat ullam excepturi
              laboriosam voluptas adipisci corporis, natus deserunt, commodi
              delectus totam sapiente dicta omnis dolorem possimus nam in
              expedita nihil consequuntur doloremque dolorum et? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Iusto atque quos
              maxime cupiditate mollitia modi? Placeat ullam excepturi
              laboriosam voluptas adipisci corporis, natus deserunt, commodi
              delectus totam sapiente dicta omnis dolorem possimus nam in
              expedita nihil consequuntur doloremque dolorum et? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Iusto atque quos
              maxime cupiditate mollitia modi? Placeat ullam excepturi
              laboriosam voluptas adipisci corporis, natus deserunt, commodi
              delectus totam sapiente dicta omnis dolorem possimus nam in
              expedita nihil consequuntur doloremque dolorum et?
						</div>
						<div className='minimize'>
						<img src={minus} alt="miniimize" />
						</div>
						<div className='rectangle'>
						<img src={rectangle} alt="rectangle" />
						</div>
					</div>
				</AccordionDetails>
			</Accordion>
		</Wrapper>
	);
}

ReviewCard.propTypes = {
	heading: PropTypes.string.isRequired,
};

export default ReviewCard;
