/*eslint-disable */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';


const Wrapper = styled.div``;

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
}));

function ScrollTop(props) {
	const { children, window } = props;
	const classes = useStyles();
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			'#back-to-top-anchor'
		);

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
				{children}
			</div>
		</Zoom>
	);
}

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };
export default function AppLayout({ children, arrow, header, toPillar, toAbout }) {
	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			'#back-to-top-anchor'
		);

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};
	return (
		<>
			<Wrapper>
				<Toolbar
					id="back-to-top-anchor"
					style={{ position: 'absolute', visibility: 'hidden' }}
				/>
				{header}
				{children}
				<Footer arrow ={arrow} onClick={handleClick} onClickPillar={toPillar} onClickAbout={toAbout}/>
			</Wrapper>
			<ScrollTop>
				<Fab
					color="secondary"
					size="small"
					style={{ backgroundColor: '#8db838' }}
					aria-label="scroll back to top"
				>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</>
	);
}

AppLayout.propTypes = {
	children: PropTypes.array.isRequired,
	header: PropTypes.any.isRequired,
	arrow: PropTypes.any,
	toPillar: PropTypes.func,
	toAbout: PropTypes.func
};
