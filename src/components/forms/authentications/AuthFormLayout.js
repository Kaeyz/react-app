import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	.paper {
		padding: 2vw;
		max-width: 100%;
		justify-content: center;
		background: ${(props) => props.theme.color.ui_01};
		box-shadow: 0px 4px 50px rgba(4, 8, 19, 0.1);
		border-radius: 6px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			padding: 1.6rem;
		}
		.MuiGrid-spacing-xs-3 > .MuiGrid-item {
			padding: 0 10px;
		}
	}
	.form_header {
		max-width: 100%;
		display: grid;
		justify-items: center;
		text-align: center;
		padding-bottom: 2rem;
		border-bottom: 2px solid ${(props) => props.theme.color.ui_03};
	}
	.footerText {
		/* font-family: Sofia; */
		color: ${(props) => props.theme.color.text_05};
		padding-top: 1.6rem;
		text-align: center;
	}
	.footer_link {
		color: ${(props) => props.theme.color.active_primary};
		text-decoration: underline;
	}
	.none {
		display: none;
	}
`;

export default function AuthFormLayout({ children, showFormAgreement, show }) {
	const displayAgreement = () => (
		<p className="footerText">
			<span>By clicking Sign Up, you agree to our </span>
			<span>
				<Link to="/terms" className="footer_link">
					Terms of Use
				</Link>{' '}
			</span>
			<span>and our </span>
			<span>
				<Link to="/privacy" className="footer_link">
					Privacy Policy.
				</Link>
			</span>
		</p>
	);

	return (
		<Wrapper>
			<Paper className="paper">
				{children}
				<div className={`${show} footer`}>
					{showFormAgreement && displayAgreement()}
				</div>
			</Paper>
		</Wrapper>
	);
}

AuthFormLayout.defaultProps = {
	showFormAgreement: true,
};

AuthFormLayout.propTypes = {
	children: PropTypes.any.isRequired,
	showFormAgreement: PropTypes.bool,
	show: PropTypes.string,
};
