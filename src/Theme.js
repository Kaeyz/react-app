import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
	color: {
		brand_01: '#F47803',
		brand_02: '#2EC4B6',
		brand_03: '#FFBA08',
		brand_04: '#8DB838',
		ui_01: '#ffffff',
		ui_02: '#FBFCFA',
		ui_03: '#F3F0F0',
		ui_04: '#D6D8D3',
		text_01: '#1D1D1D',
		text_02: '#606161',
		text_03: '#ffffff',
		ui_text_01: '#CBF3F0',
		ui_text_02: '#FFA393',
		ui_text_03: '#FFBF69',
		ui_text_04: '#CEEE8F',
		hover_primary: '#CEEE8F',
		hover_row: '#F3F0F0',
		active_primary: '#2EC4B6',
		support_info: '#000000',
		support_success: '#000000',
		support_error: '#000000',
		support_warning: '#000000',
	},
	font: {
		// header_font: 'Tahoma',
		body_font: 'cursive',
	},
	breakpoint: {
		lg: '1058px',
		md: '768px',
		sm: '480px'
	}
};


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
		outline: none;
    height: 100%;
    font-family: cursive;

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
  background-color: #2ec4b6;
  transition: 0.4s;
}
.darkGreenBtn {
  border: 1px solid #2ec4b6;
  color: ${theme.color.ui_01};
  background-color: ${theme.color.brand_02};
}
.darkGreenBtn:hover {
  color: #fff;
  color: #2ec4b6;
  background-color: rgba(203, 243, 240, 0.1);
  transition: 0.4s;
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
  transition: 0.4s;
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
		border: 2pc solid black;
  }

`;

const Theme = (props) => (
	<ThemeProvider theme={theme}>
		<div>
			<GlobalStyle />
			{props.children}
		</div>
	</ThemeProvider>
);
Theme.propTypes = {
	children: PropTypes.object.isRequired,
};

export default Theme;
