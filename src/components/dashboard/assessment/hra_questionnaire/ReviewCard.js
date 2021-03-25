import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import minus from '../../../../assets/minus.svg';
import plus from '../../../../assets/plus.svg';
import rectangle from '../../../../assets/Rectangle.svg';
import { getQuestions } from '../../../../store/actions/hraActions';
import HraInput from '../../../hra_input';

const Wrapper = styled.div`
	margin: 4rem 0;
	.MuiCollapse-wrapperInner {
		display: flex;
		justify-content: space-between;
	}
	.expanded-content {
		padding: 4rem 3rem;
		align-items: start;
		display: flex;
		justify-content: space-between;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: block;
		}
		.left-content {
			margin-right: 3rem;
			width: 30rem;
			@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.sm}) {
				width: 100%;
			}
		}
		.right-content {
			width: 70%;
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
			font-weight: normal;
		}
		h4 {
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
	.MuiAccordionSummary-content.Mui-expanded,
	.MuiAccordionSummary-expandIcon.Mui-expanded {
		display: none;
	}
	.MuiAccordionSummary-root.Mui-expanded {
		height: 0.2rem;
		top: -1rem;
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
	.MuiAccordion-rounded,
	.MuiAccordionSummary-root {
		border-radius: 1rem !important;
	}
	#panel1bh-header {
	}
	.colored {
		color: ${(props) => props.theme.color.ui_05};
	}
	.heading {
		color: ${(props) => props.theme.color.brand_02};
		font-weight: bold;
		font-size: 2.1rem;
		line-height: 3rem;
		margin-bottom: 1rem;
	}
	.sub-heading {
		font-weight: 300;
		line-height: 2.5rem;
		letter-spacing: 0.2rem;
		color: ${(props) => props.theme.color.ui_05};
	}
	.MuiCollapse-entered {
		border: 0.1rem solid ${(props) => props.theme.color.brand_02};
		transition: 0.1s;
		border-radius: 1rem;
	}
`;

function ReviewCard({ title, category, getQuestions, questions }) {
	const [expanded, setExpanded] = React.useState(false);
	const [show] = React.useState(true);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	React.useEffect(() => {
		getQuestions(category);
	}, [getQuestions, category]);

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
						<p className="heading">{title}</p>

						<p className="sub-heading">{questions.prompt || ''}</p>
					</AccordionSummary>
				)}

				<AccordionDetails>
					<div className="expanded-content">
						<div className="left-content">
							<p className="heading">{title}</p>

							<p className="sub-heading">
								{questions.prompt || ''}
							</p>
						</div>

						<div className="right-content questions">
							{questions.q &&
								questions.q.map((question, index) => (
									<HraInput
										key={question.id}
										id={question.id}
										number={index + 1}
										label={question.label}
										prompt={question.prompt}
										inputs={question.input}
									/>
								))}
						</div>
						<div className="minimize">
							<img src={minus} alt="miniimize" />
						</div>
						<div className="rectangle">
							<img src={rectangle} alt="rectangle" />
						</div>
					</div>
				</AccordionDetails>
			</Accordion>
		</Wrapper>
	);
}

ReviewCard.propTypes = {
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) => {
	const questions = state.hra.questions[props.category];
	return { questions: questions || {} };
};

export default connect(mapStateToProps, { getQuestions })(ReviewCard);
