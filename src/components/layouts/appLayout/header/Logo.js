import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

import brand from '../../../../assets/brand.png';

function Logo() {
	return (
		<div>
			<Link to="/" className="nav-title">
				<img src={brand} alt="logo" />
			</Link>
		</div>
	);
}

Logo.propTypes = {

};

export default Logo;

