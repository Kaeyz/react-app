import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	.paper {
		padding: 2vw;
		max-width: 100%;
		display: grid;
		justify-content: center;

	}
	.form_header {
		max-width: 100%;
		display: grid;
		justify-items: center;
		text-align: center;
		padding-bottom: 2rem;
		border-bottom: 2px solid ${props => props.theme.color.ui_03}
	}
	.footerText {
		font-size: 1.2rem;
		text-align: center;
	}
	.footer_link {
		color: ${props => props.theme.color.active_primary};
	}

`;

export default function AuthFormLayout({children, showFormAgreement, description, title }) {

	const displayAgreement = () => (
		<p className="footerText">
			<span>By clicking Sign Up, you agree to our </span>
			<span><Link to="/terms" className="footer_link">Terms of Use</Link> </span>
			<span>and our </span>
			<span><Link to="/privacy" className="footer_link">Privacy Policy.</Link></span>
		</p>
	);

	return (
		<Wrapper>
			<Paper className="paper">
				<div className="form_header">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				{children}
				<div className="footer">
					{showFormAgreement && displayAgreement() }
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
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
};
