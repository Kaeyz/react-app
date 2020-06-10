// modules
import React from 'react';
import styled from 'styled-components';
import MonoBlog from './MonoBlog.js';
//import PropTypes from 'prop-types';

const Wrapper = styled.div`
  text-align: center;
  background: rgba(46, 196, 182, 0.05);
  border: 1px solid rgba(46, 196, 182, 0.3);
  border-radius: 5px;
  .blog-content {
    padding: 3rem 0rem;
    display: grid;
    grid-gap: 3rem;
  }
  .blog-cards {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export default function LatestBlog() {
	return (
		<Wrapper>
			<div className="blog-content">
				<h2>Our Blog</h2>
				<div className="blog-cards">
					<MonoBlog />
					<MonoBlog />
					<MonoBlog />
				</div>
			</div>
		</Wrapper>
	);
}

LatestBlog.propTypes = {
	//TODO: blog prop types goes here
};
