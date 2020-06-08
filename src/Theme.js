import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import bodyFont from './assets/OpenSans-SemiBold.ttf';
import secondaryFont from './assets/URW Martin Gothic W01 Bold.ttf';


const theme = {
	color: {
		green: '#147119',
		yellow: '#eab10a',
		black: '#333',
		blue: '#492DDA',
		white: '#f2efe1',
		grey: 'grey',
		background: '#ffffff',
	},
	font: {
		// header_font: 'Tahoma',
		body_font: 'Roboto',
	}
};


const Wrapper = styled.div`
  background-color: ${theme.color.background};
`;

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Captain';
  src: local('Captain'), local('Captain'),
  url(${bodyFont}) format('ttf'),
  url(${secondaryFont}) format('ttf')

}
	html {
		box-sizing: border-box;
		font-size: 10px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	/* font */


	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
		outline: none;
    height: 100%;
    font-family: Captain;

  }
	div, span {
    margin: 0;
    padding: 0;
  }
	h1, h2, h3, h4, h5, p {
		margin: 0;
		padding: 0;
	}


	.navbar__link--active {
		color: #2ec4b6 !important;
	  }

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  vertical-align: center;
  max-width: 100%;
  height: auto;
}

/* button */
.greenBtn {
  border: 1px solid #2ec4b6;
  color: #2ec4b6;
  background-color: rgba(203, 243, 240, 0.1);
}
.greenBtn:hover {
  color: #fff;
  background: #2ec4b6 !important;
  transition: 0.3s;
}
.yellowBtn {
  background: #fcb813;
  box-shadow: 0px 4px 4px rgba(252, 184, 19, 0.25);
  color: white;
  border: 1px solid #fcb813;
}
.yellowBtn:hover {
  background-color: #fff;
  color: #fcb813;
  transition: 0.3s;
}
.nav > .nav-links > a {
    display: block;
    width: 100%;
  }
.nav #nav-check:checked ~ .nav-btn > .label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
/* .heroes */
.heroes {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.heroText {
  position: absolute;
  top: 40%;
  width: 1200px;
  left: 50%;
  transform: translate(-50%, -50%);
  }
`;

const Theme = (props) => (
	<ThemeProvider theme={theme}>
		<div>
			<GlobalStyle />
			<Wrapper>{props.children}</Wrapper>
		</div>
	</ThemeProvider>
);
Theme.propTypes = {
	children: PropTypes.object.isRequired,
};

export default Theme;
