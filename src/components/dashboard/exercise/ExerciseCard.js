import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import defaultImg from '../../../assets/defaultImage.jpg';

const Wrapper = styled.div`
	.programmes {
		.paper {
			padding: 1rem;
			box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
			border-radius: 10px;
			min-width: 230px;
			img {
				width: 100%;
				height: 150px;
			}
		}
		.info {
			font-weight: normal;
			line-height: 1.3rem;
			letter-spacing: 0.2px;
			color: ${(props) => props.theme.color.ui_05};
			padding: 0.5rem 0;
		}
	}
`;

function ExerciseCard({ text, image, id }) {
	return (
		<Wrapper>
			<div className="programmes">
				<Link to={`/exercise/${id}`}>
					<Paper className="paper">
						<LazyLoadImage
							className="img"
							alt={image.alt}
							height={140}
							placeholder={<h5>Loading</h5>}
							placeholderSrc={defaultImg}
							effect="blur"
							src={image}
							width={200}
						/>
						<p className="info">{text}</p>
					</Paper>
				</Link>
			</div>
		</Wrapper>
	);
}

ExerciseCard.propTypes = {
	text: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	image: PropTypes.any,
};

export default ExerciseCard;
