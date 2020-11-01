// modules
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const Wrapper = styled.div`

`;

export default function MonoBlog({ color, tryTest, data }) {
	const displayTest = () => {
		return (
			<Link className="test_link" to="/">
        Try the test
			</Link>
		);
	};

	return (
		<Wrapper>
	
		</Wrapper>
	);
}
