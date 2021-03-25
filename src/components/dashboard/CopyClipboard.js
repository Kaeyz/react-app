import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import link from '../../assets/copyLink.svg';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr max-content;
	grid-gap: 3rem;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
		grid-template-columns: 1fr;
	}
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		justify-items: center;
	}
	#btn {
		/* font-family: Sofia; */
		font-weight: 600;
		text-align: center;
		letter-spacing: 0.2px;
		color: ${(props) => props.theme.color.text_06};
		background: ${(props) => props.theme.color.brand_08};
		border-radius: 8px;
		border: none;
		width: 200px;
		padding: 1.5rem 0;
		cursor: pointer;
		outline: none;
		height: 60px;
		&:focus {
			background-color: ${(props) => props.theme.color.text_06};
			color: ${(props) => props.theme.color.brand_08};
			transition: 0.3s;
		}
	}
	form {
		position: relative;
		img {
			position: absolute;
			right: 9px;
			bottom: 17px;
			cursor: pointer;
		}
	}
	input {
		padding: 2rem;
		width: 100%;
		height: 6rem;
		/* font-family: Sofia; */
		font-weight: 300;
		line-height: 1.5rem;
		letter-spacing: 0.1px;
		color: ${(props) => props.theme.color.ui_06};
		border: 2px solid ${(props) => props.theme.color.ui_text_06};
		border-radius: 4px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			overflow: scroll;
			padding-right: 5rem;
		}
	}
`;

export default function CopyExample() {
	const [copySuccess, setCopySuccess] = useState('Copy Link');
	const textAreaRef = useRef(null);

	function CopyClipboard(e) {
		textAreaRef.current.select();
		document.execCommand('copy');
		// This is just personal preference.
		// I prefer to not show the whole text area selected.
		e.target.focus();
		setCopySuccess('Copied!');
	}

	return (
		<Wrapper>
			<form>
				<input
					ref={textAreaRef}
					value="https://chooselife.com/1288813852!?quwa"
				/>
				<img src={link} alt="link" onClick={CopyClipboard} />
			</form>
			{
				/* Logical shortcut for only displaying the
          button if the copy command exists */
				document.queryCommandSupported('copy') && (
					<div>
						<button id="btn" onClick={CopyClipboard}>
							{copySuccess}
						</button>
					</div>
				)
			}
		</Wrapper>
	);
}
