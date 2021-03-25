

import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';


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

ScrollTop.propTypes = {
	children: PropTypes.any,
	window: PropTypes.func
};

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
	arrow: PropTypes.any,
	children: PropTypes.any.isRequired,
	header: PropTypes.any.isRequired,
	toAbout: PropTypes.func,
	toPillar: PropTypes.func
};
