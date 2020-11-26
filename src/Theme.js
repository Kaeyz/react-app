import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import basicFont from './assets/Myfont/Matteo.otf';
import secFont from './assets/Myfont/FuturaPTBook.otf';
import brownFont from './assets/Myfont/BrownLightRegular.ttf';
import avenirFont from './assets/Myfont/Metropolis-Light.otf';
import caviarFont from './assets/Myfont/CaviarDreams.ttf';
import hraFont from './assets/Myfont/sofiapro-light.otf';
import Notify from './components/notification/Notify';

const theme = {
	color: {
		brand_01: '#F47803',
		brand_02: '#2EC4B6',
		brand_03: '#FFBA08',
		brand_04: '#8DB838',
		brand_05: '#f7fdfc',
		brand_06: '#E0E0E0',
		brand_07: '#FF3D3D',
		brand_08: '#f2f2f2',
		brand_09: '#f8ab74',
		ui_01: '#ffffff',
		ui_02: '#FBFCFA',
		ui_03: '#F3F0F0',
		ui_04: '#D6D8D3',
		ui_05: '#000b0a',
		ui_06: '#0a2523',
		ui_07: '#a6a6a6',
		ui_08: '#f37920',
		ui_09: '#fbfbfb',
		ui_10: '#8DB838',
		ui_11: '#ffc624',
		ui_12: '#A2E4DE',
		ui_13: '#5D6C76',
		ui_14: '#BDBDBD',
		ui_15: '#E2E2EA',
		ui_16: '#969696',
		text_01: '#1D1D1D',
		text_02: '#606161',
		text_03: '#ffffff',
		text_04: '#828282',
		text_05: '#000000',
		text_06: '#737373',
		text_07: '#171f46',
		text_08: '#fcb813',
		text_09: '#3cbdb2',
		text_10: '#F0F9F9',
		text_11: '#9ECD43',
		text_12: '#7C7D8D',
		text_13: '#263035',
		text_14: '#f6f6f6',
		text_15: '#41b6a5',
		ui_text_01: '#CBF3F0',
		ui_text_02: '#FFA393',
		ui_text_03: '#FFBF69',
		ui_text_04: '#CEEE8F',
		ui_text_05: '#011C34',
		ui_text_06: '#f0f0f0',
		ui_text_07: '#C4C4C4',
		ui_text_08: '#F7C236',
		ui_text_09: '#EEEEEE',
		hover_primary: '#CEEE8F',
		hover_row: '#F3F0F0',
		active_primary: '#2EC4B6',
		support_info: '#000000',
		support_success: '#000000',
		support_error: '#000000',
		support_warning: '#000000',
	},
	breakpoint: {
		lg: '1058px',
		md: '768px',
		sm: '480px',
	},
};

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Matteo;
    src: url(${basicFont}) ;
  }

@font-face {
    font-family: Futura;
    src: url(${secFont}) ;
  }
@font-face {
    font-family: Sofia;
    src: url(${hraFont}) ;
  }
@font-face {
    font-family: Avenir;
    src: url(${avenirFont}) ;
  }
@font-face {
    font-family: Caviar;
    src: url(${caviarFont}) ;
  }
@font-face {
    font-family: Brown;
    src: url(${brownFont}) ;
  }

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
    font-family: Matteo ;
		background:#fff;
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
  	vertical-align: middle;
  	max-width: 100%;
  	height: auto;
	}
	a {
		text-decoration: none;
	}
`;

const Theme = (props) => (
	<ThemeProvider theme={theme}>
		<div>
			<GlobalStyle />
			<Notify />
			{props.children}
		</div>
	</ThemeProvider>
);
Theme.propTypes = {
	children: PropTypes.any.isRequired,
};

export { theme };
export default Theme;
