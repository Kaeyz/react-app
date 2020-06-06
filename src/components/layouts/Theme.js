import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
	color: {
		green: '#147119',
		yellow: '#eab10a',
		black: '#333',
		blue: '#492DDA',
		white: '#f2efe1',
		grey: 'grey',
		background: '#F4F2FF',
	},
	font: {
		header_font: 'Tahoma',
		body_font: 'Roboto',
	}
};

const Wrapper = styled.div`
	background-color: ${theme.color.background};
`;

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		font-size: 10px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
	}
	div, span {
    margin: 0;
    padding: 0;
  }
	h1, h2, h3, h4, h5, p {
		margin: 0;
		padding: 0;
	}
`;

const Theme = (props) =>
	<ThemeProvider theme={theme}>
		<div>
			<GlobalStyle />
			<Wrapper>{props.children}</Wrapper>
		</div>
	</ThemeProvider>
	;

Theme.propTypes = {
	children: PropTypes.object.isRequired
};


export default Theme;