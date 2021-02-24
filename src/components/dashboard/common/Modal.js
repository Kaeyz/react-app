import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import close from '../../../assets/close.svg';


const Wrapper = styled.div`
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 222;
		background: rgba(0, 0, 0, 0.6);
		.modal-main {
			background: ${(props) => props.theme.color.ui_01};
			width: 500px;
			padding: 0 2.4rem 2.4rem;
			height: auto;
			text-align: start;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-width: 100%;
			display: flex;
			flex-direction: column;
			position: relative;
			overflow-y: auto;
			overflow-x: hidden;
			@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.md}) {
				padding-top: 6rem;
			}
			&::-webkit-scrollbar {
				width: 1.3rem;
			}

			&::-webkit-scrollbar-track {
				-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
			}

			&::-webkit-scrollbar-thumb {
				background-color: darkgrey;
				outline: 1px solid slategrey;
			}
		}
		.modal-right {
			transform: translate(-0%, -0%);
			height: 100%;
			top: 0;
			left: 0;
			float: right;
		}
		.centered {
			text-align: center;
		}
	}
	.bold {
		font-weight: bold;
		font-size: 1.6rem;
		line-height: 3rem;
		color: ${(props) => props.theme.color.ui_05};
	}
	.big {
		font-size: 2.1rem;
		line-height: 4rem;
	}
	.light {
		font-weight: 300;
		padding: 1rem 0 3rem 0;
		p {
			margin-top: 13px;
			line-height: 2.5rem;
		}
	}
	.close {
		justify-content: flex-end;
		#close-icon {
			&:hover {
				transition: 0.3s;
				transform: scale(1.2);
				cursor: pointer;
			}
		}
	}
	.heading {
		margin-top: -18px;
		padding: 0;
	}

	.display-block {
		display: block;
	}

	.display-none {
		display: none;
	}
`;

const Modal = ({
	handleClose,
	show,
	children,
	heading,
	info,
	position, align, img, alt
}) => {
	const showHideClassName = show ? 'modal display-block' : 'modal display-none';

	return (
		<Wrapper>
			<div className={showHideClassName}>
				<section  className={`${position} ${align} modal-main`}>
					<div className="close flex" onClick={handleClose}>
						<img src={close} alt="close-modal" id="close-icon" />
					</div>
					<div className="heading">
						<img src={img} alt={alt}/>
						<h1 className="bold  big">{heading}</h1>
						<div className="light">{info}</div>
					</div>
					{children}

				</section>
			</div>
		</Wrapper>
	);
};
Modal.defaultProps = {
	info:
    'It is a long established fact that a reader will be distracted by the readable content.',
};

Modal.propTypes = {
	align: PropTypes.string,
	alt: PropTypes.string,
	btn2: PropTypes.element,
	children: PropTypes.any.isRequired,
	handleClose: PropTypes.func.isRequired,
	heading: PropTypes.any.isRequired,
	img: PropTypes.any,
	info: PropTypes.any.isRequired,
	position: PropTypes.string,
	shortBtn: PropTypes.string,
	show: PropTypes.bool.isRequired,
	textBtn: PropTypes.string
};

export default Modal;
